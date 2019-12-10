const userInfo = localStorage.getItem('userInfo') || '{}'
const { token = '', salt = '' } = JSON.parse(userInfo)

export const SERVER_BASE_URL = 'http://47.104.249.30:8000'
// export const SERVER_BASE_URL = 'http://47.104.134.248:8080'
// export const SERVER_BASE_URL = 'http://172.35.0.197:8080'
export const EXCEL_TEMPLATE = `${SERVER_BASE_URL}/model/patentModel.xlsx`
export const UPLOAD_ACTION = `${SERVER_BASE_URL}/upload/uploadExport`
// export const FETCH_HEADERS = { token, 'fr-Agent': salt }
