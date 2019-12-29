<template>
  <div class="register">
    <div class="main">
      <el-steps :active="activeStep" finish-status="success" style="margin-bottom: 50px">
        <el-step title="填写账户信息" />
        <el-step title="验证账户信息" />
        <el-step title="注册成功" />
      </el-steps>

      <template v-if="activeStep === 0">
        <el-form
          ref="formBase"
          :model="formBaseData"
          :rules="formBaseRules"
          label-width="100px"
          style="width: 80%"
        >
          <el-form-item
            label="用户名："
            prop="username"
            :rules="[{ required: true, message: '用户名为必填项', trigger: 'blur' },
                     {pattern: /^[a-zA-Z\u4E00-\u9FA5][a-zA-Z0-9_\u4E00-\u9FA5]{2,19}$/, message: '格式错误', trigger: 'blur'}]"
          >
            <el-input
              v-model="formBaseData.username"
              placeholder="3-20位，中文、字母、数字、下划线的组合，以中文或字母开头"
            />
          </el-form-item>
          <!-- <el-form-item
            label="邮箱："
            prop="email"
            :rules="[{ required: true, message: '邮箱为必填项', trigger: 'blur' },
                     {type: 'email', message: '邮箱格式错误', trigger: 'blur'}]"
          >
            <el-input
              v-model="formBaseData.email"
              placeholder="请输入邮箱"
            />
          </el-form-item> -->
          <el-form-item
            label="手机号："
            prop="mobile"
            :rules="[{ required: true, message: '手机号为必填项', trigger: 'blur' },
                     { pattern: /^1[34578]\d{9}$/, message: '手机格式有误', trigger: 'blur'}]"
          >
            <el-input
              v-model="formBaseData.mobile"
              placeholder="请填写11位有效的手机号码"
            />
          </el-form-item>
          <el-form-item
            label="密码："
            prop="password"
            :rules="[{ required: true, message: '密码为必填项', trigger: 'blur' },
                     { pattern: /^[a-zA-Z0-9_\-!@#$%^&*? ]{6,12}$/, message: '密码格式有误', trigger: 'blur'}]"
          >
            <el-input
              v-model="formBaseData.password"
              type="password"
              placeholder="6-20位英文（区分大小写）、数字、字符的组合"
            />
          </el-form-item>
          <el-form-item label="确认密码：" prop="passwordConfirm">
            <el-input
              v-model="formBaseData.passwordConfirm"
              type="password"
              placeholder="请再输入一遍上面的密码"
            />
          </el-form-item>
          <!-- <el-form-item
            label=""
            prop="agree"
            :rules="[{ required: true, message: '请先同意协议', trigger: 'change' }]"
          >
            <el-checkbox v-model="formBaseData.agree" name="agree" />
            <el-button type="text">我已阅读并同意条款</el-button>
          </el-form-item> -->
          <el-form-item label="">
            <el-button
              type="primary"
              style="width: 80%"
              @click="handleValidatorBaseInfo"
            >下一步
            </el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-if="activeStep === 1">
        <div class="alert alert-info">短信已发送至您手机，请输入短信中的验证码，确保您的手机号真实有效。</div>
        <el-form ref="formVerification" :model="formBaseData" label-width="100px" style="width: 80%">
          <el-form-item label="手机号：">
            <el-button type="text">{{ formBaseData.mobile }}</el-button>
          </el-form-item>
          <el-form-item
            prop="code"
            label="验证码："
            :rules="[{required :true , message: '验证码为必填项', trigger: 'blur' },
                     { pattern: /^\d{6}$/, message: '格式错误，6位验证码', trigger: 'blur' }]"
          >
            <el-row>
              <el-col :span="14">
                <el-input
                  v-model="formBaseData.code"
                  placeholder="请输入验证码"
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
          <el-form-item label="">
            <el-button
              type="primary"
              style="width: 80%"
              @click="handleRegister"
            >注册
            </el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-if="activeStep === 3">
        <div style="text-align: center">
          <p style="margin-bottom: 50px">恭喜你注册成功！</p>
          <el-button
            type="primary"
            @click="handleGoToHome"
          >{{ timeGoToHome }}后跳转到首页
          </el-button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { REGISTER, VERIFY_CODE } from '@/api/user'
export default {
  data() {
    const passwordConfirm = (rule, value, callback) => {
      if (value !== this.formBaseData.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      activeStep: 0,
      formBaseData: {
        mobile: ''
      },
      timeGoToHome: 5,
      timerGoToHome: null,
      formBaseRules: {
        passwordConfirm: [
          { required: true, message: '确认密码为必填项', trigger: 'blur' },
          { validator: passwordConfirm, trigger: 'blur' }
        ]
      },
      timeVerification: 60,
      timerVerification: null,
      verificationTxt: '获取验证码'
    }
  },

  mounted() {
    this.formBaseData.mobile = this.$route.query.phone
  },

  methods: {
    handleValidatorBaseInfo() {
      this.$refs.formBase.validate(valid => {
        if (valid) {
          /* if (!this.formBaseData.agree) {
            this.$message({
              type: 'error',
              message: '请先勾选协议',
              customClass: 'el-message-custom'
            })
            return
          } */
          this.activeStep = 1
          this.fetchVerification()
        } else {
          return false
        }
      })
    },

    handleRegister() {
      this.$refs.formVerification.validate(async valid => {
        valid && REGISTER(this.formBaseData).then(res => {
          if (res.status === '1000') {
            this.handleRegisterSuccess(res.data)
          } else {
            this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
          }
        })
      })
    },

    // 注册成功处理
    handleRegisterSuccess(userInfo) {
      console.log(userInfo)
      // this.$store.commit('SET_USER_INFO', JSON.stringify(userInfo))
      // this.SET_USER_INFO(JSON.stringify(userInfo))
      // localStorage.setItem('userInfo', JSON.stringify(userInfo))
      this.$message({
        type: 'success',
        message: '注册成功',
        customClass: 'el-message-custom'
      })
      this.activeStep = 3
      this.timerGoToHome = setInterval(() => {
        this.timeGoToHome--
        if (this.timeGoToHome === 0) {
          this.handleGoToHome()
        }
      }, 1000)
    },

    // 获取验证码
    handleGetVerification() {
      this.fetchVerification()
    },

    // 获取验证码接口
    async fetchVerification() {
      this.verificationInterval()
      VERIFY_CODE({ mobile: this.formBaseData.mobile })
        .then((res) => {
          if (res.status === '1000') {
            this.$message({
              type: 'success',
              message: '验证码发送成功',
              customClass: 'el-message-custom'
            })
          } else {
            this.verificationClearInterval()
            this.$message({ type: 'error', message: res.data.msg, customClass: 'el-message-custom' })
          }
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

    handleGoToHome() {
      clearInterval(this.timerGoToHome)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped>
  .main {
    width: 600px;
    margin: 0 auto;
    height: 500px;
    padding: 40px;
    background: #f4f4f7;
  }

  .alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .alert-info {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

</style>
