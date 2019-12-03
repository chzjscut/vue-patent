<template>
  <div class="product_entPD">
    <div class="p_e_banner">
      <div class="p_e_brief">
        <h3>专利自动化监控</h3>
        <p>提供年费监控服务、年费导出服务、邮件/微信提醒服务、可视化服务，让获取专利年费信息从此简单起来</p>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=235566458&amp;site=qq&amp;menu=yes">立即咨询</a>
      </div>
    </div>
    <!-- vip权限对比 -->
    <div class="vip-privilege">
      <div class="module-line">
        <span id="_san_601" class="arrow left-arrow" />
        <span id="_san_603" class="text">特权对比</span>
        <span id="_san_606" class="arrow right-arrow" />
      </div>

      <div class="container">
        <!-- 对比列表 -->
        <div class="box">
          <div class="box-header">
            功能特权
          </div>
          <div class="box-item highlight">
            专利查询
          </div>
          <div class="box-item">
            专利监控
          </div>
          <div class="box-item highlight">
            批量查询
          </div>
          <div class="box-item highlight">
            批量导出
          </div>
          <div class="box-item">
            邮件提醒
          </div>
          <div class="box-item">
            微信提醒
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <img src="../assets/images/vip_level2.png" alt="">
            <p>至尊版</p>
            <img src="../assets/images/vip_recommend.png" alt="" class="recommend">
          </div>
          <div class="box-item svip-highlight">
            无上限
          </div>
          <div class="box-item">
            无上限
          </div>
          <div class="box-item svip-highlight">
            无上限
          </div>
          <div class="box-item">
            无上限
          </div>
          <div class="box-item svip-highlight">
            <span class="el-icon-success" />
          </div>
          <div class="box-item">
            <span class="el-icon-success" />
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <img src="../assets/images/vip_level1.png" alt="">
            <p>企业版</p>
          </div>
          <div class="box-item highlight">
            400次/天 (查询次数)
          </div>
          <div class="box-item">
            3000件/年
          </div>
          <div class="box-item highlight">
            <span class="el-icon-success" />
          </div>
          <div class="box-item">
            3000件/年
          </div>
          <div class="box-item highlight">
            <span class="el-icon-success" />
          </div>
          <div class="box-item">
            <span class="el-icon-error" />
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <img src="../assets/images/vip_level0.png" alt="">
            <p>普通会员</p>
          </div>
          <div class="box-item highlight">
            50次/天
          </div>
          <div class="box-item">
            50件/年
          </div>
          <div class="box-item highlight">
            <span class="el-icon-error" />
          </div>
          <div class="box-item">
            50件/年
          </div>
          <div class="box-item highlight">
            <span class="el-icon-error" />
          </div>
          <div class="box-item">
            <span class="el-icon-error" />
          </div>
        </div>
        <div class="box custom">
          <div class="box-header">
            <img src="../assets/images/vip_level0.png" alt="">
            <p>企业定制</p>
          </div>
          <div class="custom-method">
            <p><span class="el-icon-check" />更多增值服务</p>
            <p><span class="el-icon-phone" />电话咨询：</p>
            <p>18900554231</p>
          </div>
          <div class="custom-contact">
            联系我们，即可定制
          </div>
        </div>
      </div>
    </div>
    <div class="p_e_feature">
      <h3>费查查自动化监控功能特性</h3>
      <ul>
        <li v-for="item in zlCharacterList" :key="item.title">
          <img :src="item.img" alt="">
          <p v-html="item.title" />
          <p v-html="item.desc" />
        </li>
      </ul>
    </div>
    <div class="m-productFunction pt80">
      <h3>产品功能</h3>

      <p>监控数据加工过程</p>
      <br>
      <p>&nbsp;所有监控的专利数据来自国家知识产权局公开的专利和专利的法律状态信息，通过对专利大数据的分析加工，并以各地区统计指标为基本要求，对专利信息进行实时监控，更新及提醒。</p>
      <ul>
        <li>
          <p>国知局数据</p>
          <p>整理</p>
          <p>挖掘</p>
          <p>分析</p>
        </li>
        <i class="el-icon-d-arrow-right" />
        <li>
          <p>统计分析</p>
          <p>指标进程</p>
          <p>权利人</p>
          <p>代理机构</p>
        </li>
        <i class="el-icon-d-arrow-right" />
        <li>
          <p>监控管理</p>
          <p>年费缴纳</p>
          <p>专利权转移</p>
          <p>届满、失效</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import zlCharacterImg1 from '../assets/images/vip_zltx1.png'
