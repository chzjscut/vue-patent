<template>
  <div id="app">
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  /* ::-webkit-scrollbar{
    width: 17px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #ccc;
  } */
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
.fr {
    float: right;
    position: relative;
  }
  .clear:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    zoom: 1;
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
