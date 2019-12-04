<template>
  <div class="annual-query">
    <!-- 全局搜索 -->
    <div class="search-global">
      <i class="el-icon-info" style="margin-right: 10px" />
      <el-input
        v-model="searchConditionKey"
        size="large"
        placeholder="试试你想找的一切东西？"
        prefix-icon="el-icon-search"
        @keyup.enter.native="searchCondition"
      />
      <el-button
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
        @click="searchCondition"
      >搜索
      </el-button>
    </div>

    <!--查询条件-->
    <div class="table-filter">
      <el-input v-model="searchData.zlNo" placeholder="请输入专利号" size="small" />
      <el-input v-model="searchData.applyPersonName" placeholder="请输入专利权人全称" size="small" />
      <el-input v-model="searchData.dailijgmc" placeholder="请输入代理机构全称" size="small" />
      <div class="table-button-group" style="display: inline-block">
        <el-button type="primary" size="small" @click="handleGetListClick">二次检索</el-button>
        <template v-if="$route.name === 'consoleBatchQuery'">
          <el-upload
            :action="batchInsertAction"
            :show-file-list="false"
            :on-err="handleUploadError"
            :on-success="handleUploadSuccess"
            :before-upload="handleBeforeUpload"
            accept=".xlsx, .xls"
            :headers="uploadHeaders"
            style="display: inline-block;margin: 0 10px"
          >
            <el-button
              class="filter-box"
              type="primary"
              size="small"
              :disabled="batchImportDisabled"
            >{{ batchImportBtnTxt }}
            </el-button>
          </el-upload>
          <a :href="excelTemplate" download="专利批量导入Excel模板.xlsx" class="download-template">专利批量导入Excel模板下载</a>
        </template>
        <el-button type="primary" size="small" @click="handleAttentionAll">一键提醒</el-button>
      </div>
    </div>
    <table-com
      :list-loading="listLoading"
      :page="page"
      :size="size"
      :total="total"
      :table-data="tableData"
      @switchChange="handleSwitchChange"
      @pageSizeChange="handlePageSizeChange"
      @currPageChange="handleCurrPageChange"
      @multipleSelectChange="handleMultipleSelectChange"
    />
  </div>
</template>
<script>
import TableCom from './table'
import { EXCEL_TEMPLATE, FETCH_HEADERS, UPLOAD_ACTION } from '@/utils/const'

