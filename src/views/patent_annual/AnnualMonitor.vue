<template>
  <div class="annual-monitor">
    <!--查询条件-->
    <div class="table-filter">
      <el-select
        v-model="searchFilter.zlType"
        clearable
        filterable
        size="small"
        style="margin-right: 10px;width: 150px"
        placeholder="请选择专利类型"
      >
        <el-option
          v-for="item in zlTypeOptions"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="searchFilter.stateName"
        clearable
        filterable
        size="small"
        style="width: 150px;"
        placeholder="请选择年费状态"
      >
        <el-option
          v-for="item in stateNameOptions"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        v-model="searchFilter.applyDateStart"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        type="date"
        size="small"
        placeholder="请选择申请开始日期"
      />
      <span style="margin-left: 10px">-</span>
      <el-date-picker
        v-model="searchFilter.applyDateEnd"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        type="date"
        size="small"
        placeholder="请选择申请结束日期"
      />
      <el-date-picker
        v-model="searchFilter.paymentDateStart"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        type="date"
        size="small"
        placeholder="请选择缴费开始日期"
      />
      <span style="margin-left: 10px">-</span>
      <el-date-picker
        v-model="searchFilter.paymentDateStart"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        type="date"
        size="small"
        placeholder="请选择缴费结束日期"
      />
      <el-input
        v-model="zlh"
        placeholder="请输入专利号"
        size="small"
      />
      <div class="table-button-group" style="display:inline-block;">
        <el-button type="primary" size="small" @click="handleGetList">查询</el-button>
        <el-button type="primary" size="small" @click="handleDelete">删除</el-button>
        <el-button type="primary" size="small" @click="exportExcel">导出到EXCEL</el-button>
      </div>
    </div>
    <!-- 表格展示 -->
    <table-com
      :list-loading="listLoading"
      :page="page"
      :size="size"
      :total="total"
      :table-data="tableData"
      @pageSizeChange="handlePageSizeChange"
      @currPageChange="handleCurrPageChange"
      @multipleSelectChange="handleMultipleSelectChange"
    />
  </div>
</template>
<script>
import TableCom from './table'
import { getUserName } from '@/utils/auth'
import { doExport_monitor, doSearch_monitor } from '@/api/console'
// import { download } from '../../plugins/axios.download'

export default {
  components: { TableCom },
  data() {
    return {
      zlh: '',
      queryObj: { // "{'201620144531.2','201720095923.9'}"
        zlh: '',
        username: 'liudong' // getUserName()
      },
      exportParams: {
        zlh: ''
      },
      searchFilter: {
        zlh: '',
        zlType: '',
        stateName: '',
        applyPersonName: '',
        applyDateStart: '',
        applyDateEnd: '',
        paymentDateStart: '',
        paymentDateEnd: ''
      },
      tableData: [],
      zlTypeOptions: [
        {
          key: '发明专利',
          value: '发明专利'
        },
        {
          key: '实用新型',
          value: '实用新型'
        },
        {
          key: '外观设计',
          value: '外观设计'
        }],
      stateNameOptions: [
        {
          key: '正常',
          value: '正常'
        },
        {
          key: '紧急',
          value: '紧急'
        },
        {
          key: '滞纳',
          value: '滞纳'
        },
        {
          key: '其他',
          value: '其他'
        }
      ],
      listLoading: false,
      multipleSelection: [],
      // 页码
      page: 1,
      size: 10,
      total: 0
    }
  },

  mounted() {
    // this.fetchList()
    // this.exportExcel()
  },

  methods: {
    // 查询
    handleGetList() {
      this.resetPagination()
      this.fetchList()
    },

    // 查询表格列表
    async fetchList() {
      this.listLoading = true
      // this.queryObj.zlh = this.zlh;
      // const param = { ...this.searchFilter, pageNo: this.page, pageSize: this.size }
      this.queryObj.zlh = this.serialize(this.zlh)
      doSearch_monitor(this.queryObj).then(res => {
        if (res.status === 1000) {
          this.tableData = res.data
          // this.total = res.total
          this.listLoading = false
        } else {
          this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
        }
      }).catch(({ msg }) => {
        this.listLoading = false
        this.$message({
          type: 'error',
          message: msg,
          customClass: 'el-message-custom'
        })
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

    // 删除
    async handleDelete() {
      const SEL_LEN = this.multipleSelection.length
      if (SEL_LEN) {
        const selectedIds = this.multipleSelection.map(item => {
          return item.zlNo
        }).join()

        this.listLoading = true
        this.$api.BATCH_DELETE({ data: { selectedIds }, returnError: true })
          .then(() => {
            this.fetchList()
            this.$message({
              type: 'success',
              message: '删除成功',
              customClass: 'el-message-custom'
            })
          })
          .catch(({ msg }) => {
            this.fetchList()
            this.$message({
              type: 'error',
              message: msg,
              customClass: 'el-message-custom'
            })
          })
      } else {
        this.$message({
          type: 'warning',
          message: '请先勾选删除项',
          customClass: 'el-message-custom'
        })
      }
    },

    // 导出
    async exportExcel() {
      // this.queryObj.zlh = this.zlh;
      this.exportParams.zlh = this.serialize(this.zlh)
      var res = await doExport_monitor(this.exportParams)
      /* try {
        download('/export/excelExports', this.searchFilter, '年费监控')
      } catch ({ msg }) {
        this.$message({
          type: 'error',
          message: msg,
          customClass: 'el-message-custom'
        })
      }*/
    },

    // 重置页码
    resetPagination() {
      this.page = 1
      this.size = 10
    },

    // 多选变化
    handleMultipleSelectChange(sel) {
      this.multipleSelection = sel
    },
    handlePageSizeChange(val) {
      this.size = val
      this.fetchList()
    },
    handleCurrPageChange(val) {
      this.page = val
      this.fetchList()
    }
  }
}
</script>
<style scoped>
  .el-input {
    width: 150px !important;
  }
</style>
