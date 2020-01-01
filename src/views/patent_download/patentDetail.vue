<template>
  <div>
    <header-com />
    <div id="Js_patentview_main" class="g-mn1c m-list">
      <div class="detail_fix" style="right: 20px;">
        <div class="u-detail-toolbar fn-clear u-detail-toolbar-bg">
          <a class="Js_pat_export"><i class="iconfont el-icon-download" />著录项导出</a>
          <a class="Js_qw_download"><i class="iconfont el-icon-download" />全文下载</a>
          <a class="Js_dbl"><svg-icon class="iconfont" icon-class="education" style="font-size: 12px" />双屏查看</a>
          <el-button type="primary" size="mini" style="float: right" @click="goBack">返回列表</el-button>
        </div>
        <div class="u-detail-info-top fn-clear u-detail-info-top-bg">
          <span class="title">
            {{ patentInfo.zlh }}
            <span class="Js_h1_name">{{ patentInfo.title }}</span>
          </span>
        </div>
        <div class="tab_container">
          <div class="u-tab ui-switchable-nav">
            <a v-for="(tab, index) in tabs" :key="index" :class="{'ui-switchable-active': currentTab===index}" @click="tabChange(index)">{{ tab }}</a>
          </div>
        </div>
      </div>
      <div id="Js_patent_view_container" class="m-info m-info-bg m-info-bg-fix ui-switchable">
        <div class="ui-switchable-content">
          <div class="fn-clear Js_patent_view_item ui-switchable-panel">
            <div class="g-info-l">
              <div class="g-info-l-in">
                <div v-show="currentTab===0">
                  <div class="ui-switchable-content">
                    <div class="item fn-hide ui-switchable-panel" style="display: block;">
                      <div>
                        <h5 class="u-info-title">著录项</h5>
                        <ul class="abst-info fn-clear">
                          <li>
                            <label>申请号</label>
                            <a>{{ patentInfo.zlh }}</a>
                          </li>
                          <li>
                            <label>申请日</label>
                            <a>{{ patentInfo.sqri }}</a>
                          </li>
                          <li>
                            <label>公开号</label>
                            <a>{{ patentInfo.gkh }}</a>
                          </li>
                          <li>
                            <label>公开日</label>
                            <a>{{ patentInfo.gkr }}</a>
                          </li>
                          <li>
                            <label>申请（专利权）人</label>
                            <a>{{ patentInfo.sqren }}</a>
                          </li>
                          <li>
                            <label>发明人</label>
                            <a>{{ patentInfo.fmr }}</a>
                          </li>
                          <!-- <li>
                            <label>主分类号</label>
                            <a>{{patentInfo.zflh}}</a>
                          </li> -->
                          <li>
                            <label>代理机构</label>
                            <a>{{ patentInfo.dljg }}</a>
                          </li>
                          <li>
                            <label>代理人</label>
                            <a>{{ patentInfo.dlr }}</a>
                          </li>
                        </ul>
                        <h5 class="u-info-title abst_title">摘要</h5>
                        <div class="abstract contenttext">{{ patentInfo.zy }}</div>
                        <!-- <p type="text" class="fn-hide" />
                        <h5 class="u-info-title">信息查询</h5> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="currentTab===1">
                  <ul class="abst-info width-spread fn-clear">
                    <li>
                      <label>权利要求</label>
                      <div class="paragraph" v-html="patentInfo.qlyq" />
                      <!-- <div class="paragraph">{{ patentInfo.qlyq }}</div> -->
                    </li>
                  </ul>
                </div>
                <div v-show="currentTab===2">
                  <ul class="abst-info width-spread fn-clear">
                    <li>
                      <label>说明书</label>
                      <div class="paragraph" v-html="patentInfo.sms" />
                      <!-- <div class="paragraph">{{ patentInfo.sms }}</div> -->
                    </li>
                  </ul>
                </div>
                <div v-show="currentTab===3">
                  <ul class="abst-info width-spread fn-clear">
                    <li>
                      <label>PDF全文</label>
                      <pdf-template :url="patentInfo.pdfpath" />
                      <div v-if="false" class="paragraph">
                        <a style="color: #0066FF;text-decoration: underline;" :href="patentInfo.pdfpath" target="_blank">点击查看</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="g-info-r">
              <div class="m-picture Js_preLoad">
                <div>
                  <div class="u-title">附图</div>
                  <div class="u-part-pictures">
                    <img class="Js_ft_shows Js_loaded" :src="patentInfo.abstractpath">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="currentTab===4" class="Js_patent_view_item ui-switchable-panel">
            <div class="clearfix"><a class="law-title">法律状态</a></div>
            <div class="Js_patent_view_content m-legal Js_hl ui-switchable-content">
              <div class="item ui-switchable-panel">
                <div class="law-status">
                  当前法律状态：
                  <p class="law-active">有权-审定授权</p>
                </div>
                <table v-for="(law, index) in patentInfo.flzt" :key="index" class="u-zlxk-table">
                  <tbody>
                    <tr>
                      <td>法律状态公告日</td>
                      <td>{{ law.ggr }}</td>
                    </tr>
                    <tr>
                      <td>法律状态</td>
                      <td>{{ law.zt }}</td>
                    </tr>
                    <tr>
                      <td>法律状态信息</td>
                      <td>{{ law.ztxx }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderCom from '@/components/header.vue'
import PdfTemplate from '@/components/pdfTemplate.vue'
import { doGetPatentInfo } from '@/api/console'

export default {
  components: { HeaderCom, PdfTemplate },
  data() {
    return {
      zlh: this.$route.query.zlh,
      tabs: ['著录项信息', '权利要求', '说明书', 'PDF全文', '法律信息'],
      currentTab: 0,
      patentInfo: {}
    }
  },
  created() {
    // console.log(this.zlh)
    this.doGetPatentInfo()
  },
  methods: {
    // 根据专利号查询专利详细信息
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
    },
    tabChange(index) {
      this.currentTab = index
    },
    goBack() {
      this.$router.push({ path: './patentDownload' })
    }
  }
}
</script>
<style scoped>
  button, p, label, div, span, input, a {
      font-family: "微软雅黑 Regular", 微软雅黑;
  }
  .paragraph >>> #p0001{
    font-weight: bold;
  }
  .law-title {
      line-height: 33px;
      background-color: #D9DEE4;
      padding: 0 15px;
      cursor: pointer;
      background-color: #546478;
      color: #fff;
      display: block;
      float: left;
  }
  .law-status {
      padding-left: 80px;
      margin-top: 20px;
  }
  .law-active {
      background-color: #4CAF50!important;
      color: #fff;
      border-radius: 2px;
      padding: 0 10px;
      line-height: 24px;
      display: inline-block;
  }
  .law-status p {
      display: inline-block;
      padding: 0 3px;
      line-height: 20px;
  }
  .u-zlxk-table {
      width: 80%;
      border-collapse: collapse;
      margin-top: 15px;
      border-top: 3px solid #464646;
  }
  .u-zlxk-table td {
      border-bottom: 1px solid #E4E4E4;
      line-height: 40px;
      padding-left: 80px;
  }
  .u-zlxk-table td:first-child {
      border-right: 1px solid #E4E4E4;
      width: 300px;
      font-weight: bold;
  }
	.m-list{
    padding-top: 80px;
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
.abst-info.width-spread li{
  width: 100%;
  padding-right: 30px;
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
    line-height: 1.5;
    display: block;
    padding: 5px 0;
    color: #666;
}
.abst-info li a:hover {
    color: #0066FF;
    text-decoration: underline;
}
.abst-info li .paragraph{
  line-height: 1.8;
}
.contenttext {
	line-height: 24px;
    position: relative;
    padding-left: 10px;
}
.g-info-r {
  position: absolute;
  right: 30px;
  width: 240px;
}
.g-info-r .m-picture {
    border: 1px solid #E4E4E4;
    margin-top: 12px;
    font-size: 12px;
    background-color: #ffffff;
    max-height: 710px;
    overflow-y: auto;
    height: 770px;
}
.m-picture .u-title {
    border-bottom: 1px solid #E4E4E4;
    font-weight: bold;
    padding: 0 20px;
    line-height: 40px;
    background-color: #f4f7fa;
}
.m-picture .u-part-pictures {
    padding: 10px 20px 0;
    text-align: center;
    position: relative;
}
.m-picture .u-part-pictures img {
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
    height: auto;
    border: 1px solid #E4E4E4;
}
</style>
