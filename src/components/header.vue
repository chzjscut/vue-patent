<template>
  <div class="header">
    <div class="clear" style="height:60px;line-height:60px;">
      <img class="logo" height="35px" src="~@/assets/images/logo_1.png">
      <div id="topSearch" class="top-search">
        <input
          id="top-input"
          v-model.trim="searchKey"
          type="text"
          placeholder="请输入专利号码或任意文字搜索专利..."
          @keyup.enter="doSearch"
        >
        <i class="search-icon el-icon-search" @click="doSearch" />
      </div>
      <i v-show="isMobileModel && isDropDown" class="switch el-icon-close" @click="closeDropdown" />
      <svg-icon v-show="isMobileModel && !isDropDown" class="switch" icon-class="list" @click="openDropdown" />
      <div v-show="isNavShow" class="nav-wrap fr clear">
        <ul class="nav-menu clear">
          <li class="nav-li nav_a li_o">
            <router-link to="./home"><a>首页</a></router-link>
          </li>
          <li class="nav-li nav_a li_o">
            <router-link to="./home"><a>产品</a></router-link>
          </li>
          <li class="nav-li">
            <router-link to="./patentAnnual"><a>控制台</a></router-link>
          </li>
          <li class="nav-li">
            <router-link to="./vip"><a>企业VIP</a></router-link>
          </li>
        </ul>
        <router-link to="./home"><a v-if="!userName" class="header-btn btn-trial">试用</a></router-link>
        <router-link to="./login"><a v-if="!userName" class="header-btn btn-login">登录</a></router-link>
        <!-- <div class="user-info">{{userName}}</div> -->
        <template v-if="userName && !isMobileModel">
          <p class="welcome">欢迎 {{ userName }}</p>
          <el-button
            style="margin-right: 1.5%;"
            type="danger"
            size="small"
            round
            @click="logout"
          >退出
          </el-button>
        </template>
        <!-- <el-dropdown v-if="userName" class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
            {{ userName }}
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span style="display:block;" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </div>

    <!-- 用以获取滚动条宽度 -->
    <div id="scrollTest" class="scroll-test">
      <div style="height: 100px;" />
    </div>
  </div>
</template>

<script>
import { getToken, getUserName, removeToken, removeUserName } from '@/utils/auth'

export default {
  data() {
    return {
      scrollbarWidth: 0, // 滚动条宽度
      isMobileModel: false, // 页面宽度小于1000时为true
      isDropDown: false,
      isNavShow: true,
      clientHeight: 0, // 浏览器可视区域高度
      isVisible: false, // 导航栏移动端布局显示
      userName: getUserName() || '',
      searchKey: ''
    }
  },

  mounted() {
    this.init()
    this.resizeCtrl()
  },

  methods: {
    init() {
      // 获取滚动条宽度
      this.scrollbarWidth = $('#scrollTest')[0].offsetWidth - $('#scrollTest')[0].scrollWidth
      $('#scrollTest')[0].remove()

      // 初始化显示:页面宽度大于1000和小于1000时，header显示不同内容
      if ($(document.body).width() + this.scrollbarWidth < 1000) {
        this.isMobileModel = true
        this.isNavShow = false
      }
    },
    resizeCtrl() {
      var that = this

      // 控制头部不同模式的显示
      window.addEventListener('resize', function() {
        if (document.body.clientWidth < 1000 - that.scrollbarWidth) {
          that.isMobileModel = true // 手机模式开启
          that.isNavShow = !!that.isDropDown
        } else {
          that.isNavShow = true
          that.isMobileModel = false // 手机模式关闭
        }
      })
    },
    openDropdown() {
      this.isDropDown = true
      this.isNavShow = true
    },
    closeDropdown() {
      this.isDropDown = false
      this.isNavShow = false
    },
    doSearch() {
      if (this.searchKey) {
        this.$router.push({ path: './patentDownload', query: { keywords: this.searchKey }})
      } else {
        this.$message({
          type: 'warning',
          message: '请输入要查询的关键词',
          customClass: 'el-message-custom'
        })
      }
    },
    logout() {
      this.userName = ''
      removeToken()
      removeUserName()
      window.reload()
    }
  }
}
</script>

