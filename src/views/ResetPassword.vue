<template>
  <div class = 'reset-password'>
    <div class = "main">
      <div class = "reset_title">
        <span>重置密码</span>
      </div>
      <el-form :model = "formData" ref = "formBase" :rules = "formRules" label-width = "100px"
               style = "width: 80%">
        <el-form-item label = "手机号：" prop = "phone"
                      :rules = "[{ required: true, message: '手机号为必填项', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '手机格式有误', trigger: 'blur'}]">
          <el-input v-model = "formData.phone"
                    placeholder = "请填写11位有效的手机号码"></el-input>
        </el-form-item>
        <el-form-item prop = "verifyCode"
                      label = "验证码："
                      :rules = "[{required :true , message: '验证码为必填项', trigger: 'blur' },
                          { pattern: /^\d{6}$/, message: '格式错误，6位验证码', trigger: 'blur' }]">
          <el-row>
            <el-col :span = "14">
              <el-input v-model = "formData.verifyCode"
                        placeholder = '请输入验证码'></el-input>
            </el-col>
            <el-col :span = "9" :push = "1">
              <el-button :disabled = "verificationTxt !=='获取验证码'"
                         @click = "handleGetVerification">{{verificationTxt}}
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label = "密码：" prop = "password"
                      :rules = "[{ required: true, message: '密码为必填项', trigger: 'blur' },
                        { pattern: /^[a-zA-Z0-9_\-!@#$%^&*? ]{6,12}$/, message: '密码格式有误', trigger: 'blur'}]">
          <el-input v-model = "formData.password" type = "password"
                    placeholder = "6-20位英文（区分大小写）、数字、字符的组合"></el-input>
        </el-form-item>
        <el-form-item label = "确认密码：" prop = "passwordConfirm">
          <el-input v-model = "formData.passwordConfirm" type = "password"
                    placeholder = "请再输入一遍上面的密码"></el-input>
        </el-form-item>
        <el-form-item label = "">
          <el-button @click = "handleResetPassword"
                     type = "primary" style = "width: 80%">确定
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  // noinspection JSUnusedGlobalSymbols
  export default {
    data () {
      const passwordConfirm = (rule , value , callback) => {
        if (value !== this.formData.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }
      return {
        formData : {} ,
        formRules : {
          passwordConfirm : [
            { required : true , message : '确认密码为必填项' , trigger : 'blur' } ,
            { validator : passwordConfirm , trigger : 'blur' } ,
          ] ,
        } ,
        timeVerification : 60 ,
        timerVerification : null ,
        verificationTxt : '获取验证码' ,
      }
    } ,

    mounted () {

    } ,

    methods : {
      handleResetPassword () {
        this.$refs.formBase.validate(valid => {
          if (valid) this.fetchResetPassword()
        })
      } ,

      // 重置密码接口
      fetchResetPassword () {
        this.$api.RESET_PASSWORD({ data : this.formData }).then(() => {this.resetPasswordSuccess()})
      } ,

      // 重置密码成功
      resetPasswordSuccess () {
        this.$message({
          type : 'success' ,
          customClass : 'el-message-custom' ,
          message : '密码重置成功，请重新登录' ,
        })
        setTimeout(() => {
          this.$router.push({ name : 'login' })
        } , 1500)
      } ,

      // 获取验证码
      async handleGetVerification () {
        this.$refs.formBase.validateField('phone' , msg => {
          if (!Boolean(msg))
            this.fetchVerification()
        })
      } ,

      // 获取验证码接口
      async fetchVerification () {
        this.verificationInterval()
        this.$api.RESET_VERIFY_CODE({ data : { phone : this.formData.phone } , returnError : true })
          .then(() => {
            this.$message({
              type : 'success' ,
              message : '验证码发送成功' ,
              customClass : 'el-message-custom' ,
            })
          })
          .catch(({ msg }) => {
            this.verificationClearInterval()
            this.$message({
              type : 'error' ,
              message : msg ,
              customClass : 'el-message-custom' ,
            })
          })
      } ,

      verificationInterval () {
        this.timeVerification--
        this.verificationTxt = `${this.timeVerification}后可重获`
        this.timerVerification = setInterval(() => {
          this.timeVerification--
          this.verificationTxt = `${this.timeVerification}后可重获`
          if (this.timeVerification === 0) {
            this.verificationClearInterval()
          }
        } , 1000)
      } ,

      verificationClearInterval () {
        clearInterval(this.timerVerification)
        this.verificationTxt = '获取验证码'
        this.timeVerification = 60
      } ,

    } ,
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

  .reset_title {
    width: 390px;
    height: 35px;
    /*margin-left: -45px;*/
    border-bottom: 1px solid #ddd;
    text-align: center;
    /*margin-bottom: 50px;*/
    margin: 0 auto 50px;
  }

  .reset_title span {
    display: inline-block;
    width: 67px;
    line-height: 34px;
    font-size: 16px;
    color: #2582df;
    border-bottom: 2px solid #2582df;
  }
</style>
