import service from './request'
import { getToken, getUserName } from '@/utils/auth'
import { toParam } from '@/utils/CommonUtil'
import qs from 'qs'

const request = {
  get(options) {
    return new Promise((resolve, reject) => {
      const reqConfigs = {
        headers: {
          // 'token': getToken(),
          // 'username': getUserName()
        }
      }
      if (options.data) {
        reqConfigs.params = options.data
      }
      if (options.responseType) {
        reqConfigs.responseType = options.responseType
      }
	        // let responseType = options.responseType || '';
	        // if(responseType){
	        //     reqConfigs.responseType = responseType
	        // }
      service(options.url, reqConfigs).then(res => {
        resolve(res)
      }).catch(error => {
        console.log('请求异常信息' + error)
        reject(error)
      })
	    })
  },

  post(options) {
    return new Promise((resolve, reject) => {
      const reqConfigs = {
        headers: {
          // 'token': getToken(),
          // 'username': getUserName()
        }
      }
      if (options.responseType) {
        reqConfigs.responseType = options.responseType
      }
      service.post(options.url, options.data, reqConfigs).then(res => {
        resolve(res)
      }).catch(error => {
        console.log('请求异常信息' + error)
	            reject(error)
      })
    })
  }
}

export default request
