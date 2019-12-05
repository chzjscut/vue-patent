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

// salt缓存设置
export function getSalt() {
  return Cookies.get('salt')
}

export function setSalt(salt) {
  return Cookies.set('salt', salt)
}

export function removeSalt() {
  return Cookies.remove(salt)
}
