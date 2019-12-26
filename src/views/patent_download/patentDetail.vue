<template>
  <div id="Js_patentview_main" class="g-mn1c m-list">
    <div class="detail_fix" style="right: 20px;">
      <div class="u-detail-toolbar fn-clear u-detail-toolbar-bg">
        <a class="Js_pat_export"><i class="iconfont el-icon-download" />著录项导出</a>
        <a class="Js_qw_download"><i class="iconfont el-icon-download" />全文下载</a>
        <a class="Js_dbl"><svg-icon class="iconfont" icon-class="education" style="font-size: 12px" />双屏查看</a>
        <el-button type="primary" size="mini" style="float: right">返回列表</el-button>
      </div>
      <div class="u-detail-info-top fn-clear u-detail-info-top-bg">
        <span class="title Js_hl">
          [中国实用新型]
          CN201821572457.X
          <span class="Js_h1_name" title="一种空气净化装置">一种空气净化装置</span>
        </span>
      </div>
      <div class="tab_container">
        <div class="u-tab ui-switchable-nav">
          <a v-for="(tab, index) in tabs" :key="index" :class="{'ui-switchable-active': true}">{{ tab }}</a>
        </div>
      </div>
    </div>
    <div id="Js_patent_view_container" class="m-info m-info-bg m-info-bg-fix ui-switchable">
      <div class="ui-switchable-content">
        <div class="fn-clear Js_patent_view_item ui-switchable-panel" style="display: block;">
          <div class="g-info-l">
            <div class="g-info-l-in">
              <div>
                <div class="ui-switchable-content">
                  <div class="item fn-hide Js_hl ui-switchable-panel" style="display: block;">
                    <div class="">
                      <h5 class="u-info-title">著录项</h5>
                      <ul class="abst-info fn-clear">
                        <li><label>申请号</label> CN201821572457.X</li>
                        <li class="even"><label>申请日</label> <a href="" target="_blank">20180926</a></li>
                        <li><label>公开号</label> CN208865325U</li>
                        <li class="even">
                          <label>授权公告日</label> <a href="" target="_blank">20190517</a>
                        </li>
                        <li>
                          <label>申请（专利权）人</label>
                          <a href="" target="_blank">滑县恒琢信息科技有限公司</a>
                        </li>
                        <li class="even">
                          <label>发明人</label>
                          <a href="" target="_blank">张晓芬</a>
                        </li>
                        <li>
                          <label>主分类号</label>
                          <a class="main-ipc" href="" target="_blank">B01D46/00</a>
                        </li>
                        <li class="even">
                          <label>分类号</label>
                          <p>
                            <a class="main-ipc" href="" target="_blank">B01D46/00</a>
                            <a class="main-ipc" href="" target="_blank">B01D50/00</a>
                            <a class="main-ipc" href="" target="_blank">B01D53/18</a>
                            <a class="main-ipc" href="" target="_blank">C02F1/32</a>
                            <a class="main-ipc" href="" target="_blank">F24F1/02</a>
                            <a class="main-ipc" href="" target="_blank">F24F3/16</a>
                            <a class="main-ipc" href="" target="_blank">F24F13/28</a>
                          </p>
                        </li>
                        <li>
                          <label>地址</label>
                          <a href="" target="_blank">河南省安阳市滑县沿河路英民花园10幢2单元302</a>
                        </li>
                        <li class="even">
                          <label>国省代码</label> 河南(41)
                        </li>
                      </ul>
                      <h5 class="u-info-title abst_title">摘要</h5>
                      <div class="abstract contenttext">
                        本实用新型属于环保设备技术领域，尤其为一种空气净化装置，包括壳体，所述壳体的两侧分别设置有进气盒和排气盒，所述进气盒内设置有过滤组件，所述壳体内固定安装有空气泵，所述空气泵的进气口固定连接有进气管的一端，所述进气管的另一端与进气盒相连通，所述壳体的底部内壁上固定安装有水箱，所述水箱内设置有电热丝和多个紫外线灯，所述壳体内固定安装有雾化盒，所述雾化盒的底部固定连接有回流管的一端，所述回流管的另一端与水箱相连通。本实用新型实用性高，通过设置微型隔膜水泵和微雾喷头可有效将水箱内的水抽出并持续雾化，并在雾化盒内与过滤后的空气充分均匀混合，对空气的加湿效率高，效果更佳。
                      </div>
                      <p type="text" class="fn-hide contenttext_search_input" />
                      <h5 class="u-info-title">信息查询</h5>
                      <div class="abstract-web abstract-web-info">
                        <a target="_blank" href="">官网查询地址</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { doGetPatentInfo } from '@/api/console'

