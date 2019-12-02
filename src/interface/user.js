import fetch from '../axios/api'

// 密码登录
const PASSWORD_LOGIN = params => {
  return fetch({
    url : '/user/login' ,
    ...params ,
  })
}

// 验证码登录
const VERIFY_LOGIN = params => {
  return fetch({
    url : '/user/verifyLogin' ,
    ...params ,
  })
}

// 注册
const REGISTER = params => {
  return fetch({
    url : '/user/register' ,
    ...params ,
  })
}
// 获取验证码
const VERIFY_CODE = params => {
  return fetch({
    url : '/user/verifyCode' ,
    ...params ,
  })
}
// 忘记密码获取验证码
const RESET_VERIFY_CODE = params => {
  return fetch({
    url : '/user/reset/verifyCode' ,
    ...params ,
  })
}
// 重置密码
const RESET_PASSWORD = params => {
  return fetch({
    url : '/user/reset' ,
    ...params ,
  })
}
// 查询用户基本信息
const BASE_USER_INFO = params => {
  return fetch({
    url : '/base/usrInfo' ,
    ...params ,
  })
}

// 更新用户基本信息
const UPDATE_USER_INFO = params => {
  return fetch({
    url : '/base/usrUpdate' ,
    ...params ,
  })
}

export default {
  REGISTER ,
  VERIFY_CODE ,
  VERIFY_LOGIN ,
  PASSWORD_LOGIN ,
  BASE_USER_INFO ,
  RESET_PASSWORD ,
  UPDATE_USER_INFO ,
  RESET_VERIFY_CODE ,
}
