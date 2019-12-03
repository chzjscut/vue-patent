<template>
  <div class="main">
    <div id="home" class="index-banner">
      <div class="cover" />
      <div class="s wp">
        <h2><span class="mc">查年费，就上费查查</span></h2>
        <el-row style="width: 800px; padding-top: 100px;margin: 0 auto">
          <el-col :span="20">
            <el-input
              v-model="searchKey"
              style="border-bottom-left-radius: 0;border-top-left-radius: 0"
              placeholder="请输入申请人全称、专利号关键字，如20182021488655"
              @keyup.enter.native="handleSearch()"
            />
          </el-col>
          <el-col :span="4">
            <el-button
              type="primary"
              size="large"
              style="width: 100%;border-bottom-left-radius: 0;border-top-left-radius: 0"
              @click="handleSearch"
            >查一下
            </el-button>
          </el-col>
        </el-row>
        <h6>本系统采用精准查询，查询条件中的申请号、申请人二者必须填一个。输入的申请号/专利号必须为9位或13位，不需输入字母“ZL”，并且不能包含“.”</h6>
      </div>
      <div class="index-slogan">
        <div class=" wp cl">
          <div
            v-for="item in sloganList"
            :key="item.sub"
            class="service-subject cl"
          >
            <div class="m">
              <img :src="item.icon" width="48" height="48" :alt="item.sub"></div>
            <div class="title-sub">{{ item.sub }}</div>
            <p class="des" v-html="item.desc" />
          </div>
        </div>
      </div>
    </div>

    <!--服务项目-->
    <div id="service" class="index-service ">
      <div class="index-title">
        <div class="title">服务项目</div>
        <div class="title-line" />
        <p class="tips">用我们的专业和诚信赢得您的信赖，从标准化到定制化均有您想要的服务！</p>
      </div>
      <div class="wp">
        <div class="s wps cl">
          <template v-for="(s,i) in serviceList">
            <div :key="i" class="sub" @mouseenter="serviceIndex = i" @mouseleave="serviceIndex = -1">
              <dl>
                <dt>{{ s.title }}</dt>
                <dd class="m">
                  <img :src="s.img" width="80" height="80" :alt="s.title">
                </dd>
                <dd class="des" v-html="s.desc" />
              </dl>
              <ul v-show="i === serviceIndex" class="on">
                <div class="ul-s">
                  <h6>{{ s.layer.title }}</h6>
                  <li v-for="item in s.layer.descList" :key="item" v-html="item" />
                </div>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!--案例作品-->
    <div id="case" class="index-case">
      <div class="index-title">
        <div class="title">客户案例</div>
        <div class="title-line" />
        <p class="tips">用技术与专注，将作品通过艺术和技术的结合，打造精品案例。</p>
      </div>
      <div class="wp">
        <ul class="s cl">
          <li v-for="item in caseList" :key="item.name">
            <div>
              <div class="m">
                <img
                  width="300"
                  height="200"
                  :src="item.img"
                  class="attachment-post-thumbnail wp-post-image"
                  :alt="item.name"
                >
              </div>
              <p><span v-html="item.name" /></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 结果 -->
    <div class="index-customer index-f">
      <div class="index-title">
        <div class="title">对于结果，您所熟悉的他们这样说</div>
        <div class="title-line" />
        <p class="tips">费查查感恩众多知名伙伴对费查查的信赖与认可</p>
      </div>
      <div class="s wp">
        <div class="customer-box">
          <div class="bd">
            <div class="tempWrap">
              <el-carousel
                height="130px"
                :autoplay="false"
                arrow="never"
                indicator-position="outside"
              >
                <el-carousel-item v-for="(item,i) in customer" :key="i">
                  <div class="cl clone">
                    <div class="m">
                      <img :src="item.img" :alt="item.title">
                    </div>
                    <div class="big-title">{{ item.title }}</div>
                    <p v-html="item.desc" />
                    <div class="s-title" v-html="item.subTitle" />
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 知名客户 -->
    <div class="index-partner index-f">
      <div class="index-title">
        <div class="title">知名客户</div>
        <div class="title-line" />
        <p class="tips">虽然不都是500强，但我可以给您讲我们与任何一个伙伴的故事</p>
      </div>
      <div class="wp s">
        <ul class="cl">
          <li v-for="(partner,i) in partnerList" :key="i">
            <a href="JavaScript:" :style="{backgroundImage: 'url('+partner+')'}" /></li>
        </ul>
      </div>
    </div>

    <!-- 立即联系 -->
    <div class="index-contact">
      <div class=" wp">
        <div class="s">
          <h6>现在，非常期待与您的又一次邂逅</h6>
          <p>费查查努力让每一次邂逅总能超越期待</p>
          <div class="btn"><a
            href="https://wpa.qq.com/msgrd?v=3&amp;uin=235566458&amp;site=qq&amp;menu=yes"
            target="_blank"
            class="btn-a"
          ><em /><span>立即联系</span></a></div>
        </div>
      </div>
      <div class="cover" />
    </div>

    <!-- 流程 -->
    <div id="flow" class="index-process">
      <div class="index-title">
        <div class="title">费查查定制化服务流程</div>
        <div class="title-line" />
        <p class="tips">丰富互联网信息化项目服务经验，让我们对项目实施的规范化、标准化有更多的理解</p>
      </div>
      <div class="s wp">
        <ul class="cl">
          <li v-for="item in processList" :key="item.title" class="no">
            <a href="JavaScript:">
              <img :src="item.icon" width="50" height="50" alt="">
              <p>{{ item.title }}</p>
            </a></li>
        </ul>
        <p style="padding: 10px 0 0 72px; line-height: 24px; font-size: 13px; color: #aaa;">
          *注：以上只是简洁的流程，实际项目中流程会有更多细节，请悉知</p>
      </div>
    </div>

  </div>
