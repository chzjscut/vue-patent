<template>
  <div class="pdf-container">
    <!-- <el-select v-model="currentPage" placeholder="请选择">
      <el-option
        v-for="page in pages"
        :key="page"
        :label="page"
        :value="page"
        @change="currentPage=page">
      </el-option>
    </el-select> -->
    <div v-for="num in numPages" :key="num" style="height: 100%;">
      <pdf :src="src" :page="num" style="height: 100%;display: block;" class="pdf-box" />
    </div>
    <!-- <pdf :src="pdfUrl" class="pdf-box"></pdf> -->
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'VuePdf',
  components: { pdf },
  props: ['url'],
  data() {
    return {
      currentPage: 1,
      src: '',
      numPages: 0,
      // num: 1,
      pages: [1, 2, 3]
      // pdfUrl: 'http://120.26.72.249/201810066395.3.pdf'
    }
  },
  mounted() {
    var that = this
    console.log(this.url)
    this.src = pdf.createLoadingTask({
      url: this.url
    })
    this.src.then(pdf => {
      that.numPages = pdf.numPages
      console.log(that.numPages)
    })
  }
}
</script>

<style>
  .pdf-container{
    height: 600px;
    overflow-y: auto;
  }
  .pdf-box{
    display: block;
  }
  canvas{
    width: 100%;
    height: 100%;
  }
</style>
