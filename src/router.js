import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode : 'history' ,
  base : process.env.BASE_URL ,
  routes : [
    {
      path : '/' ,
      name : 'home' ,
      meta : { showFooter : true , headerFull : true , title : '费查查' } ,
      component : () => import( /* webpackChunkName: 'home' */ './views/Home.vue' ) ,
    } ,
    {
      path : '/login' ,
      name : 'login' ,
      meta : { showFooter : true , headerFull : false , title : '登录' } ,
      component : () => import( /* webpackChunkName: 'home' */ './views/Login.vue' ) ,
    } ,
    {
      path : '/register' ,
      name : 'register' ,
      meta : { showFooter : true , headerFull : false , title : '注册' } ,
      component : () => import( /* webpackChunkName: 'register' */ './views/Register.vue' ) ,
    } ,
    {
      path : '/reset-password' ,
      name : 'resetPassword' ,
      meta : { showFooter : true , headerFull : false , title : '忘记密码' } ,
      component : () => import( /* webpackChunkName: 'resetPassword' */ './views/ResetPassword.vue' ) ,
    } ,
    {
      path : '/help-center' ,
      name : 'helpCenter' ,
      meta : { showFooter : true , headerFull : true , title : '帮助中心' } ,
      component : () => import( /* webpackChunkName: 'helpCenter' */ './views/HelpCenter.vue' ) ,
    } ,
    {
      path : '/vip' ,
      name : 'vip' ,
      meta : { showFooter : true , headerFull : true , title : '企业VIP' } ,
      component : () => import( /* webpackChunkName: 'vip' */ './views/vip.vue' ) ,
    } ,
    {
      path : '/console' ,
      name : 'console' ,
      meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
      component : () => import( /* webpackChunkName: 'console' */ './views/console/Index.vue' ) ,
      redirect : { name : 'consoleAnnualQuery' } ,
      children : [
        {
          path : 'annual-query' ,
          name : 'consoleAnnualQuery' ,
          meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
          component : () => import( /* webpackChunkName: 'console' */ './views/console/AnnualQuery.vue' ) ,
        } ,
        {
          path : 'annual-monitor' ,
          name : 'consoleAnnualMonitor' ,
          meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
          component : () => import( /* webpackChunkName: 'console' */ './views/console/AnnualMonitor.vue' ) ,
        } ,
        {
          path : 'batch-query' ,
          name : 'consoleBatchQuery' ,
          meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
          component : () => import( /* webpackChunkName: 'console' */ './views/console/BatchQuery.vue' ) ,
        } ,
        {
          path : 'patent-analysis' ,
          name : 'consolePatentAnalysis' ,
          meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
          component : () => import( /* webpackChunkName: 'console' */ './views/console/PatentAnalysis.vue' ) ,
        } ,
        {
          path : 'user-center' ,
          name : 'consoleUserCenter' ,
          meta : { showFooter : false , headerFull : true , title : '管理控制台' } ,
          component : () => import( /* webpackChunkName: 'console' */ './views/console/UserCenter.vue' ) ,
        } ,
      ] ,
    } ,
    {
      path : '/console-fee-detail' ,
      name : 'consoleFeeDetail' ,
      meta : { showFooter : true , headerFull : false , title : '专利详情' } ,
      component : () => import( /* webpackChunkName: 'consoleDetail' */ './views/console/detail.vue' ) ,
    } ,
  ] ,
})

router.beforeEach((to , from , next) => {
  document.title = to.meta && to.meta.title || '费查查'
  next()
})

export default router