</template>

<script>
// 标语
import sloganIcon1 from '../assets/images/slogan-1.png'
import sloganIcon2 from '../assets/images/slogan-2.png'
import sloganIcon3 from '../assets/images/slogan-3.png'
import sloganIcon4 from '../assets/images/slogan-4.png'
// 服务
import serviceImg1 from '../assets/images/service1.png'
import serviceImg2 from '../assets/images/service2.png'
import serviceImg3 from '../assets/images/service3.png'
import serviceImg4 from '../assets/images/service4.png'
// 案例
import case1 from '../assets/images/case1.png'
import case2 from '../assets/images/case2.png'
import case3 from '../assets/images/case3.png'
import case4 from '../assets/images/case4.png'
// 结果
import customer1 from '../assets/images/customer1.png'
import customer2 from '../assets/images/customer2.png'
import customer3 from '../assets/images/customer3.png'
import customer4 from '../assets/images/customer4.png'
import customer5 from '../assets/images/customer5.png'

// 知名客户
import partner1 from '../assets/images/partner1.png'
import partner2 from '../assets/images/partner2.png'
import partner3 from '../assets/images/partner3.png'
import partner4 from '../assets/images/partner4.png'
import partner5 from '../assets/images/partner5.png'
import partner6 from '../assets/images/partner6.png'
import partner7 from '../assets/images/partner7.png'
import partner8 from '../assets/images/partner8.png'
import partner9 from '../assets/images/partner9.png'
import partner10 from '../assets/images/partner10.png'
import partner11 from '../assets/images/partner11.png'
import partner12 from '../assets/images/partner12.png'
import partner13 from '../assets/images/partner13.png'
import partner14 from '../assets/images/partner14.png'
import partner15 from '../assets/images/partner15.png'

// 流程
import process1 from '../assets/images/process1.png'
import process2 from '../assets/images/process2.png'
import process3 from '../assets/images/process3.png'
import process4 from '../assets/images/process4.png'
import process5 from '../assets/images/process5.png'
import process6 from '../assets/images/process6.png'
import process7 from '../assets/images/process7.png'
import process8 from '../assets/images/process8.png'

