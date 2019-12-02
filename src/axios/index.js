import Vue from 'vue'
import apiList from './interface'

const install = function () {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype , {
    $api : {
      get () {
        return apiList
      } ,
    } ,
  })
}

export default { install }
