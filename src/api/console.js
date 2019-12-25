import request from '@/utils/http'

/** 通过专利号或者申请人查询(全局搜索)
 * @param params
 */
export function GLOBAL_SEARCH(data) {
  return request.post({
    url: '/pull/baseInfo/searchData',
    data
  })
}

// 通过专利号、申请人分页查询
export function BASE_LIST(data) {
  return request.post({
    url: '/pull/baseInfo/listData',
    data
  })
}

// 批量删除
export function BATCH_DELETE(data) {
  return request.post({
    url: '/attention/deleteData',
    data
  })
}

// 关注
export function ATTENTION_PATENT(data) {
  return request.post({
    url: '/attention/attentionPatent',
    data
  })
}

// 费用详情
// @zlNo 专利号
export function FEE_INFO(data) {
  return request.post({
    url: '/feeInfo/',
    data
  })
}

// 查询关注专利列表
export function ATTENTION_LIST(data) {
  return request.post({
    url: '/attention/listData',
    data
  })
}

// 专利分析整体概况数据
export function PATENT_ANALYSIS_OVERALL(data) {
  return request.post({
    url: '/attention/selectOverview',
    data
  })
}

// 专利分析状态分析
export function PATENT_ANALYSIS_STATUS(data) {
  return request.post({
    url: '/attention/selectStateAnalyze',
    data
  })
}

// 专利分析年费到期分析
export function PATENT_ANALYSIS_EXPIRE(data) {
  return request.post({
    url: '/attention/selectFeeExpire',
    data
  })
}

// //////////////////////////////////////////////////

// 根据专利号查询专利年费相关信息
export function doSearch_feeinfo(data) {
  return request.post({
    url: '/feeinfo/',
    data
  })
}

// 根据关键字查询专利
export function doSearch_patent(data) {
  return request.post({
    url: '/search/',
    data
  })
}

// 根据zlh查询专利详情
export function doGetPatentInfo(data) {
  return request.post({
    url: '/patinfo/',
    data
  })
}

// 年费监控导出Excel
export function doExport_monitor(data) {
  return request.post({
    url: '/export/',
    data,
    responseType: 'arraybuffer'
  })
}

// 年费监控查询
export function doSearch_monitor(data) {
  return request.post({
    url: '/monitor/',
    data
  })
}
