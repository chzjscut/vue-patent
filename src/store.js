import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    userInfo : null ,
  } ,
  mutations : {
    SET_USER_INFO : (state , data) => {
      state.userInfo = data
    } ,
    CLEAR_USER_INFO : state => {
      state.userInfo = null
    } ,
  } ,
  actions : {} ,
})
