<template>
  <div>
    <!-- 表格展示 -->
    <el-table :data = "tableData"
              size = "small"
              :max-height = "681"
              style = "margin-top: 20px;"
              :style = "{userSelect: userSelect?'select': 'none'}"
              v-loading = 'listLoading'
              border :stripe = "true" highlight-current-row
              :header-row-style = "{backgroundColor: '#f6f6f6'}"
              @selection-change = "handleSelectionChange">
      <el-table-column type = "selection" width = "55" fixed></el-table-column>
      <el-table-column show-tooltip-when-overflow label = "专利信息" min-width = "180">
        <template slot-scope = "scope">
          <div class = "zl-info">
            <span :data-type = "scope.row.zlType === '发明专利'
                            ?'zl':scope.row.zlType === '实用新型'?'xx'
                            :scope.row.zlType === '外观设计'?'wg':''">{{ scope.row.zlType }}</span>
            <span class = "number">{{ scope.row.zlNo }}</span>
          </div>
          <div class = "zl-info">{{ scope.row.inventName }}</div>
        </template>
      </el-table-column>
      <el-table-column label = "申请日" sortable property = "applyDate"
                       min-width = "150" show-tooltip-when-overflow></el-table-column>
      <el-table-column label = "专利权人" property = "applyPersonName"
                       min-width = "200" show-tooltip-when-overflow></el-table-column>
      <el-table-column label = "代理机构" property = "dailijgmc"
                       min-width = "200" show-tooltip-when-overflow></el-table-column>
      <el-table-column label = "缴费截止日" sortable property = "jiaofeijzr"
                       min-width = "150" show-tooltip-when-overflow></el-table-column>
      <el-table-column label = "年费状态" show-tooltip-when-overflow>
        <template slot-scope = "scope">
          <div :style = "{color: scope.row.stateName === '正常'? '#008400'
                        :scope.row.stateName === '紧急'?'#FF6600'
                        :scope.row.stateName === '滞纳'?'#FF6600': '#D2D2D2'}">
            {{ scope.row.stateName }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label = "年费/滞纳金" show-tooltip-when-overflow align = "center">
        <template slot-scope = "scope">{{ (scope.row.shijiyjje || '-')+'/'+(scope.row.forfeit || '-')}}</template>
      </el-table-column>
      <el-table-column label = "年费提醒"
                       v-if = "$route.name === 'consoleAnnualQuery'|| $route.name === 'consoleBatchQuery'">
        <template slot-scope = "scope">
          <el-switch v-model = "scope.row.attention"
                     @change = 'handleSwitchChange(scope.row.zlNo, scope.row.attention)'
                     active-color = "#13ce66"
                     inactive-color = "#ff4949"
                     :active-value = "1"
                     :inactive-value = "0">
          </el-switch>
        </template>
      </el-table-column>
      <template v-if = "$route.name === 'consoleAnnualMonitor'">
        <el-table-column label = "详情" show-tooltip-when-overflow>
          <template slot-scope = "scope">
            <router-link target = "_blank" tag = "a" style = "color: #409EFF"
                         :to = "{name: 'consoleFeeDetail', query: {zlNo: scope.row.zlNo}}">费用信息
            </router-link>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <el-pagination :page-size = "size"
                   :page-sizes = "[10]"
                   :current-page = "page"
                   @size-change = "handleSizeChange"
                   @current-change = "handleCurrentChange"
                   class = "page-center" :total = "total"
                   layout = "total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props : [ 'listLoading' , 'tableData' , 'searchData' , 'page' , 'size' , 'total' ] ,
    data () {
      return {
        userSelect : false ,
      }
    } ,

    mounted () {
      this.userSelect = this.canUserSelect()
    } ,

    methods : {
      handleSwitchChange (zlh , attentionState) {
        this.$emit('switchChange' , { selectedIds : zlh , attentionState })
      } ,
      // 多选变化
      handleSelectionChange (val) {
        this.$emit('multipleSelectChange' , val)
      } ,
      // 页面size变化
      handleSizeChange (val) {
        this.$emit('pageSizeChange' , val)
      } ,
      // 当前页码变化
      handleCurrentChange (val) {
        this.$emit('currPageChange' , val)
      } ,
      // 是否登录成功
      canUserSelect () {
        const stateUserInfo = this.$store.state.userInfo
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || stateUserInfo || '{}')
        return userInfo.hasOwnProperty('token') && userInfo.hasOwnProperty('userLevel') && userInfo.userLevel === '1'
      } ,
    } ,
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
