<template>
  <div v-loading="listLoading" style="height: 100%;">
    <div class="Js_outerList">
      <div class="JS_ol_top">
        <div v-for="(item, index) in listData" :key="item.zlh" class="u-list-div">
          <div class="u-top Js_hl fn-clear">
            <div class="g-left g-left2">
              <el-checkbox v-model="checked" style="margin-right: 7px" />
              <!-- <input type="checkbox" style="vertical-align:middle;margin-right:8px"> -->
              <span class="num">{{ index+1 }}</span>[中国实用新型]
            </div>
            <div class="fn-left g-right newList-item">
              <a href="" class="c-blue nl-an" target="_blank">{{ item.zlh }}</a>
              <a href="" target="_blank" class="c-blue title nl-ti">{{ item.title }}</a>
            </div>
          </div>
          <div class="u-main fn-clear">
            <div class="g-left sm-c" data-iscnmain="True">
              <div class="mbox">
                <div class="mleft">
                  <span class="mmove" style="display: none; left: 9px; top: 22px;" />
                  <span class="mmask" />
                  <img class="lazyload" src="https://cube.patexplorer.com/img/7e8943b282902704390a435871411dd3/120/180">
                </div>
              </div>
              <div class="mright" style="display: none; left: 152px; top: 63px;">
                <img src="https://cube.patexplorer.com/img/7e8943b282902704390a435871411dd3/960/0" style="left: -91.9565px; top: -178.292px;">
              </div>
            </div>
            <div style="float:left;width:100%;">
              <div class="g-right Js_tip Js_hl">
                <div>
                  <p>
                    <strong>公开（公告）号：</strong>
                    <a href="" class="c-blue" target="_blank" title="公开号">{{ item.gkh }}</a>
                  </p>
                  <p>
                    <strong>申请（专利权）人：</strong>
                    <a href="" target="_blank">{{ item.sqren }}</a>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>申请日：</strong>
                    <a href="" target="_blank">{{ item.sqri }}</a>
                  </p>
                  <p>
                    <strong>主分类号：</strong>
                    <a class="main-ipc" href="" target="_blank">{{ item.zflh }}</a>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>公开（公告）日：</strong>
                    <a href="" target="_blank" title="公开日">{{ item.gkr }}</a>
                  </p>
                </div>
                <div>
                  <strong>摘要：</strong>
                  <span class="content">{{ item.zy }}<!-- <span class="c-highligth-default">环</span> --></span>
                </div>
                <div class="translatecontent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['listLoading', 'listData', 'page', 'size', 'total'],
  data() {
    return {
      checked: false
    }
  }
}
</script>
<style scoped>
	.Js_outerList {
	    min-height: 650px;
	    box-sizing: content-box;
	    /* overflow-x: auto; */
	}
	.JS_ol_top {
	    min-height: 650px;
	}
	.u-list-div {
	    border-bottom: 1px solid #E4E4E4;
	    max-width: 970px;
	    position: relative;
	    padding-left: 20px;
	}
	.u-list-div:hover {
	    background-color: #f0faff;
	}
	.u-list-div .u-top {
	    font-size: 12px;
	    padding-top: 10px;
	}
	.fn-clear {
    zoom: 1;
}
.fn-clear:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.u-list-div .u-top .g-left, .u-list-div .u-main .g-left {
    font-size: 13px;
    width: 100px;
    float: left;
    margin-right: -100px;
}
.g-left2 {
    padding-top: 5px;
}
.fn-left {
    float: left;
    display: inline-block;
}
.newList-item {
    min-height: 30px;
    line-height: 30px;
}
.u-list-div .g-right {
    margin-left: 124px;
    min-width: 620px;
}
.u-list-div .u-top .g-right {
    margin-left: 132px;
}
.nl-an, .nl-ti {
	float: left;
	color: #0066cd;
    margin: 0 2px;
    line-height: 30px;
}
.u-list-div .c-blue:first-child {
    margin-right: 25px;
}
.u-list-div .c-blue:first-child+a {
    font-weight: bold;
}
.u-list-div .u-main {
    clear: both;
    padding: 10px 0;
}
.mbox {
    position: relative;
    width: 102px;
    height: 152px;
}
.mleft {
    width: 100px;
    height: 150px;
    line-height: 150px;
    position: relative;
    border: 1px solid #ccc;
    background: #FFF;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}
.mleft .mmove {
    width: 50px;
    height: 50px;
    background: #666;
    opacity: 0.3;
    top: 3px;
    left: 3px;
    position: absolute;
    z-index: 1;
    display: none;
    filter: alpha(opacity:30);
    border: 1px solid #000;
}
.mleft .mmask {
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0px;
    left: 0px;
    position: absolute;
    z-index: 2;
    background: #000;
    cursor: move;
    filter: alpha(opacity:0);
}
.mleft img.lazyload {
    max-width: 98px;
    max-height: 143px;
    vertical-align: middle;
    border: 0;
}
.mright {
    width: 486px;
    height: 282px;
    float: left;
    padding: 2px;
    overflow: hidden;
    display: inline;
    position: absolute;
    left: 335px;
    display: none;
    border: 3px solid #888;
    background: #fff;
    z-index: 266;
}
.mright img {
    position: absolute;
    top: 0px;
    left: 0px;
}
.u-list-div .u-main .g-right div {
    padding-right: 10px;
}
.u-list-div .u-main .g-right p {
    display: inline-block;
    min-width: 250px;
    line-height: 20px;
    word-break: break-all;
}
.u-list-div .u-main .g-right a {
    cursor: pointer;
    color: #666;
    margin: 0 3px;
}
.u-list-div .u-main .g-right a.c-blue{
	color: #0066cd;
}
.Js_tip span.content {
    line-height: 18px;
}
.c-highligth-default {
    background-color: #eeef36;
}
.translatecontent{
	color: #31709F;
    font-size: 12px;
    background: rgb(217,237,247);
    padding: 10px 20px;
    box-sizing: border-box;
    display: none;
}
.u-list-div a:hover{
	color: #1976D2;
}
.u-list-div .u-main .g-right a:hover {
    color: #0066FF;
    text-decoration: underline;
}
span, p, a, label, div {
	font: 12px/1.5 arial,'微软雅黑 Regular', '微软雅黑';
	color: #666;
}
</style>
