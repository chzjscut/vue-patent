import service from './request'
import { getToken, getSalt } from '@/utils/auth'
import { toParam } from '@/utils/CommonUtil'
import qs from 'qs'

const request = {
  get(options) {
    return new Promise((resolve, reject) => {
      const reqConfigs = {
        headers: {
          // 'token': getToken(),
          // 'fr-Agent': getSalt()
        }
      }
      if (options.data) {
        reqConfigs.params = options.data
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
          // 'fr-Agent': getSalt()
        }
      }
      console.log(qs.stringify(options.data))
      service.post(options.url, qs.stringify(options.data), reqConfigs).then(res => {
        resolve(res)
      }).catch(error => {
        console.log('请求异常信息' + error)
	            reject(error)
      })
    })
  }
}

export default request
