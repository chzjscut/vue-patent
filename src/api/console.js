import request from '@/utils/request'

/** 通过专利号或者申请人查询(全局搜索)
 * @param params
 */
export function GLOBAL_SEARCH(data) {
  return request({
    url: '/pull/baseInfo/searchData',
    method: 'post',
    data
  })
}

// 通过专利号、申请人分页查询
export function BASE_LIST(data) {
  return request({
    url: '/pull/baseInfo/listData',
    method: 'post',
    data
  })
}

// 批量删除
export function BATCH_DELETE(data) {
  return request({
    url: '/attention/deleteData',
    method: 'post',
    data
  })
}

// 关注
export function ATTENTION_PATENT(data) {
  return request({
    url: '/attention/attentionPatent',
    method: 'post',
    data
  })
}

// 费用详情
// @zlNo 专利号
export function FEE_INFO(data) {
  return request({
    url: '/pull/baseInfo/feeInfo',
    method: 'post',
    data
  })
}

// 查询关注专利列表
export function ATTENTION_LIST(data) {
  return request({
    url: '/attention/listData',
    method: 'post',
    data
  })
}

// 专利分析整体概况数据
export function PATENT_ANALYSIS_OVERALL(data) {
  return request({
    url: '/attention/selectOverview',
    method: 'post',
    data
  })
}

// 专利分析状态分析
export function PATENT_ANALYSIS_STATUS(data) {
  return request({
    url: '/attention/selectStateAnalyze',
    method: 'post',
    data
  })
}

// 专利分析年费到期分析
export function PATENT_ANALYSIS_EXPIRE(data) {
  return request({
    url: '/attention/selectFeeExpire',
    method: 'post',
    data
  })
}
