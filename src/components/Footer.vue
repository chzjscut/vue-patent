<template>
  <div v-if="$route.meta.showFooter" class="footer">
    <div class="footer-link-box">
      <el-row type="flex" justify="space-around">
        <div>
          <div class="title">关于我们</div>
          <div class="item">
            <router-link :to="{name: 'helpCenter', query: {section: 0}}">关于我们</router-link>
            <router-link :to="{name: 'helpCenter', query: {section: 1}}">常见问题</router-link>
            <router-link :to="{name: 'helpCenter', query: {section: 2}}">服务协议</router-link>
          </div>
        </div>
        <div>
          <div class="title">联系我们</div>
          <div class="item">
            <span>电话：18900554231</span>
            <span>邮箱：citccld@163.com</span>
            <span>地址：马鞍山市慈湖高新区霍里山大道北段1669号2栋</span>
            <span>手机：18900554231</span>
          </div>
        </div>
      </el-row>
    </div>
    <div class="description margin-v-10px">
      <span>Copyright © 2018 马鞍山方融信息科技有限公司 <span class="footer-divider" />备案号：
        <a href="http://www.miitbeian.gov.cn/" target="_blank">皖ICP备18026473号</a></span>
    </div>

    <!-- 工商标志 -->
    <div class="app-bottom-brands">
      <div class="jsgov-brand">
        <a
          href="http://www.jsdsgsxt.gov.cn/mbm/entweb/elec/certView.shtml?siteId=99b21b37b9894f23a4d6e15f6fe2ae63"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="//cache.qixin.com/pcweb/gongshang-a90058e8.png"
            alt=""
            border="0"
            style="border-width:0;border:none;"
          ></a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
  .footer {
    min-width: 768px;
    background-color: #222a37;
    border-top: 1px solid #eaedf4;
    color: #7a808f;
    box-sizing: border-box;
  }

  .description {
    text-align: center;
  }

  .description a {
    color: #7a808f;
  }

  .footer-link-box {
    margin: 0 auto;
    padding: 20px;
    border-bottom: 1px solid hsla(223, 9%, 52%, .49);
  }

  .footer-link-box .title {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .footer-link-box .item {
    margin-top: 15px;
  }

  .footer-link-box .item a,
  .footer-link-box .item span {
    color: #7a808f;
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .app-bottom-brands {
    text-align: center;
    background-color: #222a37;
  }

  .margin-v-10px {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .app-bottom-brands .jsgov-brand img {
    width: 64px;
    height: 66px;
    display: inline-block;
  }
</style>
