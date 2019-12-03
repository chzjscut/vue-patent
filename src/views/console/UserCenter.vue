<template>
  <div class="user-center">
    <div class="uc-title">基本信息</div>
    <div class="uc-form">
      <el-form
        ref="form"
        :model="formData"
        label-width="20%"
      >
        <el-form-item
          label="用户名："
          prop="account"
          :rules="[{ required: true, message: '用户名为必填项', trigger: 'blur' }]"
        >
          <el-input
            v-model="formData.account"
            disabled
            placeholder="3-20位，中文、字母、数字、下划线的组合，以中文或字母开头"
          />
        </el-form-item>
        <el-form-item
          label="手机号："
          prop="phone"
          :rules="[{ required: true, message: '手机号为必填项', trigger: 'blur' }]"
        >
          <el-input
            v-model="formData.phone"
            disabled
            placeholder="请填写11位有效的手机号码"
          />
        </el-form-item>
        <el-form-item
          label="QQ："
          prop="qq"
          :rules="[{ required: true,type: 'number',
                     message: '请填写真实有效的QQ，有助于商家联系到你', trigger: 'blur' }]"
        >
          <el-input
            v-model.number="formData.qq"
            placeholder="请填写真实有效QQ，有助于商家联系到你"
          />
        </el-form-item>
        <el-form-item
          label="邮箱："
          prop="email"
          :rules="[{ required: true,type: 'email',
                     message: '请填写真实有效的邮箱，有助于专利监控的通知提醒', trigger: 'blur' }]"
        >
          <el-input
            v-model="formData.email"
            placeholder="请填写真实有效的邮箱，有助于专利监控的通知提醒"
          />
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="formData.gender">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单位：">
          <el-input v-model="formData.company" placeholder="请输入公司名称" />
        </el-form-item>
        <el-form-item label="联系地址：">
          <el-input v-model="formData.address" placeholder="请输入详细地址" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="saveUserInfo">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单数据
      formData: {
        account: '',
        phone: ''
      }
    }
  },

  mounted() {
    this.getUserBaseInfo()
  },

  methods: {
    // 获取用户基本信息
    getUserBaseInfo() {
      this.$api.BASE_USER_INFO()
        .then(res => {
          this.formData = res.data
        })
    },

    saveUserInfo() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$api.UPDATE_USER_INFO({ data: this.formData })
            .then(res => {
              const userInfo = res.data
              this.formData = res.data
              this.$store.commit('SET_USER_INFO', JSON.stringify(userInfo))
              localStorage.setItem('userInfo', JSON.stringify(userInfo))
              this.$message({
                type: 'success',
                message: '保存成功',
                customClass: 'el-message-custom'
              })
            })
        }
      })
    }
  }
}
</script>
<style scoped>
  .user-center {
    padding-left: 20px;
  }

  .uc-form {
    width: 600px;
    margin: 50px auto 0;
  }

  .uc-title {
    color: #000;
    padding: 20px;
    padding-top: 0;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
  }

</style>
