'use strict'
import Vue from 'vue'
import axios from 'axios'
import { Notification } from 'element-ui'

let config = {
    baseURL : 'http://47.104.134.248:8080' ,
    timeout : 60 * 1000 , // Timeout
    validateStatus : function (status) {
        return status >= 200 && status < 500 // default
    } ,
}

const _axios = axios.create(config)

function fetchSuccess (res) {
    console.log('res')
    console.log(res)
    console.log(res.data)
    console.log(res.data.success)
    if (res && res.data.success) {
        return new Promise.resolve({ code : res.data.code , msg : res.data.msg , data : res.data.data })
    } else {
        return Promise.reject({ code : res.data.code , msg : res.data.msg })
    }
}

// request拦截器
_axios.interceptors.request.use(config => {
    if (!config.url) {
        return Promise.reject('无效的请求地址！')
    }
    return config
} , error => {
    // Do something with request error
    Promise.reject(error)
})

// respone拦截器
_axios.interceptors.response.use(
    response => {
        return fetchSuccess(response)
    } ,
    error => {
        Notification({
            message : error.message ,
            type : 'error' ,
            duration : 5 * 1000 ,
        })
        return Promise.reject(error)
    } ,
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype , {
        axios : {
            get () {
                return _axios
            } ,
        } ,
        $axios : {
            get () {
                return _axios
            } ,
        } ,
    })
}

Vue.use(Plugin)

export default Plugin
