<template>
  <div class="login">
    <div class="content">
      <div class="banner-parent">
        <div class="banner-img">
          <img src="@/assets/images/login_banner_bg.png" alt="">
        </div>
      </div>

      <div class="log_content">
        <div class="right_form">
          <div class="right_form_tab">
            <span
              v-for="tab in tabs"
              :key="tab.name"
              :class="{'log_tab_active': activeTab === tab.name}"
              @click="activeTab = tab.name"
            >{{ tab.title }}</span>
          </div>
          <el-form
            v-show="activeTab === tabs[0].name"
            ref="formPassword"
            :model="formPassword"
          >
            <el-form-item
              prop="mobile"
              :rules="[{required :true , message: '手机号为必填项', trigger: 'blur' },
                       { pattern: /^1[34578]\d{9}$/, message: '手机格式有误', trigger: 'blur' }]"
            >
              <el-input
                v-model="formPassword.mobile"
                prefix-icon="el-icon-mobile-phone"
                placeholder="请输入手机号码"
              />
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="[{required :true , message: '密码为必填项', trigger: 'blur' }]"
            >
              <el-input
                v-model="formPassword.password"
                type="password"
                prefix-icon="el-icon-tickets"
                placeholder="请输入密码"
                @keyup.enter.native="handleLoginClick"
              />
            </el-form-item>
          </el-form>
          <el-form
            v-show="activeTab === tabs[1].name"
            ref="formVerification"
            :model="formVerification"
          >
            <el-form-item
              prop="mobile"
              :rules="[{required :true , message: '手机号为必填项', trigger: 'blur' },
                       { pattern: /^1[34578]\d{9}$/, message: '手机格式有误', trigger: 'blur' }]"
            >
              <el-input
                v-model="formVerification.mobile"
                prefix-icon="el-icon-mobile-phone"
                placeholder="请输入手机号码"
              />
            </el-form-item>
            <el-form-item
              prop="verifyCode"
              :rules="[{required :true , message: '验证码为必填项', trigger: 'blur' },
                       { pattern: /^\d{6}$/, message: '格式错误，6位验证码', trigger: 'blur' }]"
            >
              <el-row>
                <el-col :span="14">
                  <el-input
                    v-model="formVerification.verifyCode"
                    prefix-icon="el-icon-tickets"
                    placeholder="请输入验证码"
                    @keyup.enter.native="handleLoginClick"
                  />
                </el-col>
                <el-col :span="9" :push="1">
                  <el-button
                    :disabled="verificationTxt !=='获取验证码'"
                    @click="handleGetVerification"
                  >{{ verificationTxt }}
                  </el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>

          <el-button
            type="primary"
            style="width:100%;"
            :style="{marginBottom: activeTab === tabs[1].name ? '20px' : ''}"
            @click="handleLoginClick"
          >登录
          </el-button>

          <p
            v-show="activeTab === tabs[0].name"
            class="forgot_password"
          >
            <el-button type="text" @click="handleResetPassword">忘记密码</el-button>
          </p>

          <img style="margin-bottom: 20px" src="@/assets/images/login_line.png" alt="">
          <p class="no-account">还没账号？</p>
          <el-button
            style="width: 100%"
            type="primary"
            plain
            @click="handleGoToRegister"
          >立即注册
          </el-button>
        </div>

        <div v-if="false" class="login-form">
          <div class="loginTypeDiv">
            <span class="loginTypeNoSelected">账号登录</span>
          </div>

          <div style="min-height: 32px" />

          <div class="personalDiv loginFormDiv">
            <div class="inputField">
              <span id="personalAccountInputId" class="tiny-textbox-container" style="width: 320px; height: 36px;">
                <input type="text" class="tiny-input-text" placeholder="账号名/邮箱">
              </span>
            </div>

            <div class="inputField">
              <span id="personalPasswordInputId" class="tiny-textbox-container" style="width: 320px; height: 36px;">
                <input type="password" autocomplete="off" class="tiny-input-text" validator="true" placeholder="密码">
              </span>
              <svg-icon class="pwdShowimg icon-cloud-action-state-Invisible" icon-class="eye" />
            </div>
          </div>

          <div class="toDoDiv">
            <div class="typeSwitchDiv" ng-show="!model.isCompany">
              <span id="typeSwitchBtn">手机号登录</span>
            </div>
          </div>

          <div class="buttonAreaDiv">
            <div>
              <div id="loginBtn" class="loginBtn">
                <span id="btn_submit">登录</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { PASSWORD_LOGIN, VERIFY_LOGIN, VERIFY_CODE } from '@/api/user'