import zlCharacterImg2 from '../assets/images/vip_zltx2.png'
import zlCharacterImg3 from '../assets/images/vip_zltx3.png'
import zlCharacterImg4 from '../assets/images/vip_zltx4.png'
import zlCharacterImg5 from '../assets/images/vip_zltx5.png'
import zlCharacterImg6 from '../assets/images/vip_zltx6.png'

export default {
  data() {
    return {
      zlCharacterList: [
        {
          img: zlCharacterImg1,
          title: '专利查询',
          desc: '一键查询年费详细信息'
        },
        {
          img: zlCharacterImg2,
          title: '专利监控',
          desc: '一键提醒，适时提醒用户缴费'
        },
        {
          img: zlCharacterImg3,
          title: '批量查询',
          desc: '高效查询，节省时间成本'
        },
        {
          img: zlCharacterImg4,
          title: '可视化分析',
          desc: '一目了然，掌握专利法律状态'
        },
        {
          img: zlCharacterImg5,
          title: '邮件提醒',
          desc: '邮件接收待缴年费账单明细'
        },
        {
          img: zlCharacterImg6,
          title: '微信提醒',
          desc: '微信扫码，实时接收年费监控提醒'
        }
      ]
    }
  }
}
</script>

<style scoped>
  h3 {
    color: #333;
    text-align: center;
    font-size: 26px;
    line-height: 90px;
    font-weight: 400
  }

  .p_e_banner {
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 15px;
    height: 400px;
    background: url('../assets/images/vip_banner.png');
    background-size: 100% 100%;
  }

  .p_e_brief {
    margin: 0 auto;
    width: 1200px;
    color: #fff;
  }

  .p_e_brief h3 {
    color: #fff;
    text-align: left;
    font-size: 35px;
    line-height: 100px;
  }

  .vip-privilege {
    width: 1200px;
    margin: 0 auto;
  }

  .vip-privilege .container {
    height: 394px;
    position: relative;
    margin-bottom: 80px;
  }

  .vip-privilege .module-line {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
  }

  .module-line span {
    display: inline-block;
  }

  .module-line span.arrow {
    width: 84px;
    height: 16px;
  }

  .module-line .text {
    font-size: 26px;
    color: #4c4c4c;
    margin: 0 10px;
  }

  .module-line .left-arrow {
    background: url("../assets/images/vip_duibi_left_arrow.png");
  }

  .module-line .right-arrow {
    background: url("../assets/images/vip_duibi_right_arrow.png");
  }

  .vip-privilege .box {
    width: 20%;
    height: 390px;
    background: #fff;
    text-align: center;
    position: absolute;
    display: inline-block;
    border: 1px solid #d3d1d0;
  }

  .vip-privilege .box.custom {
    color: #67C23A;
  }

  .vip-privilege .custom-method,
  .vip-privilege .custom-contact {
    font-size: 20px;
    line-height: 40px;
  }

  .vip-privilege .custom-method p:not(:first-child) {
    color: #909399;
  }

  .vip-privilege .custom-contact {
    margin-top: 50px;
    padding-top: 20px;
    border-top: 1px dotted #67C23A;
  }

  .vip-privilege .el-icon-check,
  .vip-privilege .el-icon-phone {
    margin-right: 5px;
  }

  .vip-privilege .box:nth-child(2) {
    left: 234px;
    border-color: #f2ddaf;
    background-color: #fffaeb;
    margin-top: -4px;
    width: 252px;
    z-index: 10;
    color: #ca963b;
    height: 398px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .08);
    -moz-box-shadow: 0 0 10px 2px rgba(0, 0, 0, .08);
  }

  .vip-privilege .box:nth-child(3) {
    left: 480px;
    border-right: 0;
  }

  .vip-privilege .box:nth-child(4) {
    left: 720px;
    border-right: 0;
  }

  .vip-privilege .box:nth-child(5) {
    right: 0;
  }

  .vip-privilege .box-header {
    font-size: 20px;
    padding-top: 40px;
    height: 80px;
  }

  .vip-privilege .box-header img.recommend {
    top: 0;
    left: 0;
    position: absolute;
  }

  .vip-privilege .box-header p {
    display: inline-block;
    margin-left: 5px;
  }

  .vip-privilege .box-item {
    height: 45px;
    line-height: 45px;
  }

  .vip-privilege .box-item.highlight {
    background: #fbf9f8;
  }

  .vip-privilege .box-item.svip-highlight {
    background: #fbf4e4;
  }

  .vip-privilege .box-item .el-icon-success {
    color: #67C23A;
    font-size: 20px;
  }

  .vip-privilege .box-item .el-icon-error {
    color: #F56C6C;
    font-size: 20px;
  }

  .p_e_brief p {
    padding: 15px 0;
    width: 550px;
    line-height: 28px;
    font-size: 14px
  }

  .p_e_brief a {
    display: block;
    margin-top: 40px;
    box-sizing: border-box;
    width: 120px;
    height: 40px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 38px;
    cursor: pointer;
  }

  .p_e_brief a:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .p_e_feature {
    box-sizing: border-box;
    padding-top: 40px;
    height: 630px;
    background: #eee;
  }

  .p_e_feature ul {
    box-sizing: border-box;
    padding: 0 50px;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }

  .p_e_feature ul li {
    float: left;
    display: block;
    width: 260px;
    height: 200px;
  }

  .p_e_feature ul li img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 15px auto;
  }

  .p_e_feature ul li p {
    text-align: center;
  }

  .p_e_feature ul li p:nth-child(2) {
    font-weight: 700;
    font-size: 18px;
    color: #333;
    line-height: 30px;
  }

  .p_e_feature ul li p:nth-child(3) {
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }

  .p_e_feature ul li:nth-child(2),
  .p_e_feature ul li:nth-child(5) {
    margin: 0 160px;
  }

  .pt80 {
    padding-top: 80px;
  }

  .m-productFunction {
    height: 700px;
    background: #fff;
  }

  .m-productFunction h3 {
    color: #333;
    text-align: center;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
  }

  .m-productFunction p:nth-child(2) {
    font-weight: 700;
    font-size: 16px;
  }

  .m-productFunction p {
    box-sizing: border-box;
    margin: 0 auto;
    padding-left: 20px;
    width: 1200px;
    color: #333;
    text-align: left;
  }

  .m-productFunction p:nth-child(3) {
    font-size: 16px;
  }

  .m-productFunction ul {
    display: block;
    overflow: hidden;
    margin: 30px auto 0;
    width: 1200px;
  }

  .m-productFunction ul li {
    display: block;
    float: left;
    box-sizing: border-box;
    margin: 15px;
    padding: 41px 0;
    width: 320px;
    height: 370px;
    box-shadow: 0 0 15px rgba(51, 51, 51, 0.3);
  }

  .m-productFunction ul li p {
    display: inline-block;
    margin: 15px 53px;
    padding: 0;
    width: 214px;
    height: 42px;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }

  .m-productFunction ul i {
    display: block;
    float: left;
    width: 75px;
    color: #ccc;
    text-align: center;
    font-size: 40px;
    line-height: 400px;
  }

  .m-productFunction p {
    box-sizing: border-box;

  }
</style>
