<template>
  <div id="frame" class="frame">
    <!-- header -->
    <div class="header">
      <div class="clear" style="height:60px;line-height:60px;">
        <img class="logo" height="35px" src="~@/assets/images/logo_1.png">
        <div id="topSearch" class="top-search">
          <input id="top-input" type="text" placeholder="请输入专利号码或任意文字搜索专利..." name="">
          <i class="search-icon el-icon-search" />
        </div>
        <i class="switch el-icon-close" />
        <svg-icon class="switch" icon-class="list" />
        <div class="nav-wrap fr clear">
          <ul class="nav-menu clear">
            <li class="nav-li nav_a li_o">
              <a href="index.html">首页</a>
            </li>
            <li class="nav-li nav_a li_o">
              <a href="product.html">产品</a>
            </li>
            <li class="nav-li"><a href="solution.html">控制台</a></li>
            <li class="nav-li">
              <a href="article.html">企业VIP</a>
            </li>
          </ul>
          <a href="#mytext" class="header-btn btn-trial">试用</a>
          <a target="_blank" class="header-btn btn-login" href="https://www.patentics.com/searchcn.htm">登录</a>
        </div>
      </div>
    </div>

    <!-- banner -->
    <div id="banner" class="banner">
      <div class="video-box">
        <video id="myvideo" muted="" autoplay="autoplay" loop="loop" src="~@/assets/video/cc.mp4" />
      </div>
      <div id="searchdiv" class="search-wrap">
        <div class="logo-wrap">
          <img height="132px" style="margin-left:-25px;" src="~@/assets/images/logo100.png">
        </div>
        <div class="slogan">
          专利智能检索分析平台
        </div>
        <div id="searchBox" class="search-box">
          <i class="search-logo fa el-icon-search" />
          <input id="textarea" placeholder="请输入关键词,公开号或者一段话..." type="text" name="">
          <i id="textclear" class="clear-icon fa el-icon-circle-close" />
          <div id="search-btn" class="search_btn">Search</div>
        </div>
      </div>
      <div id="tip-bottom" class="tip-bottom">
        智&nbsp; ·&nbsp; 能&nbsp; ·&nbsp; 创&nbsp; ·&nbsp; 造&nbsp; ·&nbsp; 价&nbsp; ·&nbsp; 值
      </div>

      <div id="tototo" class="godown-wrap">
        <img id="downimg" class="godown" src="~@/assets/images/godown.png" alt="">
      </div>
    </div>

    <!-- 内容主体 -->
    <div class="main">
      <div class="transfer">
        <div class="container">
          <div class="ibox ibox-hover clearfix">
            <div class="ibox-info fl">
              <br>
              <h1 class="row-tit wow fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.3s; animation-name: fadeInUp;">全球传输加速 天涯皆如比邻</h1>
              <i class="tit-hr  wow fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.3s; animation-name: fadeInUp;" />
              <p class="row-info-item  wow fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.3s; animation-name: fadeInUp;">
                联想独有的全球数据中心，文件同步分钟可达<br>
                文件传输速度数倍提升，跨国协作亦如面对面<br>
                断点续传，差量传输，传输效率与质量齐头并进</p>
              <div class="row-btngroup  wow fadeInUp  animated" data-wow-delay="0.3s" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <a id="link-15" class=" btn btn-getmore" alt="link-all" href="solution/07.html"><span>了解更多</span></a>
              </div>
              <div class="row-icon  wow fadeInUp  animated" data-wow-delay="0.3s" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="row-icon-1">
                  <i />
                  <span>5大洲25个数据中心</span>
                </div>
                <div class="row-icon-2">
                  <i />
                  <span>分钟级的全球同步技术</span>
                </div>
                <div class="row-icon-3">
                  <i />
                  <span>差量秒传提速30%</span>
                </div>
              </div>
            </div>
            <div id="gif1" class="ibox-pic fr wow fadeInUp animated" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-name: fadeInUp;"><img src="~@/assets/images/gif1.gif"></div>
          </div>
        </div>
      </div>

      <div class="cooperation">
        <div class="container">
          <div class="ibox ibox-hover clearfix">
            <div id="gif2" class="ibox-pic fl wow fadeInUp animated" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-name: fadeInUp;"><img src="~@/assets/images/gif2.gif"></div>
            <div class="ibox-space-left ibox-info fr">
              <br>
              <h1 class="row-tit wow fadeInUp animated" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-name: fadeInUp;">随时随地协作共享 办公如此轻松</h1>
              <i class="tit-hr wow fadeInUp animated" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-name: fadeInUp;" />
              <p class="row-info-item wow fadeInUp animated" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">跨部门多团队文件共享，灵活权限管控，高效团队协作<br>全终端覆盖，移动办公，即时消息通知，简单易用
              </p>
              <div class="row-btngroup wow fadeInUp animated" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-name: fadeInUp;">
                <a id="link-1" class="btn btn-getmore btn-getmore-blue" alt="link-all" href="/product/public.html"><span>了解更多</span></a>
              </div>
              <div class="row-icon  wow fadeInUp  animated" data-wow-delay="0.3s" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="row-icon-4">
                  <i />
                  <span>150种权限</span>
                </div>
                <div class="row-icon-5">
                  <i />
                  <span>多种同步方式</span>
                </div>
                <div class="row-icon-6">
                  <i />
                  <span>全终端覆盖</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="deploy">
        <div class="container">
          <div class="ibox ibox-hover clearfix">
            <div class="fl ibox-info">
              <h1 class="row-tit wow fadeInUp animated" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-name: fadeInUp;">云端Office 开启协同编辑新时代</h1>
              <i class="tit-hr  wow fadeInUp animated" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-name: fadeInUp;" />
              <p class="row-info-item  wow fadeInUp animated" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">
                Lenovo Docs多人实时在线编辑office文档，让工作效率提升<br>
                多种格式在线预览，本地云端文件自动同步备份，安全稳定<br>
              </p>
              <div class="row-btngroup wow fadeInUp animated" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-name: fadeInUp;">
                <a id="link-4" class="btn btn-getmore" alt="link-all" href="/product/lenovo-docs.html"><span>了解更多</span></a>
              </div>
              <div class="row-icon  wow fadeInUp  animated" data-wow-delay="0.3s" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="row-icon-7">
                  <i />
                  <span>多人实时在线编辑</span>
                </div>
                <div class="row-icon-8">
                  <i />
                  <span>兼容各格式office文档</span>
                </div>
                <div class="row-icon-9">
                  <i />
                  <span>实时评论</span>
                </div>
              </div>
            </div>
            <div id="gif3" class="fr ibox-pic wow fadeInUp animated" data-wow-duration="2.2s" style="visibility: visible; animation-duration: 2.2s; animation-name: fadeInUp;"><img src="~@/assets/images/gif3.gif"></div>
          </div>
        </div>
      </div>

      <div class="scheme">
        <h1 class="row-tit wow fadeInUp animated" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-name: fadeInUp;">丰富灵活的产品方案，满足不同的用户需求</h1>
        <div class="scheme-list">
          <a href="/product/public.html" class="scheme-list-1  wow fadeInUp animated" data-wow-delay="0.5s" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.5s; animation-name: fadeInUp;">
            <img src="~@/assets/images/commonality-yun-1.png" alt="">
            <h2 class="scheme-list-h2-1">公有云</h2>
            <div class="scheme-list-div-1">
              <p>满足客户多样的业务需要</p>

              <p>按需开通、按量计费的灵活高效</p>

              <p>服务模式，为客户提供安全高效的</p>

              <p>文件存储、共享协作平台</p>
            </div>
            <span class="know-more">
              <img src="~@/assets/images/arrowhead-1.png" alt="">
              <span>了解详情</span>
            </span>
          </a>
          <a href="/product/hybrid.html" class="scheme-list-2 wow fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.3s; animation-name: fadeInUp;">
            <img src="~@/assets/images/blend-yun-2.png" alt="">
            <h2 class="scheme-list-h2-2">融合云</h2>
            <div class="scheme-list-div-2">
              <p>更弹性的创新架构同时满足企业内部</p>

              <p>文件管理以及外部文件共享分</p>

              <p>发的需求，保证企业数据安全性</p>

              <p>同时增强系统灵活性</p>
            </div>
            <span class="know-more">
              <img src="~@/assets/images/arrowhead-1.png" alt="">
              <span>了解详情</span>
            </span>
          </a>
          <a href="/product/on-premise.html" class="scheme-list-3 wow fadeInUp animated" data-wow-delay="0.5s" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.5s; animation-name: fadeInUp;">
            <img src="~@/assets/images/privately-yun-1.png" alt="">
            <h2 class="scheme-list-h2-3">私有云</h2>
            <div class="scheme-list-div-3">
              <p>满足企业数据管理的IT建设需要，</p>

              <p>为客户提供统一的数据存储</p>

              <p>管理平台，实现内网加速访问，</p>

              <p>安全可控的私有云解决方案</p>
            </div>
            <span class="know-more">
              <img src="~@/assets/images/arrowhead-1.png" alt="">
              <span>了解详情</span>
            </span>
          </a>
        </div>
      </div>

      <div class="vipservice">
        <div class="container">
          <h1 class="vip-header wow fadeInUp animated" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-name: fadeInUp;"><span>7×24小时 我们永远在线为您服务</span>
          </h1>
          <div class="vip-info">
            <p class="vip-info-item wow fadeInUp animated" data-wow-duration="1.2s" style="visibility: visible; animation-duration: 1.2s; animation-name: fadeInUp;">
              专属售后经理，7x24小时随时解决您使用过程中的疑问</p>
            <p class="vip-info-item wow fadeInUp animated" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">服务50类行业，千锤百炼打造极致用户体验</p>
            <p class="vip-info-item wow fadeInUp animated" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">
              10年专业云服务运营，我们做到对您始终如一</p>
            <div class="vipservice-pic wow fadeInUp animated" data-wow-delay="0.2s" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.2s; animation-name: fadeInUp;">
              <img src="~@/assets/images/pic-vip.png?v=20180122">
            </div>
          </div>
        </div>
      </div>

      <div class="register">
        <div class="table-cell">
          <div class="container">
            <h1 class="reg-header">免费注册</h1>

            <form class="reg-form">
              <div class="form-group">
                <input id="transfer_signup_ph" class="form-control" type="text" placeholder="手机号">
              </div>
              <p class="help-block">点击注册即表明您同意本<a class="agree-link" href="/agreement.html" target="_blank">服务条款</a>和<a class="agree-link" href="http://appserver.lenovo.com.cn/Public/public_bottom/privacy.shtml" target="_blank">隐私条款</a>。</p>

              <div class="form-group">
                <a id="transfer_signup" class="btn btn-regsubmit" type="submit" href="https://console.box.lenovo.com/user/reg?fr=banner1&amp;sts_from=index"><span>立即注册</span></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <footer-com />
  </div>
