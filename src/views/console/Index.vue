<template>
  <div class="console-index">
    <el-container>
      <div class="sidebar-container">
        <el-aside :width="isCollapse?'64px':'200px'" style="overflow: hidden">
          <div class="title-box" @click="isCollapse = !isCollapse">
            <span v-if="!isCollapse"><i class="el-icon-arrow-left">{{ title }}</i></span>
            <span v-else class="el-icon-d-arrow-right" />
          </div>
          <el-menu
            background-color="#1f2d3d"
            text-color="#fff"
            :default-active="defaultActive"
            :router="true"
            :collapse="isCollapse"
            style="border: none"
          >
            <template v-for="(menu,i) in menuList">
              <el-menu-item
                :key="i"
                :index="i+''"
                :route="menu.route"
              >
                <i :class="menu.icon" />
                <span slot="title">{{ menu.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
      </div>
      <el-main :style="{paddingLeft: isCollapse?'64px':'200px'}">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.png'

export default {
  name: 'Index',
  data() {
    return {
      logo,
      title: '管理控制台',
      isCollapse: false,
      defaultActive: '0',
      menuList: [
        {
          icon: 'el-icon-search',
          title: '年费查询',
          route: { name: 'consoleAnnualQuery' }
        },
        {
          icon: 'el-icon-view',
          title: '年费监控',
          route: { name: 'consoleAnnualMonitor' }
        },
        {
          icon: 'el-icon-search',
          title: '批量查询',
          route: { name: 'consoleBatchQuery' }
        },
        {
          icon: 'el-icon-share',
          title: '专利分析',
          route: { name: 'consolePatentAnalysis' }
        },
        {
          icon: 'el-icon-news',
          title: '用户中心',
          route: { name: 'consoleUserCenter' }
        }
      ]
    }
  },

  mounted() {
    const routeName = this.$route.name
    for (let i = 0, len = this.menuList.length; i < len; i++) {
      if (this.menuList[ i ].route.name === routeName) {
        this.defaultActive = i + ''
      }
    }
  }
}
</script>

<style scoped>
  .sidebar-container {
    transition: width .28s;
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: #1f2d3d;
  }

  .title-box {
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }

  .title-box .menu-logo {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    vertical-align: middle;
    text-align: center;
    overflow: hidden;
  }
</style>
