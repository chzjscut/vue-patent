(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a109c3f"],{7054:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("el-row",{staticClass:"title",attrs:{type:"flex",justify:"center"}},[a("span",{staticStyle:{color:"#333333","font-size":"18px"}},[t._v("[ "+t._s(t.detailData.zlType)+" ]")]),t._v(" "),a("span",{staticStyle:{color:"#006BD4","font-size":"18px"}},[t._v(t._s(t.detailData.zlNo))]),t._v(" "),a("span",{staticStyle:{color:"#006BD4","font-weight":"900","font-size":"20px"}},[t._v(t._s(t.detailData.inventName))])]),t._v(" "),a("hr"),t._v(" "),a("h3",[t._v("应缴费信息")]),t._v(" "),a("el-table",{attrs:{data:t.detailData.yingjiaoList,border:"",script:!0,"header-row-style":{backgroundColor:"#f6f6f6"}}},[a("el-table-column",{attrs:{label:"费用种类",property:"yingjiaofydm","show-tooltip-when-overflow":""}}),t._v(" "),a("el-table-column",{attrs:{label:"应缴金额",property:"shijiyjje","show-tooltip-when-overflow":""}}),t._v(" "),a("el-table-column",{attrs:{label:"缴费截止日",property:"jiaofeijzr","show-tooltip-when-overflow":""}})],1),t._v(" "),a("h3",[t._v("已缴费信息")]),t._v(" "),a("el-table",{attrs:{data:t.detailData.yijiaoList,border:"",script:!0,"header-row-style":{backgroundColor:"#f6f6f6"}}},[a("el-table-column",{attrs:{label:"费用种类",property:"feiyongzldm","show-tooltip-when-overflow":""}}),t._v(" "),a("el-table-column",{attrs:{label:"缴费金额",property:"jiaofeije","show-tooltip-when-overflow":""}}),t._v(" "),a("el-table-column",{attrs:{label:"缴费日期",property:"jiaofeisj","show-tooltip-when-overflow":""}}),t._v(" "),a("el-table-column",{attrs:{label:"缴费人姓名",property:"jiaofeirxm","show-tooltip-when-overflow":""}})],1)],1)},l=[],r=(a("96cf"),a("3b8d")),i={data:function(){return{detailData:{}}},mounted:function(){this.fetchDetail()},methods:{fetchDetail:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.$route.query.zlNo,this.$api.FEE_INFO({data:{zlNo:e}}).then((function(t){a.detailData=t.data}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},n=i,s=(a("eb0c"),a("2877")),c=Object(s["a"])(n,o,l,!1,null,"b4e4f042",null);e["default"]=c.exports},eb0c:function(t,e,a){"use strict";var o=a("f12e"),l=a.n(o);l.a},f12e:function(t,e,a){}}]);