export default {
  components: { TableCom },
  data() {
    return {
      batchInsertAction: UPLOAD_ACTION,
      batchImportBtnTxt: '专利批量导入',
      batchImportDisabled: false,
      uploadHeaders: FETCH_HEADERS,
      excelTemplate: EXCEL_TEMPLATE,
      searchData: {
        zlNo: '',
        applyPersonName: ''
      },
      // 全局搜索key
      searchConditionKey: '',
      tableData: [],
      listLoading: false,
      multipleSelection: [],

      // 导入zlIds列表
      importZlIds: [],
      // 页码
      page: 1,
      size: 10,
      total: 0,
      globalKeyReg: /^[0-9|a-z]{2}.*$/
    }
  },
  mounted() {
    this.init()
  },

  methods: {
    async init() {
      await this.initGlobalKey()
      if (this.searchConditionKey) {
        this.searchCondition()
      }
    },

    // 初始化全局搜索关键词
    initGlobalKey() {
      const query = this.$route.query
      if (query && query.kw) {
        this.searchConditionKey = query.kw
        if (this.globalKeyReg.test(query.kw)) {
          this.searchData.zlNo = query.kw
        } else {
          this.searchData.applyPersonName = query.kw
        }
      }
    },

    // 全局搜索
    async searchCondition() {
      this.importZlIds = []
      this.resetPagination()
      this.searchData.zlNo = ''
      this.searchData.applyPersonName = ''
      this.listLoading = true
      this.$api.GLOBAL_SEARCH({ data: { searchCondition: this.searchConditionKey }, returnError: true })
        .then(res => {
          this.tableData = res.data
          this.total = res.total || 0
          this.listLoading = false
          if (this.globalKeyReg.test(this.searchConditionKey)) {
            this.searchData.zlNo = this.searchConditionKey
          } else {
            this.searchData.applyPersonName = this.searchConditionKey
          }
        })
        .catch(({ msg }) => {
          this.listLoading = false
          this.$message({
            type: 'error',
            message: msg,
            customClass: 'el-message-custom'
          })
        })
    },

    // 二次检索
    handleGetListClick() {
      this.importZlIds = []
      this.resetPagination()
      this.fetchList()
    },

    // 列表查询
    async fetchList() {
      this.listLoading = true
      const param = { ...this.searchData, pageNo: this.page, pageSize: this.size }
      this.$api.BASE_LIST({ data: param, returnError: true })
        .then(res => {
          this.tableData = res.data
          this.total = res.total || 0
          this.listLoading = false
        })
        .catch(({ msg }) => {
          this.listLoading = false
          this.$message({
            type: 'error',
            message: msg,
            customClass: 'el-message-custom'
          })
        })
    },

    // 批量导入查询
    async fetchImportList() {
      this.listLoading = true
      // 计算查询ids数组
      const paramZlNos = this.importZlIds.slice((this.page - 1) * this.size, this.page * this.size)
      this.$api.BASE_LIST({
        timeout: 0,
        returnError: true,
        data: { zlNos: paramZlNos.join() }
      })
        .then(res => {
          this.tableData = res.data
          this.listLoading = false
        })
        .catch(({ msg }) => {
          this.listLoading = false
          this.$message({
            type: 'error',
            message: msg,
            customClass: 'el-message-custom'
          })
        })
    },

    // 获取查询列表
    getSearchList() {
      if (this.importZlIds.length) {
        this.fetchImportList()
      } else {
        this.fetchList()
      }
    },

    // 单个关注
    async handleSwitchChange(val) {
      this.listLoading = true
      this.$api.ATTENTION_PATENT({ data: val, returnError: true })
        .then(() => {
          this.getSearchList()
          this.$message({
            type: 'success',
            customClass: 'el-message-custom',
            message: !Number(val.attentionState) ? '取消提醒成功' : '提醒成功'
          })
        })
        .catch(({ msg }) => {
          this.getSearchList()
          this.$message({
            type: 'error',
            message: msg,
            customClass: 'el-message-custom'
          })
        })
    },

    // 一键提醒
    async handleAttentionAll() {
      const SEL_LEN = this.multipleSelection.length
      if (SEL_LEN) {
        this.listLoading = true
        const selectedIds = this.multipleSelection.map(item => {
          return item.zlNo
        }).join()

        this.$api.ATTENTION_PATENT({ data: { selectedIds, attentionState: 1 }, returnError: true })
          .then(() => {
            this.getSearchList()
            this.$message({
              type: 'success',
              customClass: 'el-message-custom',
              message: '一键提醒成功'
            })
          })
          .catch(({ msg }) => {
            this.getSearchList()
            this.$message({
              type: 'error',
              message: msg,
              customClass: 'el-message-custom'
            })
          })
      } else {
        this.$message({
          type: 'warning',
          message: '请先勾选提醒项',
          customClass: 'el-message-custom'
        })
      }
    },

    // 批量导入状态处理
    handleBeforeUpload() {
      this.batchImportDisabled = true
      this.batchImportBtnTxt = '批量导入中...'
    },
    // 上传成功
    handleUploadSuccess(response) {
      this.batchImportDisabled = false
      this.batchImportBtnTxt = '专利批量导入'
      this.$message({
        message: response.success ? '导入成功' : '导入失败',
        type: response.success ? 'success' : 'error',
        customClass: 'el-message-custom'
      })
      this.total = response.data.length || 0
      this.importZlIds = response.data
      this.fetchImportList()
    },
    // 上传失败
    handleUploadError(err) {
      this.batchImportDisabled = false
      this.batchImportBtnTxt = '专利批量导入'
      this.$message({
        type: 'error',
        message: err,
        customClass: 'el-message-custom'
      })
    },

    resetPagination() {
      this.page = 1
      this.size = 10
    },

    handleMultipleSelectChange(sel) {
      this.multipleSelection = sel
    },

    handlePageSizeChange(val) {
      this.size = val
      this.getSearchList()
    },
    handleCurrPageChange(val) {
      this.page = val
      this.getSearchList()
    }
  }
}
</script>
<style scoped>
  .search-global {
    font-size: 20px;
    margin-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #ddd;
  }

  .search-global .el-input {
    width: 50%;
  }

  .download-template {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    padding: 8px 15px;
    font-size: 12px;
    top: 1px;
    position: relative;
    border-radius: 3px;
    margin-right: 10px;
  }
</style>
