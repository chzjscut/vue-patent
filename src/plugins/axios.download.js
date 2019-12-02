import axios from 'axios'
import { Message } from 'element-ui'
import { SERVER_BASE_URL } from '../ultils/const'

export function download (url , data , fileName) {
  let userInfo = localStorage.getItem('userInfo') || '{}'
  const { token = '' , salt = '' } = JSON.parse(userInfo)

  const config = {
    baseURL : SERVER_BASE_URL ,
    timeout : 60 * 1000 , // 请求超时时间
    headers : {
      token ,
      'fr-Agent' : salt ,
    } ,
  }

  const service = axios.create(config)

  service({
    method : 'get' , url ,
    params : data ,
    responseType : 'arraybuffer' ,
  }).then((response) => {
    if (response.status === 200 || response.status === 304) {
      const arrayBuffer = response.data
      const blob = new Blob([ arrayBuffer ] , {
        type : '.xls,application/vnd.ms-excel' ,
      })
      downFile(blob , fileName || '未命名')
    } else {
      Message({ type : 'error' , message : '导出异常' })
    }
    return Promise.resolve()
  }).catch((error) => {
    if (error === 'intercept') {
      Message({
        type : 'error' , message : '请检查浏览器是否拦截了下载窗口' ,
      })
    }
    return Promise.reject({ code : '' , msg : error.message })
  })
}

function downFile (blob , fileName) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob , fileName)
  } else {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
    window.URL.revokeObjectURL(link.href)
  }
}
