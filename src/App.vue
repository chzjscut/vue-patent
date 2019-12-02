<template>
  <div id = "app">
    <header-com></header-com>
    <router-view class = "p-t-60"></router-view>
    <footer-com></footer-com>
    <div class = "footer-kefu">
      <ul>
        <li class = "qq" style = "overflow: hidden;">
          <a href = "https://wpa.qq.com/msgrd?v=3&amp;uin=235566458&amp;site=qq&amp;menu=yes">
            <em></em>在线咨询</a>
        </li>
        <li class = "tel" style = "overflow: hidden; ">
          <a href = "JavaScript:"><em></em>18900554231</a></li>
        <li class = "wx"
            @mouseenter = "showWxCode = true"
            @mouseleave = "showWxCode = false">
          <em></em>
          <div v-show = "showWxCode" class = "code">
            <img src = "./assets/images/ew.jpg">
            <p>微信二维码</p>
          </div>
        </li>
        <li class = "top" @click = "goToTop"><i class = "el-icon-arrow-up"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HeaderCom from './components/Header.vue'
  import FooterCom from './components/Footer.vue'

  export default {
    components : { HeaderCom , FooterCom } ,
    data () {
      return {
        showWxCode : false ,
      }
    } ,
    methods : {
      goToTop () {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      } ,
    } ,
  }
</script>

<style>
  /* 马鞍山方融信息科技有限公司制作 */
  * {
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;
    outline: none;
    list-style: none;
    font-style: normal;
  }

  body {
    color: #333;
    background: #fff;
    font: 14px 'Microsoft Yahei', 'Microsoft Jhenghei', Tahoma, 'Simsun';
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    color: #555;
    text-decoration: none;
  }

  a:focus {
    outline: none;
  }

  a:hover, a:active {
    outline: 0;
    color: #0595C7;
  }

  img {
    vertical-align: middle;
  }

  .wgno {
    clear: both;
  }

  .z {
    float: left;
  }

  .y {
    float: right;
  }

  .cl {
    zoom: 1;
  }

  .cl:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .el-message-custom {
    min-width: 100px !important;
  }

  .p-t-60 {
    padding-top: 60px;
  }

  .p-b-60 {
    padding-bottom: 60px;
  }

  textarea, input, button {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .wp {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
  }

  .w1200 {
    width: 1200px;
    margin: 0 auto;
  }

  /*btn-a*/
  .btn-a {
    transition: 0.5s;
    position: relative;
  }

  .btn-a span {
    color: #fff;
    position: relative;
    z-index: 2;
  }

  .btn-a em {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background: #fff;
    transition: 0.5s;
  }

  .btn-a:hover span {
    color: #333;
  }

  .btn-a:hover em {
    width: 100%;
  }

  /*头部*/
  .header {
    background: #090b1a;
    min-width: 1200px;
  }

  .header h1 {
    float: left;
    margin-left: 20px;
    height: 60px;
  }


  .header h1 img {
    height: 60px;
    vertical-align: middle;
  }

  .header .nav {
    margin-left: 20px;
    text-align: right;
    width: 1200px;
  }

  .header .nav li {
    display: inline-block;
    *display: inline;
    zoom: 1;
    margin: 0 -2px;
    position: relative;
    z-index: 100;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 16px;
    color: #ddd;
    cursor: pointer;
    text-decoration: none;
  }

  .header .nav li:hover {
    color: #fff;
    background: #12152c;
  }

  .header .nav .vip {
    display: inline-block;
  }

  .header-tel {
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
    margin-left: 20px;
  }

  .header-tel span.phone {
    padding-left: 32px;
    background: url(./assets/images/header-tel.png) no-repeat left center;
    font-size: 18px;
    color: #ddd;
    margin-left: 10px;
  }

  .header-tel p.welcome {
    color: red;
    font-size: 16px;
    margin-right: 10px;
    display: inline-block;
  }

  .fixed {
    width: 328px;
    position: fixed;
    _position: absolute;
    top: 66px;
    top: 0 \0;
    *top: 0;
    z-index: 10;
  }

  .customize-support .fixed {
    top: 84px;
    top: 32px \0;
    *top: 32px;
  }

  /* table */
  .table-filter,
  .table-button-group {
    padding: 10px 10px 0;
  }

  .table-filter .el-input {
    width: unset;
    margin-bottom: 10px;
  }

  .table-filter .filter-box {
    margin-bottom: 10px;
  }

  .table-filter .el-input:not(:first-child),
  .table-filter label:not(:first-child) {
    margin-left: 10px;
  }

  .table-button-group .el-button {
    margin-right: 10px;
  }

  .el-pagination {
    width: 50%;
    margin: 25px auto 0;
    text-align: center;
  }

  /*客服*/
  .footer-kefu {
    position: fixed;
    top: 50%;
    margin-top: -120px;
    right: 0;
    width: 45px;
    z-index: 9999;
  }

  .footer-kefu li {
    width: 45px;
    height: 45px;
    line-height: 45px;
    float: right;
    position: relative;
    margin: 1px 0;
    background: #333;
    cursor: pointer;
    border-radius: 1px;
    zoom: 1;
    transition: 0.5s;
  }

  .footer-kefu li:hover {
    background: #0595c7;
  }

  .footer-kefu li.qq:hover {
    width: 110px;
  }

  .footer-kefu li.tel:hover {
    width: 180px;
  }

  .footer-kefu li.top {
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 25px;
  }

  .footer-kefu li em {
    float: left;
    display: block;
    width: 45px;
    height: 45px;
    overflow: hidden;
  }

  .footer-kefu li a {
    display: block;
    height: 45px;
    font-size: 14px;
    color: #fff;
    overflow: hidden;
    transition: 3s;
  }

  .footer-kefu li.qq a:hover {
    width: 110px;
  }

  .footer-kefu li.tel a:hover {
    width: 180px;
  }

  .footer-kefu .wx .code {
    right: 47px;
    position: absolute;
    top: -135px;
    width: 150px;
    padding: 5px;
    border: 1px #ddd solid;
    background: #fff;
  }

  .footer-kefu .wx .code img {
    width: 100%;
  }

  .footer-kefu .wx .code p {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
  }

  .footer-kefu .m .code {
    display: none;
    right: 47px;
    position: absolute;
    top: -135px;
    width: 150px;
    padding: 5px;
    border: 1px #ddd solid;
    background: #fff;
  }

  .footer-kefu .m .code img {
    width: 100%;
  }

  .footer-kefu .m .code p {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
  }

  .footer-kefu .qq em {
    background: url(./assets/images/side-kefu.png) no-repeat center;
  }

  .footer-kefu .wx em {
    background: url(./assets/images/side-weixin.png) no-repeat center;
  }

  .footer-kefu .m em {
    background: url(./assets/images/side-code.png) no-repeat center;
  }

  .footer-kefu .tel em {
    background: url(./assets/images/side-tel.png) no-repeat center;
  }

  .footer-kefu .tel a {
    font-size: 16px;
  }

  .footer-kefu .top em {
    background: url(./assets/images/side-top.png) no-repeat center;
  }

  /*ajax响应消息*/
  .showmsg div {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -255px;
    margin-top: -20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 10px 30px;
    font-size: 14px;
    z-index: 9999;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
</style>