export default {
  data() {
    return {
      zlh: this.$route.query.zlh,
      tabs: ['著录项信息', '权利要求', '说明书', 'PDF全文', '法律信息'],
      patentInfo: {}
    }
  },
  created() {
    console.log(this.zlh)
    this.doGetPatentInfo()
  },
  methods: {
    async doGetPatentInfo() {
      var param = {
        zlh: this.zlh
      }
      var res = await doGetPatentInfo(param)
      if (res.status === 1000) {
        this.patentInfo = res.data
      } else {
        this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
      }
    }
  }
}
</script>
<style scoped>
  button, p, label, div, span, input, a {
      font-family: "微软雅黑 Regular", 微软雅黑;
  }
	.m-list{
		min-height: 100%;
    box-sizing: border-box;
		background-color: #f4f7fa;
    color: #666;
	}
	.detail_fix{
		padding-top: 9px;
		border-bottom: 1px solid #1976d2;
    background-color: white;
    z-index: 97;
	}
	.fn-clear {
	    zoom: 1;
	}
	.u-detail-toolbar{
		padding-bottom: 2px;
    margin-bottom: 6px;
    box-sizing: content-box;
	}
	.u-detail-toolbar a {
	    color: #666;
	    border: 1px solid #E4E4E4;
	    cursor: pointer;
	    float: left;
	    height: 30px;
	    line-height: 30px;
	    padding: 0 5px;
	    font-size: 12px;
	    margin-right: 5px;
	}
	.u-detail-toolbar .iconfont {
    margin-right: 5px;
    font-size: 16px;
    font-style: normal;
}
.u-detail-toolbar .Js_pat_export {
    margin-left: 10px;
}
.fn-clear:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.u-detail-info-top-bg {
    padding: 6px 0 12px;
    line-height: 20px;
    background-color: #fff;
}
.u-detail-info-top-bg .title{
	  font-weight: bold;
    color: #000;
    max-width: 73%;
    float: left;
    margin-left: 10px;
    font-size: 14px;
}
.Js_h1_name {
    margin-left: 10px;
    cursor: pointer;
}
.detail_fix .tab_container {
    background-color: #f4f7fa;
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.detail_fix .u-tab {
    margin: 0 0 0 10px;
    height: 30px;
    line-height: 30px;
    background-color: #E4E4E4;
    border: 1px solid #E4E4E4;
    margin: 0 20px;
}
.detail_fix .u-tab a {
    padding: 0 15px;
    float: left;
    height: 30px;
    font-size: 14px;
    cursor: pointer;
    border-right: 1px solid #E4E4E4;
}
.detail_fix .u-tab a.ui-switchable-active {
    border-top: 3px solid #4193F1;
    background-color: #fff;
    margin-top: -2px;
    font-weight: bold;
    color: #000;
}
.detail_fix .u-tab a:hover {
    background-color: #fff;
}
.ui-switchable-nav a:hover, .u-detail-tool a:hover {
    color: #1976D2;
}
.u-detail-toolbar a:hover {
    background-color: #F0F0F0;
}
.m-info{
	clear: both;
	margin-top: 20px;
	box-sizing: border-box;
    position: relative;
    min-height: 800px;
    height: auto;
    padding-left: 20px;
}
.ui-switchable-content {
    background-color: #F4F7FA;
    overflow: hidden;
}
.g-info-l {
    float: left;
    width: 100%;
}
.g-info-l-in {
    margin-right: 320px;
}
.u-subtab a {
    display: block;
    float: left;
    line-height: 30px;
    background-color: #D9DEE4;
    margin-right: 10px;
    padding: 0 15px;
    cursor: pointer;
}
.u-subtab a.ui-switchable-active {
    background-color: #546478;
    color: #fff;
}
.ui-switchable-panel {
    font-size: 12px;
}
.u-info-title {
	margin-top: 6px;
    background: url(~@/assets/images/arror.png) no-repeat left -5px;
    line-height: 30px;
    margin: 20px 0 5px;
    text-indent: 0.6em;
    font-size: 14px;
    color: #000;
    font-weight: bold;
    background-position: -14px -5px;
}
.abst-info li {
    float: left;
    width: 50%;
    line-height: 30px;
    padding-left: 115px;
    word-break: break-all;
    box-sizing: border-box;
    position: relative;
}
.abst-info li label {
    width: 105px;
    display: inline-block;
    padding-left: 10px;
    font-weight: bold;
    float: left;
    position: absolute;
    left: 0;
    box-sizing: content-box;
}
.abst-info li.even {
    float: right;
}
.abst-info li>p {
    word-wrap: break-word;
}
.abst-info li a {
    color: #666;
}
.abst-info li a:hover {
    color: #0066FF;
    text-decoration: underline;
}
.contenttext {
	line-height: 24px;
    position: relative;
    padding-left: 10px;
}
</style>
