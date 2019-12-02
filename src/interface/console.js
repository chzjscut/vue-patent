import fetch from '../axios/api'

/** 通过专利号或者申请人查询(全局搜索)
 * @param params
 */
const GLOBAL_SEARCH = params => {
  return fetch({
    url : '/pull/baseInfo/searchData' ,
    ...params ,
  })
}

// 通过专利号、申请人分页查询
const BASE_LIST = params => {
  return fetch({
    url : '/pull/baseInfo/listData' ,
    ...params ,
  })
}

// 批量删除
const BATCH_DELETE = params => {
  return fetch({
    url : '/attention/deleteData' ,
    ...params ,
  })
}

// 关注
const ATTENTION_PATENT = params => {
  return fetch({
    url : '/attention/attentionPatent' ,
    ...params ,
  })
}
// 费用详情
// @zlNo 专利号
const FEE_INFO = params => {
  return fetch({
    url : '/pull/baseInfo/feeInfo' ,
    ...params ,
  })
}

// 查询关注专利列表
const ATTENTION_LIST = params => {
  return fetch({
    url : '/attention/listData' ,
    ...params ,
  })
}

// 专利分析整体概况数据
const PATENT_ANALYSIS_OVERALL = params => {
  return fetch({
    url : '/attention/selectOverview' ,
    ...params ,
  })
}

// 专利分析状态分析
const PATENT_ANALYSIS_STATUS = params => {
  return fetch({
    url : '/attention/selectStateAnalyze' ,
    ...params ,
  })
}

// 专利分析年费到期分析
const PATENT_ANALYSIS_EXPIRE = params => {
  return fetch({
    url : '/attention/selectFeeExpire' ,
    ...params ,
  })
}

export default {
  GLOBAL_SEARCH ,
  ATTENTION_LIST ,
  ATTENTION_PATENT ,
  BASE_LIST ,
  BATCH_DELETE ,
  FEE_INFO ,
  PATENT_ANALYSIS_OVERALL ,
  PATENT_ANALYSIS_STATUS ,
  PATENT_ANALYSIS_EXPIRE ,
}
