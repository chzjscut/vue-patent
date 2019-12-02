import axios from 'axios'
import { Message } from 'element-ui'
import { FETCH_HEADERS , SERVER_BASE_URL } from '../ultils/const'

/**
 * @param options
 *        data        object : data send to serve
 *        returnError boolean : return error ?
 * */

export default function fetch (options = { returnError : false }) {
  return new Promise((resolve , reject) => {
    const config = {
      baseURL : SERVER_BASE_URL ,
      timeout : options.timeout | 60 * 1000 , // Timeout
      headers : FETCH_HEADERS ,
      data : options.data ,
      method : options.method || 'post' ,
      validateStatus : function (status) {
        return status >= 200 && status < 500 // default
      } ,
    }

    const instance = axios.create(config)

    instance.interceptors.request.use(
      config => {
        if (!config.url) {
          return Promise.reject('无效的请求地址！')
        }
        return config
      } ,
      error => {
        return Promise.reject(error)
      } ,
    )

    instance.interceptors.response.use(response => {
        return response
      } ,
      error => {
        return Promise.reject({ code : '' , msg : error.message })
      } ,
    )

    instance(options).then(res => {
      if (res && res.data.success) {
        resolve(res.data)
      } else {
        if (res.data.code === '50000') {
          Message({ type : 'error' , message : '登录状态失效或未登录，请先登录' , center : true , customClass : 'el-message-custom' })
          setTimeout(() => {
            location.replace('/login')
          } , 500)
        } else if (options.returnError) {
          reject({ code : res.data.code , msg : res.data.msg })
        } else {
          Message({ type : 'error' , message : res.data.msg , center : true , customClass : 'el-message-custom' })
        }
      }
    }).catch(error => {
      options.returnError
        ? reject(error)
        : Message({ type : 'error' , message : error.msg , center : true , customClass : 'el-message-custom' })
    })
  })
}
