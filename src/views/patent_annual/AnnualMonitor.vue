<template>
  <div class="content">
    <!--查询条件-->
    <div class="table-filter search-wrap">
      <label class="label ml0">专利类型</label>
      <el-select
        v-model="queryObj.type"
        clearable
        filterable
        size="small"
        style="width: 150px"
        placeholder="请选择专利类型"
      >
        <el-option
          v-for="item in zlTypeOptions"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>
      <label class="label">年费状态</label>
      <el-select
        v-model="queryObj.stateName"
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
      <label class="label">申请日期</label>
      <el-date-picker
        v-model="sqrDate"
        class="daterange"
        type="daterange"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
        value-format="yyyy-MM-dd"
        @change="handleSqrDate"
      />
      <label class="label">缴费日期</label>
      <el-date-picker
        v-model="jfrDate"
        class="daterange"
        type="daterange"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
        value-format="yyyy-MM-dd"
        @change="handleJfrDate"
      />
      <label class="label">专利号</label>
      <el-input
        v-model.trim="zlh"
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
import { doExport_monitor, doSearch_monitor, delpat } from '@/api/console'
// import { download } from '../../plugins/axios.download'

export default {
  components: { TableCom },
  data() {
    return {
      zlh: '',
      sqrDate: '',
      jfrDate: '',
      queryObj: { // "{'201620144531.2','201720095923.9'}"
        zlh: '',
        type: '',
        sqri_startDate: '',
        sqri_endDate: '',
        jyzr_startDate: '',
        jyzr_endDate: ''
        // username: getUserName()
      },
      exportParams: {
        zlh: '',
        username: getUserName()
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
      // const param = { ...this.queryObj, pageNo: this.page, pageSize: this.size }
      // this.queryObj.zlh = this.serialize(this.zlh)
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
      if (zlhStr === '') {
        return ''
      }
      const zlhArr = zlhStr.split(',')
      let str = '{'
      zlhArr.forEach(function(item, index) {
        str += (index === 0 ? "'" : ",'") + item + "'"
      })
      str += '}'
      return str
    },

    handleSqrDate() {
      console.log(this.sqrDate)
      if (this.sqrDate && this.sqrDate.length > 0) {
        this.queryObj.sqri_startDate = this.sqrDate[0]
        this.queryObj.sqri_endDate = this.sqrDate[1]
      } else {
        this.queryObj.sqri_startDate = ''
        this.queryObj.sqri_endDate = ''
      }
    },
    handleJfrDate() {
      if (this.jfrDate && this.jfrDate.length > 0) {
        this.queryObj.jyzr_startDate = this.jfrDate[0]
        this.queryObj.jyzr_endDate = this.jfrDate[1]
      } else {
        this.queryObj.jyzr_startDate = ''
        this.queryObj.jyzr_endDate = ''
      }
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
        download('/export/excelExports', this.queryObj, '年费监控')
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
      console.log(sel)
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
  .content{
    padding: 15px;
    box-sizing: border-box;
  }
  .search-wrap .label{
    font-weight: normal;
    font-size: 12px;
    /* margin-right: 5px; */
    margin-left: 20px;
  }
  .search-wrap .label.ml0{
    margin-left: 0;
  }
  .search-wrap .el-input{
    margin-left: 0;
  }
  .el-input {
    width: 150px !important;
  }
  .table-button-group .el-button{
    margin-right: 0;
  }
  .table-button-group .el-button+.el-button{
    margin-right: 0;
  }
  .daterange {
    width: 260px;
  }
</style>