import { setToken, setUserName } from '@/utils/auth'
export default {
  data() {
    return {
      activeTab: 'password',
      tabs: [
        {
          name: 'password',
          title: '密码登录'
        },
        {
          name: 'verification',
          title: '手机动态码登录'
        }
      ],

      // 验证码登录表格
      formVerification: {
        mobile: '',
        verifyCode: ''
      },
      // 密码登录表格
      formPassword: {
        mobile: '',
        password: ''
      },

      timeVerification: 60,
      timerVerification: null,
      verificationTxt: '获取验证码'
    }
  },

  mounted() {
    // test({ name: 'xm' })
  },

  methods: {
    ...mapMutations(['SET_USER_INFO']),
    // 登录
    async handleLoginClick() {
      if (this.activeTab === this.tabs[ 1 ].name) {
        this.$refs.formVerification.validate(valid => {
          if (valid) this.loginWithVerification()
        })
      } else {
        this.$refs.formPassword.validate(valid => {
          if (valid) this.loginWithPassword()
        })
      }
    },

    // 验证码登录
    async loginWithVerification() {
      VERIFY_LOGIN(this.formVerification).then(res => {
        this.handleLoginSuccess(res.data)
      })
    },
    // 密码登录
    async loginWithPassword() {
      await PASSWORD_LOGIN(this.formPassword).then(res => {
        console.log(res)
        if (res.status === 1000) {
          this.handleLoginSuccess(res.data)
        } else {
          this.$message({ type: 'error', message: res.data ? res.data.msg : res.error, customClass: 'el-message-custom' })
        }
      })
    },

    // 登录成功处理逻辑
    handleLoginSuccess(userInfo) {
      console.log(this.$store)
      // this.SET_USER_INFO(JSON.stringify(userInfo))
      this.$store.commit('user/SET_USER_INFO', JSON.stringify(userInfo))
      // this.$store.commit('user/SET_ROLES', ['admin'])
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      setToken(userInfo.token)
      setUserName(userInfo.username)
      this.$message({
        type: 'success',
        message: '登录成功',
        customClass: 'el-message-custom'
      })
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      } else {
        this.$router.push('./home')
      }
    },

    // 获取验证码
    async handleGetVerification() {
      this.$refs.formVerification.validateField('mobile', msg => {
        if (!msg) { this.fetchVerification() }
      })
    },

    // 获取验证码接口
    async fetchVerification() {
      this.verificationInterval()
      VERIFY_CODE({ phone: this.formVerification.mobile })
        .then(() => {
          this.$message({
            type: 'success',
            message: '验证码发送成功',
            customClass: 'el-message-custom'
          })
        })
        .catch(({ msg }) => {
          this.verificationClearInterval()
          this.$message({ type: 'error', message: msg, customClass: 'el-message-custom' })
        })
    },

    verificationInterval() {
      this.timeVerification--
      this.verificationTxt = `${this.timeVerification}后可重获`
      this.timerVerification = setInterval(() => {
        this.timeVerification--
        this.verificationTxt = `${this.timeVerification}后可重获`
        if (this.timeVerification === 0) {
          this.verificationClearInterval()
        }
      }, 1000)
    },

    verificationClearInterval() {
      clearInterval(this.timerVerification)
      this.verificationTxt = '获取验证码'
      this.timeVerification = 60
    },

    // 跳转登录
    handleGoToRegister() {
      this.$router.push({ name: 'register' })
    },
    // 跳转重置密码
    handleResetPassword() {
      this.$router.push({ name: 'resetPassword' })
    }
  }
}
</script>
<style scoped>
  .content {
    width: 100%;
    height: 544px;
    position: relative;
  }

  .banner-parent {
    width: 100%;
    height: 544px;
    min-width: 1200px;
    overflow: hidden;
  }

  .banner-img {
    width: 1920px;
    height: 544px;
    background: #7084ff;
    z-index: 1;
  }

  .ban_imgbanner-img a {
    cursor: default;
  }
  .login-form{
    position: absolute;
    right: 0;
    width: 380px;
    display: inline-block;
    margin-top: 80px;
    background-color: #fff;
    color: #C1C1C1;
    font-size: 14px;
    border-color: rgba(228,228,228,1);
    border-radius: 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
  }
  .loginTypeDiv {
    color: #666;
    font-size: 14px;
    font-style: normal;
    padding: 24px 30px 10px;
    text-align: center;
}
.loginTypeNoSelected {
    display: inline-block;
    width: 100%;
    line-height: 18px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    color: #252B3A;
}
.loginFormDiv {
    padding: 0 30px;
    width: 320px;
    box-sizing: content-box;
}
.inputField {
    margin-bottom: 16px!important;
    font-size: 14px!important;
    border-bottom: 1px solid #DFE1E6;
    position: relative;
}
.inputField:last-child {
    margin-bottom: 0!important;
    font-size: 14px!important;
}
.inputField:hover {
    border-bottom: 1px solid #8A8E99;
}
.tiny-textbox-container {
    position: relative;
    display: inline-block;
    height: 26px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.tiny-input-text {
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 14px;
    background-color: #fff;
    padding: 0 8px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    vertical-align: middle;
    line-height: 20px;
    font-family: PingFangSC-Regular;
}
.pwdShowimg {
    top: 10px;
    right: 8px;
    position: absolute;
    width: 15px;
    height: 15px;
}
.toDoDiv {
    margin: 18px 38px 0;
    width: 304px;
}
.typeSwitchDiv {
    font-style: normal;
    color: #252B3A;
    max-width: 180px;
    display: inline-block;
    font-size: 12px;
}
.typeSwitchDiv>span{
  cursor: pointer;
}
.typeSwitchDiv>span:hover{
  text-decoration: underline;
  color: #F66F6A;
}

  .log_content {
    position: absolute;
    width: 1200px;
    height: 544px;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding-top: 56px;

  }

  .right_form {
    position: absolute;
    right: 0;
    width: 320px;
    padding: 28px 30px 30px;
    background: #fff;
    z-index: 2;
    box-sizing: content-box;
  }

  .right_form .right_form_tab {
    width: 100%;
    height: 34px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 22px;
  }

  .right_form .right_form_tab span {
    display: inline-block;
    font-size: 16px;
    color: #818181;
    width: 118px;
    text-align: center;
    margin: 0 9px;
    line-height: 32px;
    cursor: pointer;
  }

  .right_form .no-account {
    text-align: center;
    color: #c8c8c8;
    margin-bottom: 10px;
  }

  .right_form .forgot_password {
    line-height: 40px;
    text-align: right;
    padding: 0 2px;
  }

  .log_tab_active {
    color: #2582df !important;
    border-bottom: 2px solid #2582df;
  }
</style>
