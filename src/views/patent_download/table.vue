<template>
  <div>
    <!-- 表格展示 -->
    <el-table
      v-loading="tableLoading"
      :data="tableData"
      size="small"
      :max-height="681"
      style="margin-top: 20px;"
      :style="{userSelect: userSelect?'select': 'none'}"
      border
      :stripe="true"
      highlight-current-row
      :header-row-style="{backgroundColor: '#f6f6f6'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" fixed />
      <el-table-column
        label="专利号"
        property="zlh"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="专利名称"
        property="title"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="申请日期"
        sortable
        property="sqri"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="申请人(专利权人)"
        property="sqren"
        min-width="200"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="授权日期"
        sortable
        property="shouquanri"
        min-width="150"
        show-tooltip-when-overflow
      />
      <!-- <el-table-column label="年费/滞纳金" show-tooltip-when-overflow align="center">
        <template slot-scope="scope">{{ (scope.row.fee=='/'? '-' : scope.row.fee)+'/'+(scope.row.penalty=='/'? '-' : scope.row.penalty) }}</template>
      </el-table-column> -->
      <el-table-column
        label="法律状态"
        property="flzt"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column label="详情" show-tooltip-when-overflow>
        <template slot-scope="scope">
          <router-link
            tag="a"
            style="color: #409EFF"
            :to="{name: 'patentDetail', query: {zlh: scope.row.zlh}}"
          >查看详情
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-size="size"
      :page-sizes="[10]"
      :current-page="page"
      class="page-center"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: ['tableLoading', 'tableData', 'searchData', 'page', 'size', 'total'],
  data() {
    return {
      userSelect: false
    }
  },

  mounted() {
    this.userSelect = this.canUserSelect()
  },

  methods: {
    handleSwitchChange(zlh, attentionState) {
      this.$emit('switchChange', { selectedIds: zlh, attentionState })
    },
    // 多选变化
    handleSelectionChange(val) {
      this.$emit('multipleSelectChange', val)
    },
    // 页面size变化
    handleSizeChange(val) {
      this.$emit('pageSizeChange', val)
    },
    // 当前页码变化
    handleCurrentChange(val) {
      this.$emit('currPageChange', val)
    },
    // 是否登录成功
    canUserSelect() {
      const stateUserInfo = this.$store.state.userInfo
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || stateUserInfo || '{}')
      return userInfo.hasOwnProperty('token') && userInfo.hasOwnProperty('userLevel') && userInfo.userLevel === '1'
    }
  }
}
</script>

<style scoped>
  .zl-info {
    font-size: 12px;
  }

  span[data-type] {
    padding: 2px;
    color: #fff;
    line-height: 1;
    margin-right: 2px;
    border-radius: 2px;
    display: inline-block;
  }

  /*发明专利：#F82889*/
  span[data-type = zl] {
    background: #F82889;
  }

  /*实用新型：#6CB9F3*/
  span[data-type = xx] {
    background: #6CB9F3;
  }

  /*外观设计：#3EFF3E*/
  span[data-type = wg] {
    background: #4936FF;
  }

  .zl-info .number {
    color: mediumblue;
  }
</style>
