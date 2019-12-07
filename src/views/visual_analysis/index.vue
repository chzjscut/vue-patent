<template>
  <div class="patent-analysis">
    <div class="overall-title">整体概况</div>
    <div id="overall" ref="overall" />
    <el-row type="flex" justify="space-between">
      <el-col>
        <div id="status" ref="status" />
      </el-col>
      <el-col>
        <div id="expire" ref="expire" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import eCharts from 'echarts'
import { PATENT_ANALYSIS_OVERALL, PATENT_ANALYSIS_STATUS, PATENT_ANALYSIS_EXPIRE } from '@/api/console'

export default {
  data() {
    return {
      overallData: [],
      statusData: [],
      expireData: [],
      overallInstance: null,
      statusInstance: null,
      expireInstance: null
    }
  },

  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.windowUnbindResize()
  },

  methods: {
    async init() {
      await this.graphingOverall()
      await this.graphingStatus()
      await this.graphingExpire()
      this.windowBindResize()
    },

    //  获取整体概况数据
    async fetchOverallData() {
      await PATENT_ANALYSIS_OVERALL().then(res => {
        this.overallData = res.data
      })
    },

    //  获取状态分析数据
    async fetchStatusData() {
      await PATENT_ANALYSIS_STATUS().then(res => {
        this.statusData = res.data
      })
    },

    //  获取年费到期数据
    async fetchExpireData() {
      await PATENT_ANALYSIS_EXPIRE().then(res => {
        this.expireData = res.data
      })
    },

    // 初始化整体概况表选项
    async initOverallOption() {
      await this.fetchOverallData()
      const xAxis = this.formatAxisData('year', this.overallData)
      const yAxis = this.formatAxisData('sum', this.overallData)
      return {
        title: {
          text: '专利申请趋势分析',
          left: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        toolbox: {
          right: '10%',
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
            axisLabel: {
              rotate: 50
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '专利申请专利量',
            type: 'line',
            data: yAxis
          }
        ]
      }
    },

    // 初始化专利状态表选项
    async initStatusOption() {
      await this.fetchStatusData()
      const xAxis = this.formatAxisData('stateName', this.statusData)
      const yAxis = this.formatAxisData('sum', this.statusData)
      return {
        title: {
          text: '专利状态分析',
          left: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        toolbox: {
          right: '10%',
          feature: {
            saveAsImage: {},
            magicType: {
              type: ['line', 'bar']
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
            axisLabel: {
              rotate: 50
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '专利状态量',
            type: 'bar',
            data: yAxis,
            barWidth: '20%'
          }
        ]
      }
    },

    // 初始化专利年费表选项
    async initExpireOption() {
      await this.fetchExpireData()
      const xAxis = this.formatAxisData('feeDate', this.expireData)
      const yAxis = this.formatAxisData('sum', this.expireData)
      return {
        title: {
          text: '年费到期分析',
          left: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        toolbox: {
          right: '10%',
          feature: {
            saveAsImage: {},
            magicType: {
              type: ['line', 'bar']
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
            axisLabel: {
              rotate: 50
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '专利年费到期数量',
            type: 'bar',
            data: yAxis
          }
        ]
      }
    },

    //  绘制整体概况表
    graphingOverall() {
      this.overallInstance = eCharts.init(this.$refs.overall, '',
        {
          width: `${this.$refs.overall.clientWidth}px`,
          height: '500px'
        })
      const optionPromise = this.initOverallOption()
      optionPromise.then(res => {
        this.overallInstance.setOption(res)
      })
    },

    //  绘制状态分析表
    graphingStatus() {
      this.statusInstance = eCharts.init(this.$refs.status, '',
        {
          width: `${this.$refs.status.clientWidth}px`,
          height: '500px'
        })
      const optionPromise = this.initStatusOption()
      optionPromise.then(res => {
        this.statusInstance.setOption(res)
      })
    },

    //  绘制年费到期表
    graphingExpire() {
      this.expireInstance = eCharts.init(this.$refs.expire, '',
        {
          width: `${this.$refs.expire.clientWidth}px`,
          height: '500px'
        })
      const optionPromise = this.initExpireOption()
      optionPromise.then(res => {
        this.expireInstance.setOption(res)
      })
    },

    // 格式化x，y轴数据
    formatAxisData(key, arr) {
      return arr.map(item => {
        return item[key]
      })
    },

    // window绑定页面尺寸变化事件
    windowBindResize() {
      $(window).bind('resize', this.handlePageSizeChange())
    },
    // window解绑页面尺寸变化事件
    windowUnbindResize() {
      $(window).unbind('resize', this.handlePageSizeChange())
    },

    // 处理页面尺寸变化逻辑
    handlePageSizeChange() {
      this.overallInstance.resize({
        width: `${this.$refs.overall.clientWidth}px`, height: '500px'
      })
      this.statusInstance.resize({
        width: `${this.$refs.status.clientWidth}px`, height: '500px'
      })
      this.expireInstance.resize({
        width: `${this.$refs.expire.clientWidth}px`, height: '500px'
      })
    }

  }
}
</script>
<style scoped>
  .patent-analysis {
    padding-left: 20px;
  }

  #overall {
    min-width: 1000px;
    padding-top: 10px;
  }

  .overall-title {
    color: #000;
    padding: 20px;
    padding-top: 0;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
  }

  #status, #expire {
    margin-top: 10px;
    padding-top: 10px;
    border: 1px solid #ddd;
  }

  #status {
    margin-right: 10px;
  }

  #expire {
    margin-left: 10px;
  }
</style>
