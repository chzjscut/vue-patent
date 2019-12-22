<template>
  <div class="main">
    <!-- 头部操作行 -->
    <div class="operations-list">
      <a class="switch_on" :class="[displayList[displayType].iconClass]" @click="isSelectBoxVisible=!isSelectBoxVisible">
        <span class="barIcon" />{{ displayList[displayType].label }}<i class="iconfont el-icon-caret-bottom" style="font-size: 12px;" />
      </a>
      <div v-show="isSelectBoxVisible" class="type_switch">
        <a v-for="(item, index) in displayList" :key="index" class="Js_type type_l" :class="[item.iconClass, {active: displayType===index}]" @click="selectDisplayType(index)"><span class="barIcon" />{{ item.label }}</a>
      </div>

      <a class="Js_export"><span class="barIcon" />著录项导出</a>
      <a class="Js_multi_export"><span class="barIcon" />批量下载</a>
      <a id="Js_patentFee_dropdown" class="Js_patentFee" style="position: relative;"><span class="barIcon" />专利年费</a>
    </div>

    <!-- 内容展示区域 -->
    <div class="content">
      <!-- 列表模式 -->
      <table-display
        v-if="displayType===0"
        :table-loading="listLoading"
        :table-data="tableData"
      />
      <!-- 图文模式 -->
      <list-display
        v-else
        :list-data="tableData"
        :list-loading="listLoading"
      />
    </div>
  </div>
</template>
<script>
import tableDisplay from './table'
import listDisplay from './list'
import { doSearch_patent } from '@/api/console'

export default {
  components: { tableDisplay, listDisplay },
  data() {
    return {
      searchParams: {
        keywords: '电',
        page: '1'
      },
      isSelectBoxVisible: false, // 列表模式下拉框是否显示
      displayType: 0, // 内容展示方式：0 - 列表模式 ，1 - 图文模式
      displayList: [{
        iconClass: 'type_l',
        label: '列表模式'
      }, {
        iconClass: 'type_s',
        label: '图文模式'
      }],
      listLoading: false,
      tableData: [],
      listData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.doSearchPatent()
    },
    // 根据关键字查询专利
    async doSearchPatent() {
      this.listLoading = true
      var res = await doSearch_patent(this.searchParams)
      this.listLoading = false
      if (res.status === 1000) {
        this.tableData = res.data
      } else {
        this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
      }
    },
    selectDisplayType(index) {
      this.displayType = index
      this.isSelectBoxVisible = false
    }
  }
}
</script>
<style scoped>
	.operations-list{
		height: 40px;
		position: relative;
	}
	.operations-list>a{
		padding: 0 4px;
	    border: 0;
	    font-size: 12px;
	    margin-right: 0;
	    color: #000;
	    cursor: pointer;
    	float: left;
    	height: 40px;
    	line-height: 40px;
	}
	.switch_on{
	    margin-left: 20px;
	    position: relative;
	}
	.type_l{

	}
	.barIcon{
		width: 22px;
	    height: 20px;
	    background-image: url(~@/assets/images/toolbarIcon.png);
	    background-repeat: no-repeat;
	    margin-top: 11px;
	    display: inline-block;
	    float: left;
	}
	.switch_on .barIcon{
		background-position: -10px -40px;
	}
	.Js_export .barIcon{
		background-position: -185px -15px;
	}
	.Js_multi_export .barIcon {
	    background-position: -55px -40px;
	}
	.Js_patentFee .barIcon {
	    background-position: -185px -40px;
	}
	.iconfont{
		font-family: "iconfont";
	    font-size: 12px;
	    font-style: normal;
	    font-weight: bold;
	}
	.type_switch {
	    width: 88px;
	    position: absolute;
	    top: 38px;
	    left: 20px;
	    z-index: 100;
	    border: 1px solid #ccc;
	    box-sizing: content-box;
	}
	.type_switch a{
	    border: 0;
	    font-size: 12px;
	    color: #000;
	    width: 88px;
	    padding: 0;
	    margin: 0;
	    cursor: pointer;
	    float: left;
	    height: 30px;
	    line-height: 30px;
	    background-color: #fff;
	    display: flex;
	    display: -webkit-flex;
	    display: -ms-flex;
	    display: -moz-flex;
	    flex-direction: row;
	    -ms-flex-direction: row;
	    -webkit-flex-direction: row;
	    -moz-flex-direction: row;
	}
	.type_switch a .barIcon{
		margin: 7px 0 0 6px;
	}
	.type_switch .type_l .barIcon{
		background-position: -10px -40px;
	}
	.type_switch .type_s .barIcon{
		background-position: -10px -15px;
	}
	.type_switch a:hover{
		background-color: #F0F0F0;
	}
	.type_switch a.active{
		background-color: #F0F0F0;
	}
</style>