<style scoped>
  .welcome{
    color: red;
    font-size: 14px;
    margin-right: 10px;
    display: inline-block;
  }
  .scroll-test{
    width:50px;
    height: 50px;
    overflow-y: scroll;
    position: absolute;
    left: -10000px;
  }
  .user-info{
    float: right;
    padding-right: 15px;
    color: #03fd25;
  }
  .avatar-container {
    float: right;
    margin-right: 30px;
    color: #03fd25;
  }
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .avatar-wrapper {
    position: relative;
  }
  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
  .header{
    position: fixed;
    left: 0;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background-color: rgba(0,0,0,.7);
    min-width: 1200px;
    width: 100%;
    z-index: 10;
  }
  .header .logo{
    float:left;
    margin-top:9px;
    margin-left:9.5%;
    cursor:pointer;
  }
  .top-search{
    position: relative;
    height: 30px;
    line-height: 30px;
    margin-top: 15px;
    padding-left: 8px;
    padding-right: 35px;
    background-color: white;
    float: left;
    margin-left: 50px;
    border-radius: 4px;
    min-width: 310px;
    max-width: 1000px;
    display: none;
  }
  .top-search input{
    height:30px;
    line-height:30px;
    width:100%;
    font-family:"Microsoft Yahei";
  }
  .top-search .search-icon{
    position: absolute;
    right: 8px;
    top: 6px;
    color:#ccc;
    font-size:18px;
    font-weight: bold;
    cursor: pointer;
  }
  .header .switch{
    float: right;
    width: 18px;
    height: 18px;
    margin: 21px 15px 0 0;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    /* display: none; */
  }
  .header .switch.el-icon-close{
    font-size: 28px;
    width: 28px;
    height: 28px;
    margin-top: 16px;
  }
  .nav-wrap a.header-btn{
    display: block;
    float: right;
    width:60px;
    height:30px;
    line-height:30px;
    margin-top: 15px;
    padding:0;
    background-color:#fff;
    text-align: center;
    border-radius:15px;
    margin-right:4px;
  }
  .nav-wrap a.header-btn:hover {
    filter: alpha(opacity=90);
    -moz-opacity: 0.9;
    opacity: 0.9;
  }
  .nav-wrap a.btn-trial{
    margin-right: 1.5%;
  }
  .nav-wrap a.btn-login{
    color:white;
    background-color: #15af40;
  }
  .header .nav-wrap{
    min-width: 620px;
    height:60px;
    line-height:60px;
    float:right;
  }
  .nav-menu{
    float: left;
    margin-right: 28px;
    height:60px;
    line-height:60px;
  }
  .nav-menu .nav-li{
    font-size: 14px;
    float: left;
    margin: 0 5px;
    position: relative;
    height:30px;
    line-height:30px;
    width:95px;
    text-align:center;
    background-color:;
    margin-top:15px;
    border-radius:15px;
    list-style: none;
  }
  .nav-li a{
    display: block;
    height:30px;
    line-height:30px;
    color: #fff;
    text-decoration: none;
  }
  .nav-li a:hover{
    color:rgb(0, 255 ,51);
  }
  .nav-li a.active{
    color:rgb(0, 255 ,51);
  }
  @media screen and (max-width: 1199px) {
      .header{
        min-width: 560px;
      }
      .header .logo{
        margin-left: 15px;
      }
      .header .nav-wrap{
        min-width: 500px;
      }
      .nav-menu{
        margin-right: 10px;
      }
      .nav-menu .nav-li{
        width: 70px;
      }
  }
  @media screen and (max-width: 999px) {
    .header .nav-wrap{
      width: 100%;
      float: none;
      position: fixed;
      z-index: 999;
      top: 50px;
      left: 0;
      padding-top: 15px;
      padding-bottom: 32px;
      margin: 0;
      height: auto;
      background: #0D1C3C;
      opacity: 1;
    }
    .nav-menu{
      width: 89%;
      float: none;
      margin: 0 auto;
      background: #0D1C3C;
      padding: 0 20px;
      height: auto;
    }
    .nav-menu .nav-li{
      position: relative;
      float: none;
      width: 100%;
      margin: 0;
      height: 38px;
      text-align: left;
      line-height: 38px;
      font-size: 14px;
      border-bottom: 1px solid #2F4981;
      border-radius: 0;
    }
    .nav-wrap a.header-btn{
      display: block;
      float: none;
      width: 89%;
      height: 43px;
      margin: 30px auto 15px;
      text-align: center;
      background: #3C8EFF;
      line-height: 43px;
      color: #FFF;
      border-radius: 0;
    }
    .nav-wrap a.btn-login{
      margin: 0 auto;
      background: 0 0;
      border: 1px solid #3C8EFF;
    }
  }
</style>