</template>

<script>
import FooterCom from '@/components/Footer.vue'
export default {
  components: { FooterCom },
  data() {
    return {
      clientHeight: 0, // 浏览器可视区域高度
      isVisible: false, // 导航栏移动端布局显示
      searchKey: ''
    }
  },
  computed: {

  },
  mounted() {
    this.scrollCtrl()
    this.bannerResponsive()
    const hash = this.$route.query.hash
    hash && this.$nextTick(() => {
      window.location.hash = hash
    })
  },
  methods: {
    // banner响应式控制
    scrollCtrl() {
      $(window).scroll(function() {
        var criticalValue = $('#searchBox').offset().top + 60
        if (criticalValue - $(window).scrollTop() <= 0) {
          $('#topSearch').fadeIn()
        } else {
          $('#topSearch').fadeOut()
        }
      })
    },
    bannerResponsive() {
      // banner
      var banner = document.getElementById('banner')
      banner.style.height = document.body.clientHeight + 'px'

      var ibox = document.getElementsByClassName('ibox')
      console.log(this.clientHeight)
      window.addEventListener('resize', function() {
        banner.style.height = document.body.clientHeight + 'px'

        if (document.body.clientWidth < 1000) {
          for (var i = 0; i < ibox.length; i++) {
            if (i % 2 === 0) {
              var iboxInfo = document.getElementsByClassName('ibox-info')[i]
              var iboxPic = document.getElementsByClassName('ibox-pic')[i]
              // console.log(iboxInfo, iboxPic)
              ibox[i].appendChild(iboxInfo)
              // ibox[i].removeChild(iboxInfo);
            }
          }
        }
      })
    },
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
<style scoped>
  /* 来自方融信息科技有限公司 */
  img, input {
      border: 0;
      display: inline-block;
      outline: none;
  }
  [type="submit"] {
    -webkit-appearance: none;
}
a {
    color: inherit;
    text-decoration: none;
    background: transparent;
}
  body {
    background: #fff;
  }
  .frame{
    min-width: 1200px;
    overflow-x: auto;
    box-sizing: border-box;
  }
  .fr {
    float: right;
    position: relative;
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
    margin: 16px 5.3% 0 0;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    display: none;
  }
  .header .switch.el-icon-close{
    font-size: 28px;
    width: 28px;
    height: 28px;
    margin-top: 11px;
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
  .clear:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    zoom: 1;
  }
  .header .nav-wrap{
    min-width: 620px;
    height:60px;
    line-height:60px;
    float:right;
  }
  .nav-menu{
    float: left;
    margin-right: 48px;
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

  /* banner */
  .banner{
    background: #198ede;
    overflow: hidden;
    position: relative;
  }
  .video-box{
    width:100%;
    height:100%;
    position: absolute;
    left:0px;
    top:0px;
    right:0px;
    bottom:0px;
    overflow: hidden;
    z-index: 1;
  }
  .video-box video{
    min-width:2080px;
    width: 100%;
    height: auto;
    margin-top: 0px;
  }
  .search-wrap{
    width: 780px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -390px;
    top: 247.895px;
    z-index: 2;
  }
  .logo-wrap{
    width:100%;
    height:120px;
    line-height:120px;
    font-size:80px;
    text-align: center;
    color:white;
    font-weight: bold;
    margin-top:0px;
  }
  .slogan{
    width:102.5%;
    text-align:center;
    height:30px;
    line-height: 30px;
    color:white;
    margin-top:16px;
    font-size:17px;
    font-weight: 200;
    letter-spacing: 11px;
    font-family: 'Microsoft Yahei';
  }
  .search-box{
    width:100%;
    height:60px;
    border-radius: 5px;
    box-shadow: 0 0 0 1;
    background-color: white;
    margin-top:60px;
    padding-left: 50px;
    padding-right: 125px;
    position:relative;
    box-sizing: border-box;
  }
  .fa {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .search-logo{
    position: absolute;
    top: 20px;
    left: 15px;
    color:#e4e4e4;
    font-size:20px;
    font-weight: bold;
  }
  .search-box input{
    width:100%;
    height:20px;
    font-size:16px;
    float:left;
    margin-top:20px;
    color:#666666;
    border:none;
    outline:none;
    resize:none;
    line-height:20px;
    font-family: Microsoft Yahei;
  }
  .clear-icon{
    position: absolute;
    top: 20px;
    right:  96px;
    color:#7c7c7c;
    font-size:20px;
    cursor:pointer;
    display: none;
  }
  .search_btn{
    position: absolute;
    right: 10px;
    top: 10px;
    width:80px;
    height:40px;
    line-height:40px;
    border-radius:4px;
    font-size:14px;
    text-align:center;
    cursor:pointer;
    color:white;
    background-color: #0069ff;
  }
  .search_btn:hover {
      background-color: rgb(0,81,226);
      color: white;
  }
  .tip-bottom{
    width: 100%;
    min-width: 768px;
    height: 20px;
    line-height: 20px;
    position: absolute;
    left: 0;
    bottom: 50px;
    z-index: 2;
    font-size: 18px;
    text-align: center;
    color: white;
  }
  .godown-wrap{
    width: 100%;
    min-width: 768px;
    height: 50px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 2;
  }
  .godown{
    width: 36.5px;
    height: 14.5px;
    margin-top: 10px;
    cursor: pointer;
    animation: godown 2s ease infinite;
  }

  /* 主体内容区域样式 */
  .main img {
    vertical-align: middle;
    border: 0;
}
  .transfer {
    padding: 65px 0;
    padding-bottom: 30px;
    background-color: #fff;
    overflow: hidden;
}
.main .container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
}
.container::before, .container::after, .clearfix::before, .clearfix::after {
    content: '';
    display: table;
}
.container::after, .clearfix::after {
    clear: both;
}
.fl {
    float: left;
}
.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}
/*.animated {
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}*/
.row-tit {
    margin: 0;
    margin-top: 7px;
    font-size: 32px;
    color: #327DDD;
}
.tit-hr {
    margin-top: 18px;
    margin-bottom: 11px;
    display: block;
    width: 50px;
    height: 2px;
    background-color: #dadcdf;
}
.row-info-item {
    margin-bottom: 0;
    font-size: 16px;
    color: #565656;
    line-height: 28px;
}
.row-btngroup {
    margin-top: 30px;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    font-weight: normal;
    line-height: 1.43;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
}
.btn-getmore {
    position: relative;
    display: inline-block;
    width: 113px;
    height: 38px;
    padding: 0;
    font-size: 15px;
    color: #3389FF;
    text-align: center;
    border: 1px solid #3389FF;
    border-radius: 2px;
    overflow: hidden;
    background: transparent;
}
.btn-getmore span {
    position: relative;
    z-index: 20;
    display: block;
    padding: 8px 12px;
    width: 100%;
    height: 100%;
    color: #2980e9;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
.ibox-hover:hover .btn-getmore {
    border-color: #005FD5;
}
.ibox-hover:hover .btn-getmore span {
    color: #fff;
}
.btn-getmore::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 0;
    height: 43px;
    display: block;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    background-color: #005FD5;
    z-index: 10;
}
.ibox-hover:hover .btn-getmore::after {
    width: 113px;
}
.ibox-hover:hover .btn-getmore.btn-getmore-blue span {
    color: #005FD5;
}
.row-icon {
    color: #7B7B7B;
    margin-top: 30px;
}
.row-icon > div {
    float: left;
    margin-right: 20px;
}
.row-icon > div> i {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 36px;
    height: 36px;
    background: #ccc;
}
.row-icon > .row-icon-1 >i {
    background: url(~@/assets/images/row-icon-1.png) no-repeat;
}
.row-icon > .row-icon-2 >i {
    background: url(~@/assets/images/row-icon-2.png) no-repeat;
}
.row-icon > .row-icon-3 >i {
    background: url(~@/assets/images/row-icon-3.png) no-repeat;
}
.ibox > .ibox-pic {
    width: 700px;
    /* height: 600px; */
}
.transfer .ibox-pic {
    position: relative;
    margin-top: -25px;
}
.ibox > .ibox-pic img {
    width: 100%;
    margin-top: -133px;
}

.cooperation {
    padding-top: 110px;
    /* padding-bottom: 83px; */
    background-color: #005FD5;
    color: #000;
    overflow: hidden;
}
.ibox > .ibox-pic:nth-child(1) {
    width: 752px;
    margin-left: -127px;
}
.ibox > .ibox-pic img {
    width: 100%;
    margin-top: -133px;
}
.ibox-info {
    padding-left: 15px;
}
.transfer .ibox-info {
    padding-left: 0;
}
.cooperation .ibox-info {
    margin-top: -20px;
}
.cooperation .row-tit {
    color: #fff;
}
.cooperation .tit-hr {
    background-color: #76aaea;
}
.cooperation .row-info-item {
    color: #fff;
}
.btn-getmore.btn-getmore-blue {
    border-color: #fff;
}
.btn-getmore.btn-getmore-blue span {
    color: #fff;
}
.btn-getmore.btn-getmore-blue::after {
    background-color: #fff;
}
.cooperation .row-icon {
    color: #fff;
}
.row-icon > .row-icon-4 {
    margin-right: 80px;
}
.row-icon > .row-icon-5 {
    margin-right: 80px;
}
.row-icon > .row-icon-7 {
    margin-right: 40px;
}
.row-icon > .row-icon-8 {
    margin-right: 50px;
}
.row-icon > .row-icon-4 >i {
    background: url(~@/assets/images/row-icon-4.png) no-repeat;
}
.row-icon > .row-icon-5 >i {
    background: url(~@/assets/images/row-icon-5.png) no-repeat;
}
.row-icon > .row-icon-6 >i {
    background: url(~@/assets/images/row-icon-6.png) no-repeat;
}
.row-icon > .row-icon-7 >i {
    background: url(~@/assets/images/row-icon-7.png) no-repeat;
}
.row-icon > .row-icon-8 >i {
    background: url(~@/assets/images/row-icon-7.png) no-repeat;
}
.row-icon > .row-icon-9 >i {
    background: url(~@/assets/images/row-icon-7.png) no-repeat;
}
.deploy {
    padding-top: 74px;
    padding-bottom: 29px;
    background-color: #fff;
    overflow: hidden;
}
.deploy .ibox-info {
    /* padding-left: 55px; */
    padding-top: 50px;
}
.deploy .ibox > .ibox-pic {
    width: 730px;
    margin-right: -60px;
}

.scheme {
    padding-top: 70px;
    padding-bottom: 70px;
    text-align: center;
    color: #151515;
}
.scheme .row-tit {
    color: #141414;
    font-size: 26px;
}
.scheme-list {
    margin: 0 auto;
    text-align: center;
    width: 950px;
    overflow: hidden;
    margin-top: 30px;
}
.scheme-list > a {
    text-align: center;
    width: 30%;
    display: block;
    float: left;
    padding: 40px 10px 5px 10px;
    color: #070707;
    border: 2px solid #ccc;
    height: 400px;
    position: relative;
    border-radius: 8px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
    -webkit-transition: box-shadow 0.2s linear,color 0.2s linear ,border-color 0.2s linear;
    -moz-transition: box-shadow 0.2s linear,color 0.2s linear ,border-color 0.2s linear;
    -ms-transition: box-shadow 0.2s linear,color 0.2s linear ,border-color 0.2s linear;
    -o-transition: box-shadow 0.2s linear,color 0.2s linear ,border-color 0.2s linear;
    transition: box-shadow 0.2s linear,color 0.2s linear ,border-color 0.2s linear;
}
.scheme-list > a:hover {
    -webkit-box-shadow: 0 0 30px #ccc;
    -moz-box-shadow: 0 0 30px #ccc;
    box-shadow: 0 0 30px #ccc;
    cursor: pointer;
    /* border: 2px solid #2073DA; */
}
.scheme-list > .scheme-list-2 {
    border: 2px solid #2073DA;
}
.scheme-list > a > h2 {
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 24px;
    /* -webkit-transition: color 0.2s linear; */
    /* -moz-transition: color 0.2s linear; */
    /* -ms-transition: color 0.2s linear; */
    /* -o-transition: color 0.2s linear; */
    /* transition: color 0.2s linear; */
}
.scheme-list > a >.scheme-list-div-1, .scheme-list > a >.scheme-list-div-2, .scheme-list > a >.scheme-list-div-3 {
    color: #939496;
    line-height: 28px;
}
.scheme-list > a p {
    /* margin-top: 6px; */
    font-size: 16px;
    color: #5C5F63;
    -webkit-transition: color 0.2s linear;
    -moz-transition: color 0.2s linear;
    -ms-transition: color 0.2s linear;
    -o-transition: color 0.2s linear;
    transition: color 0.2s linear;
}
.know-more {
    color: #3375E9;
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.scheme-list > a > .scheme-list-h2-2 {
    color: #2B7FE8;
}
.scheme-list > a >.scheme-list-div-2 {
    color: #2B7FE8;
}
.scheme-list-2 > .scheme-list-div-2 >p {
    color: #2460D8;
}

.vipservice {
    padding-top: 1px;
    background: #f6f6f6;
}
.vip-header {
    margin-top: 50px;
    font-size: 32px;
    color: #1A74E6;
    text-align: center;
}
.vip-header span {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    /* border-bottom: 1px solid #1A74E6; */
}
.vip-info {
    margin-top: 20px;
    line-height: 28px;
}
.vip-info-item {
    /* margin: 5px 0; */
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
}
.vipservice-pic {
    margin: 30px auto 0;
    /* width: 1022px; */
    text-align: center;
}

.register {
    padding: 25px 0;
    background-color: #2573e3;
}
.reg-header {
    padding-top: 25px;
    font-size: 24px;
    color: #fff;
    text-align: center;
}
.reg-form {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 357px;
}
.reg-form .form-group {
    margin-bottom: 15px;
}
.form-control {
    display: block;
    width: 100%;
    height: 41px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
}
.help-block {
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 15px;
}
.register .help-block {
    color: rgba(255, 255, 255, .5);
}
.agree-link {
    text-decoration: underline;
}
.btn-regsubmit {
    position: relative;
    width: 100%;
    background: transparent;
    overflow: hidden;
    border: none;
    color: #484848;
}
.btn-regsubmit span {
    position: relative;
    z-index: 100;
    display: block;
    padding: 10px 12px;
    color: #fff;
    border: 1px solid #fff;
    background: transparent;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
@media screen and (max-width: 1199px) {
    .main .container{

    }
    .header{
      min-width: 768px;
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
      width: 75px;
    }
}
@media screen and (max-width: 999px) {
  .frame{
    width: 100%;
    min-width: 768px;
  }
  .header .nav-wrap{
    display: none;
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
  /*.register{
    min-width: 768px;
  }*/
  .search-wrap{
    width: 76%;
    margin-left: -38%;
  }
  .main .container{
    width: 100%;
  }
  .transfer, .cooperation, .deploy{
    padding-top: 0;
  }
  .cooperation{
    padding-bottom: 30px;
  }
  .ibox .fl, .ibox .fr{
    float: none;
  }
  .ibox .ibox-info{
    width: 100%;
    text-align: center;
  }
  .ibox .tit-hr{
    margin-left: auto;
    margin-right: auto;
  }
  .ibox-info .row-icon{
    display: inline-block;
  }
  .ibox .ibox-pic{
    width: 100%;
    margin-top: 0;
    overflow: hidden;
    /*margin: 0 auto;*/
  }
  .ibox > .ibox-pic[data-v-fae5bece]:nth-child(1) {
      width: 100%;
      margin-left: 0;
  }
  .scheme-list{
    width: 100%;
    box-sizing: border-box;
  }
  .scheme-list > a{
    margin-left: 1.25%;
    margin-right: 1.25%;
  }
  .scheme-list > a:first-child {
    margin-left: 2.5%;
  }
  .scheme-list > a:last-child {
    margin-right: 2.5%;
  }
  .vipservice-pic img{
    width: 100%;
  }
}

  /* 动画 */
  @keyframes godown{
    0%   {margin-top: 10px;}
    25% {margin-top: 30px;}
    50% {margin-top: 10px;}
    100% {margin-top: 10px;}
  }

  @keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        -ms-transform: translateY(20px);
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }
  }
</style>