export default {
  data() {
    return {
      searchKey: '',
      sloganList: [
        {
          sub: '专注',
          icon: sloganIcon1,
          desc: '团队始于2013年，专注专利行业服务超过6年时间'
        },
        {
          sub: '原创',
          icon: sloganIcon2,
          desc: '拥有自主软件著作版权，坚持项目定制开发。'
        },
        {
          sub: '专业',
          icon: sloganIcon3,
          desc: '团队成员平均从业经验超过8年，都是互联网"老司机"'
        },
        {
          sub: '效率',
          icon: sloganIcon4,
          desc: '高效服务过包括华为、中国中冶在内的数百个合作伙伴。'
        }
      ],
      serviceIndex: -1,
      serviceList: [
        {
          title: '年费查询',
          img: serviceImg1,
          desc: '用数据创造价值，致力于为客户提供快速、准确、全面的专利年费数据服务',
          layer: {
            title: '全自动',
            descList: ['无需人工操作', '一键查询所有相关数据', '数据每周定期更新，避免失效风险']
          }
        },
        {
          title: '批量导出',
          img: serviceImg2,
          desc: '提供专利年费获取，并生成Excel表格形式导出，维护更简单',
          layer: {
            title: 'Excel导出',
            descList: ['一键导出关注案件', '支持无没有任何数量限制', '详细、多维度，再也不会遗漏']
          }
        },
        {
          title: '年费监控',
          img: serviceImg3,
          desc: '提供中国有效专利的年费监控服务，增加缴费提醒功能',
          layer: {
            title: '专利监控服务',
            descList: ['基于AI智能技术，又不止于AI', '一目了然显示当月需要缴费的专利', '准确、及时的专利管理监控平台，稳定安全']
          }
        },
        {
          title: '可视化分析',
          img: serviceImg4,
          desc: '多维度可视化报表，轻松告别传统人工查询和维护',
          layer: {
            title: '利用折线图、柱状图展示案件',
            descList: ['即时企业案件年费信息', '掌握专利总量，监控区域专利法律状态', ' 及时跟踪影响企业专利法律状态变化因素']
          }
        }
      ],
      caseList: [
        {
          img: case1,
          name: '北京华智则铭知识产权代理有限公司'
        },
        {
          img: case2,
          name: '温州市品创专利商标代理事务所'
        },
        {
          img: case3,
          name: '中国铁建股份有限公司'
        },
        {
          img: case4,
          name: '中国通信建设集团有限公司'
        }
      ],
      customer: [
        {
          img: customer1,
          title: '新华三集团',
          desc:
              'H3C新华三是一家致力于IT基础架构产品及方案的研究、开发、生产、销售及服务的公司，有路由器、以太网交换机、无线、网络安全、服务器、存储、IT管理系统、云管理平台等产品，这些...',
          subTitle: '通信领域最具影响力的企业之一'
        },
        {
          img: customer2,
          title: '江苏鸿信系统集成有限公司',
          desc:
              '作为中国电信投资组建具有独立法人资格的全资子公司，最近几年加大自主创新投入，特别是知识产权，费查查帮助其解放了人力，现在只需要一个人来做专利流程...',
          subTitle: '国内最大系统集成企业之一'
        },
        {
          img: customer3,
          title: '温州市品创专利商标代理事务所',
          desc: '随着业务的发展特别是专利数量日益剧增，费用每个月都要缴，需要非常准确且不能出错。在使用了费查查系统后，可以自动和官方费用及时同步，不用手动输入，大大提升了准确性...',
          subTitle: '温州最具影响力的代理所之一'
        },
        {
          img: customer4,
          title: '扬州大学',
          desc: ' 扬州大学是江苏省人民政府和教育部共建高校、江苏省属重点综合性大学，每年申请专利案件达上千件，需要维护案件量之大。通过费查查监控系统能及时获得案件最新状态，操作简单便捷...',
          subTitle: '全国首批博士学位授予单位'
        },
        {
          img: customer5,
          title: '华菱星马汽车（集团）股份有限公司',
          desc: '全国重要的重型卡车、重型专用车及核心零部件生产研发基地，国家重点支持企业；偶然的机会接触到费查查，发现他们不仅在专利年费查询方面，方便便捷而且还能报警功能，让企业免受专利失效...',
          subTitle: '首批“国家汽车整车出口基地企业'
        }
      ],
      partnerList: [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8,
        partner9, partner10, partner11, partner12, partner13, partner14, partner15],
      processList: [
        {
          title: '沟通需求',
          icon: process1
        },
        {
          title: '签订合同',
          icon: process2
        },
        {
          title: 'UE原型设计',
          icon: process3
        },
        {
          title: '需求确认',
          icon: process4
        },
        {
          title: 'UI设计',
          icon: process5
        },
        {
          title: '开发编码',
          icon: process6
        },
        {
          title: '测试验收',
          icon: process7
        },
        {
          title: '交付培训售后',
          icon: process8
        }
      ]
    }
  },
  mounted() {
    const hash = this.$route.query.hash
    hash && this.$nextTick(() => {
      window.location.hash = hash
    })
  },
  methods: {
    handleSearch() {
      if (this.searchKey) {
        this.$router.push({ name: 'consoleAnnualQuery', query: { kw: this.searchKey }})
      } else {
        this.$message({
          type: 'warning',
          message: '请输入要查询的关键词',
          customClass: 'el-message-custom'
        })
      }
    }
  }
}
</script>
<style>
  /* 来自方融信息科技有限公司 */
  body {
    background: #fff;
  }

  .s-header, .header:hover {
    background: #090b1a;
  }

  /*index-banner*/
  .index-banner {
    min-width: 1200px;
  }

  .index-banner .el-input__inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .index-banner {
    background: url(../assets/images/banner_bg.jpg) no-repeat bottom center;
    position: relative;
  }

  .index-banner .s {
    padding: 138px 0 150px;
    position: relative;
    z-index: 100;
    text-align: center;
  }

  .index-banner h2 {
    font-size: 45px;
    line-height: 50px;
  }

  .index-banner .mc {
    color: #0595c7;
    margin-left: 20px;
  }

  .index-banner h6 {
    padding-top: 20px;
    line-height: 30px;
    font-size: 16px;
    color: #0595c7;
  }

  .index-slogan {
    position: relative;
    z-index: 100;
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .index-slogan .service-subject {
    float: left;
    width: 23%;
    padding: 0 1%;
  }

  .index-slogan .m {
    float: left;
    width: 50px;
    padding: 11px 0;
    margin-right: 12px;
  }

  .index-slogan .m img {
    vertical-align: middle;
  }

  .index-slogan .title-sub {
    line-height: 36px;
    font-size: 18px;
    color: #eee;
  }

  .index-slogan .des {
    font-size: 13px;
    color: #93979f;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
  }

  /*index-title*/
  .index-title {
    text-align: center;
  }

  .index-title .title {
    font-size: 30px;
    line-height: 30px;
    color: #333;
  }

  .index-title .tips {
    font-size: 15px;
    line-height: 15px;
    color: #888;
  }

  .index-title .title-line {
    height: 20px;
  }

  /*index-service*/
  .index-service {
    padding: 100px 0;
    zoom: 1;
    min-width: 1200px;
  }

  .index-service .s {
    padding-top: 50px;
  }

  .index-service .sub {
    float: left;
    width: 25%;
    height: 220px;
    background: #fff;
    position: relative;
    /*transition: 0.3;*/
  }

  .index-service dl {
    padding: 15px;
  }

  .index-service dt {
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }

  .index-service dt {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    color: #555;
  }

  .index-service .des {
    height: 40px;
    line-height: 20px;
    padding: 0 15px;
    overflow: hidden;
    font-size: 13px;
    color: #646A75;
    text-align: center;
  }

  .index-service .m {
    padding: 20px 0;
    text-align: center;
  }

  .index-service .m img {
    height: 80px;
  }

  .index-service ul {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #0595C7;
    color: #fff;
    text-align: center;
  }

  .index-service .ul-s {
    padding: 15px;
  }

  .index-service ul h6 {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 10px;
    color: #fff;
  }

  .index-service ul li {
    font-size: 13px;
    line-height: 24px;
    color: #fff;
  }

  .index-service .index2n {
    margin-top: 20px;
    height: 36px;
  }

  .index-service .index2n a {
    color: #fff;
    padding: 6px 25px;
    line-height: 36px;
    border-radius: 1px;
    border: 1px #FFF solid;
  }

  .index-service .index2n a:hover span {
    color: #0595c7;
  }

  /*index-case*/
  .index-case {
    min-width: 1200px;
    padding: 80px 0;
    text-align: center;
    zoom: 1;
    background: #f8f8f8 url(../assets/images/case-bg.jpg) no-repeat center center;
  }

  .index-case .title {
    color: #eee;
  }

  .index-case ul {
    padding: 40px 10px;
  }

  .index-case li {
    float: left;
    width: 25%;
  }

  .index-case li div {
    margin: 2px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  .index-case li img {
    width: 100%;
    height: 192px;
    transition: 1s;
    -moz-transition: 1s;
    -webkit-transition: 1s;
    -o-transition: 1s;
    vertical-align: middle;
  }

  .index-case li img:hover {
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  .index-case li p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 32px;
    height: 32px;
    overflow: hidden;
    background: url(../assets/images/case_name_bg.png);
  }

  .index-case li span {
    color: #fff;
    padding: 0 15px;
    text-decoration: none;
  }

  .index-case .more {
    display: block;
    margin: 0 auto;
    width: 130px;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #0595C7;
    border: 1px #0595C7 solid;
    border-radius: 3px;
  }

  .index-case .more span {
    color: #0595C7;
  }

  .index-case .more em {
    background: #0595C7;
  }

  .index-case .more:hover span {
    color: #fff;
  }

  /*index-customer*/
  .index-customer {
    min-width: 1200px;
    padding-top: 80px;
    background: #fff;
  }

  .customer-box {
    padding: 50px 150px 30px;
  }

  .customer-box .m {
    float: left;
    width: 130px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .customer-box .m img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  .customer-box .big-title {
    height: 20px;
    line-height: 20px;
    font-size: 18px;
    color: #333;
  }

  .customer-box p {
    padding: 15px 0 10px;
    line-height: 22px;
    font-size: 14px;
    color: #777;
    max-height: 66px;
    overflow: hidden;
  }

  .customer-box .s-title {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #999;
  }

  /*index-partner*/
  .index-partner {
    min-width: 1200px;
    padding: 100px 0;
    background: #fff;
  }

  .index-partner .s {
    padding: 50px 0 0;
  }

  .index-partner ul {
    padding: 0 10px;
  }

  .index-partner li {
    float: left;
    width: 20%;
  }

  .index-partner a {
    display: block;
    margin: 10px;
    height: 80px;
    border: 1px #ededed solid;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
    transition: 0.5s;
  }

  .index-partner a:hover {
    border-color: #dcdcdc;
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    -ms-filter: grayscale(0);
    -o-filter: grayscale(0);
    filter: grayscale(0);
    filter: none;
  }

  /*index-contact*/
  .index-contact {
    min-width: 1200px;
    padding: 45px 0;
    background-image: url(../assets/images/contact-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center top;
    position: relative;
  }

  .index-contact .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .index-contact .s {
    position: relative;
    padding: 0 120px;
    z-index: 100;
  }

  .index-contact h6 {
    font-size: 30px;
    color: #fff;
    line-height: 40px;
  }

  .index-contact p {
    line-height: 50px;
    font-size: 18px;
    color: #eee;
  }

  .index-contact .btn {
    position: absolute;
    top: 50%;
    right: 120px;
    display: block;
    width: 200px;
    margin-top: -25px;
    border: 1px #fff solid;
    text-align: center;
    border-radius: 3px;
  }

  .index-contact .btn a {
    display: block;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    color: #fff;
  }

  /*index-process*/
  .index-process {
    min-width: 1200px;
    background: #fff;
    padding: 80px 0;
  }

  .index-process ul {
    padding: 40px 40px 0;
  }

  .index-process li {
    float: left;
    width: 12.5%;
  }

  .index-process li a {
    display: block;
    border-left: 1px #ddd dotted;
    text-align: center;
    color: #808080;
  }

  .index-process .no a {
    border-left: 0;
  }

  .index-process li p {
    font-size: 16px;
    line-height: 40px;
  }

  .index-process li img {
    height: 50px;
  }

</style>
