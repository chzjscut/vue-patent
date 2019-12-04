import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 密码登录
export function PASSWORD_LOGIN(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 验证码登录
export function VERIFY_LOGIN(data) {
  return request({
    url: '/user/verifyLogin',
    method: 'post',
    data
  })
}

// 注册
export function REGISTER(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

// 获取验证码
export function VERIFY_CODE(data) {
  return request({
    url: '/user/verifyCode',
    method: 'post',
    data
  })
}

// 忘记密码获取验证码
export function RESET_VERIFY_CODE(data) {
  return request({
    url: '/user/reset/verifyCode',
    method: 'post',
    data
  })
}

// 重置密码
export function RESET_PASSWORD(data) {
  return request({
    url: '/user/reset',
    method: 'post',
    data
  })
}

// 查询用户基本信息
export function BASE_USER_INFO(data) {
  return request({
    url: '/base/usrInfo',
    method: 'post',
    data
  })
}

// 更新用户基本信息
export function UPDATE_USER_INFO(data) {
  return request({
    url: '/base/usrUpdate',
    method: 'post',
    data
  })
}

