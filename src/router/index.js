import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    meta: { showFooter: true, headerFull: true, title: '费查查' },
    component: () => import('@/views/Home.vue'),
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    // meta : { showFooter : true , headerFull : false , title : '登录' } ,
    component: () => import('@/views/Login.vue'),
    hidden: true
  },
  {
    path: '/register',
    name: 'register',
    meta: { showFooter: true, headerFull: false, title: '注册' },
    component: () => import('@/views/Register.vue'),
    hidden: true
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: { showFooter: true, headerFull: false, title: '忘记密码' },
    component: () => import('@/views/ResetPassword.vue'),
    hidden: true
  },
  {
    path: '/help-center',
    name: 'helpCenter',
    meta: { showFooter: true, headerFull: true, title: '帮助中心' },
    component: () => import('@/views/HelpCenter.vue'),
    hidden: true
  },
  {
    path: '/vip',
    name: 'vip',
    meta: { showFooter: true, headerFull: true, title: '企业VIP' },
    component: () => import('@/views/vip.vue'),
    hidden: true
  },
  // 专利年费
  {
    path: '/patentAnnual',
    component: Layout,
    redirect: '/patentAnnual/annualQuery',
    name: 'patentAnnual',
    meta: {
      title: '专利年费',
      icon: 'example'
    },
    children: [
      // 年费批量查询
      {
        path: 'annualQuery',
        component: () => import('@/views/patent_annual/AnnualQuery.vue'),
        name: 'consoleAnnualQuery',
        meta: { title: '年费批量查询', icon: 'edit' }
      },
      // 年费监控
      {
        path: 'annualMonitor',
        component: () => import('@/views/patent_annual/AnnualMonitor.vue'),
        name: 'consoleAnnualMonitor',
        meta: { title: '年费监控', icon: 'edit' }
      }
    ]
  },
  // 专利批量下载
  {
    path: '/patentDownload',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/patent_download/index'),
        name: 'patentDownload',
        meta: { title: '专利批量下载', icon: 'documentation', affix: true }
      },
      // 专利详情
      {
        path: 'console-fee-detail',
        component: () => import('@/views/console/detail.vue'),
        name: 'consoleFeeDetail',
        meta: { title: '专利详情', noCache: true, activeMenu: '/patentDownload/index' },
        hidden: true
      }
    ]
  },
  // 目录导出
  {
    path: '/catalogExport',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/catalog_export/index'),
        name: 'catalogExport',
        meta: { title: '目录导出', icon: 'documentation', affix: true }
      }
    ]
  },
  // 免费工具
  {
    path: '/freeTool',
    component: Layout,
    redirect: '/freeTool/zws',
    name: 'freeTool',
    meta: {
      title: '免费工具',
      icon: 'example'
    },
    children: [
      // 转五书
      {
        path: 'zws',
        component: () => import('@/views/free_tool/zws.vue'),
        name: 'zws',
        meta: { title: '转五书', icon: 'edit' }
      },
      // 审查通知书下载
      {
        path: 'exameNoticeDownload',
        component: () => import('@/views/free_tool/exameNoticeDownload.vue'),
        name: 'exameNoticeDownload',
        meta: { title: '审查通知书下载', icon: 'edit' }
      }
    ]
  },
  // 可视化分析
  {
    path: '/visualAnalysis',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/visual_analysis/index'),
        name: 'visualAnalysis',
        meta: { title: '可视化分析', icon: 'documentation', affix: true }
      }
    ]
  },
  /* {
    path: '/console',
    component: Layout,
    redirect: '/console/annual-query',
    name: 'console',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'patent-analysis',
        component: () => import('@/views/console/PatentAnalysis.vue'),
        name: 'consolePatentAnalysis',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'user-center',
        component: () => import('@/views/console/UserCenter.vue'),
        name: 'consoleUserCenter',
        meta: { title: 'Create Article', icon: 'edit' }
      }
    ]
  },*/
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
  /* {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }*/
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
