import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

// token缓存设置
export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}

// username缓存设置
export function getUserName() {
  return Cookies.get('username')
}

export function setUserName(username) {
  return Cookies.set('username', username)
}

export function removeUserName() {
  return Cookies.remove('username')
}
