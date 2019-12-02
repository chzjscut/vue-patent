<template>
  <div>
    <template v-if = "!$route.meta.headerFull">
      <div class = "header header-style2" @click = "handleClickLogo">
        <div class = "wrap">
          <div class = "header_left">
            <img src = "../assets/images/logo.png" alt = "马鞍山方融信息科技有限公司" height = "60"/>
          </div>
          <div class = "header_right">
            <span>意见反馈</span> <span>在线客服</span>
          </div>
        </div>
      </div>
    </template>
    <template v-if = "$route.meta.headerFull">
      <div class = "header">
        <div class = "wps cl">
          <h1 @click = "handleClickLogo">
            <img src = "../assets/images/logo.png" alt = "马鞍山方融信息科技有限公司" height = "60"/>
          </h1>
          <div class = "header-tel y">
            <!-- 未登录 -->
            <template v-if = "isLogin">
              <p class = "welcome">欢迎 {{userName}}</p>
              <el-button type = "danger" size = "small" round
                         @click = "logout">退出
              </el-button>
            </template>
            <!-- 已登录 -->
            <template v-else>
              <el-button size = "small" @click = "handleLoginClick">登录</el-button>
              <el-button size = "small" type = "primary" @click = "handleRegisterClick">注册</el-button>
              <span class = "phone">18900554231</span>
            </template>
          </div>
          <div class = "nav">
            <ul id = "menu-csweigounv" class = "cl">
              <li v-for = "nav in navTabs"
                  @click = "handleClickNav(nav.meta.routeName, nav.meta.hash)" v-html = "nav.nav">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import vipImage from '../assets/images/vip.png'

  export default {
    data () {
      return {
        userName : '' ,
        navTabs : [
          { nav : '首页' , meta : { routeName : 'home' , hash : '#home' } } ,
          { nav : '服务项目' , meta : { routeName : 'home' , hash : '#service' } } ,
          { nav : '客户案例' , meta : { routeName : 'home' , hash : '#case' } } ,
          { nav : '流程介绍' , meta : { routeName : 'home' , hash : '#flow' } } ,
          { nav : '管理控制台' , meta : { routeName : 'console' } } ,
          { nav : '帮助中心' , meta : { routeName : 'helpCenter' } } ,
          { nav : `<img src="${vipImage}" height="30px">` , meta : { routeName : 'vip' } } ,
        ] ,
      }
    } ,

    computed : {
      // 计算当期路由
      computedCurrentRouteName () {
        return this.$route.name
      } ,
      // 当前路由为登录、注册、找回密码
      computedHeaderStyle2 () {
        return this.computedCurrentRouteName === 'login' ||
          this.computedCurrentRouteName === 'register' ||
          this.computedCurrentRouteName === 'resetPassword'
      } ,
      // 是否登录成功
      isLogin () {
        const stateUserInfo = this.$store.state.userInfo
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || stateUserInfo || '{}')
        if (userInfo.hasOwnProperty('token')) {
          this.userName = userInfo.account
          return true
        }
        return false
      } ,
    } ,

    methods : {
      ...mapMutations([ 'CLEAR_USER_INFO' ]) ,
      // 点击logo
      handleClickLogo () {
        if (this.computedCurrentRouteName === 'home') return
        this.$router.push({ name : 'home' })
      } ,

      // 点击tab
      handleClickNav (routeName , hash) {
        if (routeName === this.computedCurrentRouteName) {
          if (routeName === 'home') {
            window.location.hash = hash
          }
          return
        }
        this.$router.push({ name : routeName , query : { hash } })
      } ,

      logout () {
        this.CLEAR_USER_INFO()
        localStorage.removeItem('userInfo')
        this.$router.push('/')
        location.reload()
      } ,

      handleLoginClick () {
        this.$router.push({ name : 'login' })
      } ,

      handleRegisterClick () {
        this.$router.push({ name : 'register' })
      } ,
    } ,
  }
</script>
<style>
  /*header*/
  .header {
    position: fixed;
    width: 100%;
    z-index: 999;
    transition: 0.5s;
  }

  .header-style2 {
    min-width: 1200px;
    background: #090b1a;
  }

  .header-style2 .wrap {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    overflow: hidden;
  }

  .header-style2 .header_left {
    float: left;
    cursor: pointer;
  }

  .header-style2 .header_right {
    display: none;
    float: right;
    line-height: 60px;
    color: #222;
    font-size: 12px;
  }

  .header-style2 .header_right span {
    padding-left: 26px;
    cursor: pointer;
  }

  .header-style2 .header_right span:hover {
    color: #666;
  }
</style>
