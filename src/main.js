import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import $ from 'jquery'
import store from './store'
import api from './axios/index'

Vue.use(api)

window.$ = window.jQuery = window.jquery = $
Vue.prototype.$ = Vue.prototype.jQuery = Vue.prototype.jquery = $
Vue.config.productionTip = false

new Vue({
  router ,
  store ,
  render : h => h(App) ,
}).$mount('#app')
