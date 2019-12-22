<template>
  <div class="annual-query">
    <el-button type="primary" size="small" @click="dialogShow">多专利查询</el-button>
    <el-dropdown v-if="false" trigger="click" @command="queryChoose">
      <el-button type="primary" size="small" style="width: 92px;height: 32px;">
        表格查询<i class="el-icon-arrow-down el-icon--right" />
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">excel导入</el-dropdown-item>
        <el-dropdown-item command="2">模板下载</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button v-if="false" type="primary" size="small" @click="handleAttentionAll">一键提醒</el-button>

    <!-- <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick"> -->
    <!-- 全局搜索 -->
    <!-- <div class="search-global">
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
    </div> -->

    <!--查询条件-->
    <!-- <div class="table-filter">
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
    </div> -->
    <el-upload
      :action="batchInsertAction"
      :show-file-list="false"
      :on-err="handleUploadError"
      :on-success="handleUploadSuccess"
      :before-upload="handleBeforeUpload"
      accept=".xlsx, .xls"
      :headers="uploadHeaders"
      style="display: none;margin: 0 10px"
    >
      <el-button
        id="uploadExcel"
        ref="excelUpload"
        class="filter-box"
        type="primary"
        size="small"
      >导入
      </el-button>
    </el-upload>
    <a id="downloadTmpl" ref="downloadTmpl" :href="excelTemplate" download="专利批量导入Excel模板.xlsx" class="download-template" style="display: none;">专利批量导入Excel模板下载</a>

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

    <!-- 专利查询弹窗 -->
    <el-dialog title="专利批量查询" :visible.sync="isDialogVisible">
      <el-form ref="searchParams" :model="searchParams" :rules="rules" label-position="top">
        <el-form-item label="专利号:" prop="zlh" label-width="100px">
          <el-input v-model="searchParams.zlh" type="textarea" :rows="5" placeholder="请输入专利号，多个专利号之间用逗号隔开" auto-complete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="doBatchSearch('searchParams');isDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import TableCom from './table'
import { EXCEL_TEMPLATE, FETCH_HEADERS, UPLOAD_ACTION } from '@/utils/const'
import { GLOBAL_SEARCH, BASE_LIST, ATTENTION_PATENT, doSearch_feeinfo } from '@/api/console'

export default {
  components: { TableCom },
  data() {
    return {
      searchParams: { // {'2016201445312','201620144531.2','201720095923.9'}
        zlh: ''
      },
      rules: {
        zlh: [
          { required: true, message: '专利号不能为空', trigger: 'blur' }
        ]
      },
      isDialogVisible: false, // 控制弹窗显示
      patentStr: '', // 多个专利号的字符串，用于专利批量查询
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
      // this.doSearch_feeinfo()
      // await this.initGlobalKey()
      // this.getSearchList()
      /* if (this.searchConditionKey) {
        this.searchCondition()
      }*/
    },

    // 选择表格查询方式
    queryChoose(e) {
      const uploadBtn = document.getElementById('uploadExcel')
      const downloadUrl = document.getElementById('downloadTmpl')
      if (e === '1') {
        this.$refs['excelUpload'].$el.click()
      } else if (e === '2') {
        downloadUrl.click()
      }
    },

    dialogShow() {
      this.isDialogVisible = true
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

    // 根据专利号查询专利年费信息
    async doSearch_feeinfo() {
      doSearch_feeinfo(this.searchParams).then(res => {
        this.searchParams.zlh = ''
        if (res.status === 1000) {
          this.tableData = res.data
        } else {
          this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
        }
      }).catch(({ msg }) => {

      })
    },

    // 全局搜索
    async searchCondition() {
      this.importZlIds = []
      this.resetPagination()
      this.searchData.zlNo = ''
      this.searchData.applyPersonName = ''
      this.listLoading = true
      GLOBAL_SEARCH({ searchCondition: this.searchConditionKey })
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

    cancel() {
      this.searchParams.zlh = ''
      this.isDialogVisible = false
    },

    // 根据输入的专利号进行批量查询
    doBatchSearch(formName) {
      // console.log(this.searchParams)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.resetPagination()
          this.searchParams.zlh = this.serialize(this.searchParams.zlh)
          this.doSearch_feeinfo()
        } else {
          this.searchParams.zlh = ''
          console.log('error submit!!')
          return false
        }
      })
    },
    serialize(zlhStr) {
      const zlhArr = zlhStr.split(',')
      let str = '{'
      zlhArr.forEach(function(item, index) {
        str += (index === 0 ? "'" : ",'") + item + "'"
      })
      str += '}'
      return str
    },

    // 列表查询
    async fetchList() {
      this.listLoading = true
      const param = { ...this.searchData, pageNo: this.page, pageSize: this.size }
      BASE_LIST(param)
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
      console.log(paramZlNos, this.page)
      BASE_LIST({ zlNos: paramZlNos.join() })
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
      console.log(this.importZlIds.length)
      if (this.importZlIds.length) {
        this.fetchImportList()
      } else {
        this.fetchList()
      }
    },

    // 单个关注
    async handleSwitchChange(val) {
      this.listLoading = true
      ATTENTION_PATENT(val)
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

        ATTENTION_PATENT({ selectedIds, attentionState: 1 })
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

    // excel上传成功回调
    handleUploadSuccess(response) {
      this.batchImportDisabled = false
      this.batchImportBtnTxt = '专利批量导入'
      this.$message({
        message: response.success ? '导入成功' : '导入失败',
        type: response.success ? 'success' : 'error',
        customClass: 'el-message-custom'
      })
      if (response.success) {
        this.resetPagination()
        this.total = response.data.length || 0
        this.importZlIds = response.data
        this.fetchImportList()
      }
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
