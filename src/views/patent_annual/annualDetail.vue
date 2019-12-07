<!-- 费用详情 -->
<template>
  <div class="detail">
    <el-row type="flex" justify="center" class="title">
      <span style="color: #333333;font-size: 18px;">[&nbsp;{{ detailData. zlType }}&nbsp;]</span>
      <span style="color: #006BD4;font-size: 18px;">{{ detailData.zlNo }}</span>
      <span style="color: #006BD4;font-weight: 900;font-size: 20px;">{{ detailData.inventName }}</span>
    </el-row>
    <hr>
    <h3>应缴费信息</h3>
    <el-table
      :data="detailData.yingjiaoList"
      border
      :script="true"
      :header-row-style="{backgroundColor: '#f6f6f6'}"
    >
      <el-table-column label="费用种类" property="yingjiaofydm" show-tooltip-when-overflow />
      <el-table-column label="应缴金额" property="shijiyjje" show-tooltip-when-overflow />
      <el-table-column label="缴费截止日" property="jiaofeijzr" show-tooltip-when-overflow />
    </el-table>
    <h3>已缴费信息</h3>
    <el-table
      :data="detailData.yijiaoList"
      border
      :script="true"
      :header-row-style="{backgroundColor: '#f6f6f6'}"
    >
      <el-table-column label="费用种类" property="feiyongzldm" show-tooltip-when-overflow />
      <el-table-column label="缴费金额" property="jiaofeije" show-tooltip-when-overflow />
      <el-table-column label="缴费日期" property="jiaofeisj" show-tooltip-when-overflow />
      <el-table-column label="缴费人姓名" property="jiaofeirxm" show-tooltip-when-overflow />
    </el-table>
  </div>
</template>

<script>
import { FEE_INFO } from '@/api/console'

export default {
  data() {
    return {
      detailData: {}
    }
  },
  mounted() {
    this.fetchDetail()
  },

  methods: {
    async fetchDetail() {
      const queryZlNo = this.$route.query.zlNo || '2015305324252'
      FEE_INFO({ zlNo: queryZlNo }).then(res => {
        this.detailData = res.data
      })
    }
  }
}
</script>

<style scoped>
  .detail {
    padding: 60px 15px;
    margin: 0 auto;
    width: 1200px;
  }

  .title {
    padding-top: 40px;
  }

  .title span {
    margin: 0 15px;
  }

  hr {
    border: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
  }

  h3 {
    margin-top: 30px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
