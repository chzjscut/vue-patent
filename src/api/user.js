import request from '@/utils/http'

export function login(data) {
  return request.post({
    url: '/user/login',
    data
  })
}

export function getInfo(token) {
  return request.post({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request.post({
    url: '/user/logout',
    method: 'post'
  })
}

// 密码登录
export function PASSWORD_LOGIN(data) {
  return request.post({
    url: '/login/',
    data
  })
}

// 验证码登录
export function VERIFY_LOGIN(data) {
  return request.post({
    url: '/user/verifyLogin',
    data
  })
}

// 注册
export function REGISTER(data) {
  return request.post({
    url: '/register/',
    data
  })
}

// 获取验证码
export function VERIFY_CODE(data) {
  return request.post({
    url: '/sendcode/',
    data
  })
}

// 忘记密码获取验证码
export function RESET_VERIFY_CODE(data) {
  return request.post({
    url: '/user/reset/verifyCode',
    data
  })
}

// 重置密码
export function RESET_PASSWORD(data) {
  return request.post({
    url: '/user/reset',
    data
  })
}

// 查询用户基本信息
export function BASE_USER_INFO(data) {
  return request.post({
    url: '/base/usrInfo',
    data
  })
}

// 更新用户基本信息
export function UPDATE_USER_INFO(data) {
  return request.post({
    url: '/base/usrUpdate',
    data
  })
}
