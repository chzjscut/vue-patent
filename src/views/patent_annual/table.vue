<template>
  <div>
    <!-- 表格展示 -->
    <el-table
      v-loading="listLoading"
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
      <!-- <el-table-column
        label="专利号"
        property="zlh"
        min-width="120"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="专利名称"
        property="title"
        min-width="120"
        show-tooltip-when-overflow
      />
      <el-table-column
        v-if="$route.name === 'consoleAnnualQuery'"
        label="专利类型"
        property="type"
        min-width="100"
        show-tooltip-when-overflow
      /> -->
      <el-table-column show-tooltip-when-overflow label="专利名称" min-width="180">
        <template slot-scope="scope">
          <div class="zl-info">
            <span
              :data-type="scope.row.type === '发明专利'
                ?'zl':scope.row.type === '实用新型'?'xx'
                  :scope.row.type === '外观设计'?'wg':''"
            >{{ scope.row.type }}</span>
            <span class="number">{{ scope.row.zlh }}</span>
            <div>{{ scope.row.title }}</div>
          </div>
          <div class="zl-info">{{ scope.row.inventName }}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="申请日期"
        sortable
        property="sqri"
        min-width="100"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="申请人(专利权人)"
        property="sqren"
        min-width="150"
        show-tooltip-when-overflow
      />
      <!-- <el-table-column
        v-if="$route.name === 'consoleAnnualMonitor'"
        label="发明人"
        property="fmr"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column
        label="代理机构"
        property="dailijgmc"
        min-width="200"
        show-tooltip-when-overflow
      /> -->
      <el-table-column
        label="缴费截止日"
        sortable
        property="jyzr"
        min-width="100"
        show-tooltip-when-overflow
      />
      <el-table-column
        v-if="$route.name === 'consoleAnnualMonitor'"
        label="年费类型"
        sortable
        property="feetype"
        min-width="100"
        show-tooltip-when-overflow
      />
      <!-- <el-table-column
        label="年费状态"
        show-tooltip-when-overflow
      >
        <template slot-scope="scope">
          <div
            :style="{color: scope.row.fystatus === '正常'? '#008400'
              :scope.row.fystatus === '紧急'?'#FF6600'
                :scope.row.fystatus === '滞纳'?'#FF6600': '#D2D2D2'}"
          >
            {{ scope.row.fystatus }}
          </div>
        </template>
      </el-table-column> -->
      <el-table-column
        label="年费状态"
        property="fystatus"
        min-width="150"
        show-tooltip-when-overflow
      />
      <el-table-column label="年费/滞纳金" show-tooltip-when-overflow align="center">
        <template slot-scope="scope">{{ (scope.row.fee=='/'? '-' : scope.row.fee)+'/'+(scope.row.penalty=='/'? '-' : scope.row.penalty) }}</template>
      </el-table-column>

      <el-table-column
        v-if="$route.name === 'consoleAnnualQuery'"
        label="年费提醒"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.useratt"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            @change="handleSwitchChange(scope.row.zlh, scope.row.useratt)"
          />
        </template>
      </el-table-column>
      <template v-if="$route.name === 'consoleAnnualMonitor'">
        <el-table-column label="详情" show-tooltip-when-overflow>
          <template slot-scope="scope">
            <router-link
              target="_blank"
              tag="a"
              style="color: #409EFF"
              :to="{name: 'annualDetail', query: {zlh: scope.row.zlh}}"
            >费用信息
            </router-link>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      class="page-center"
      :total="total"
      :current-page="page"
      layout="prev, pager, next"
      :hide-on-single-page="true"
      @current-change="handleCurrentChange"
    />
    <!-- <el-pagination
      :page-size="size"
      :page-sizes="[10]"
      :current-page="page"
      class="page-center"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->
  </div>
</template>

<script>
export default {
  props: ['listLoading', 'tableData', 'searchData', 'page', 'size', 'total'],
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
      this.$emit('switchChange', { zlh: zlh, attentionState })
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
