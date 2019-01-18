<template>
  <div class="resume page">
    <el-row 
      type="flex"
      justify="space-between"
      align="middle">
      <el-col :span="4" :xs="12">
        <h1>Resumé</h1>
      </el-col>
      <el-col :span="2" :xs="12">
        <el-button
          type="primary"
          @click="downloadResume">
          <i class="el-icon-download el-icon-left"></i>
          Download
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-alert
          class="info-alert"
          title="Loading PDF resume below"
          type="info"
          description="In some cases where your browser is too old or connection speed is slow,
           the PDF preview below may fail to load. If this is the case,
           please click the download button aboves"
          show-icon />
      </el-col>
      <el-col v-loading="loading" class="resume-preview">
        <iframe src="/Islam-Magdy-Resume.pdf" @:load="loading = false" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Resume',
    data: () => ({
      loading: false
    }),
    methods: {
      downloadResume() {
        this.$ga.event('more-info', 'resume', 'resume-download', 10)
        const a = document.createElement('a')
        a.href = '/Islam-Magdy-Resume.pdf'
        a.download = 'Islam-Magdy-Resume.pdf'
        a.click()
      },
      track () {
        this.$ga.page('/resume')
      }
    },
    head () {
      return {
        title: `Islam Magdy - Resume`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    background: #fff;
    text-align: left;
    padding: 7px 30px;
    min-height: 60vh;
  }

  .info-alert {
    margin-bottom: 20px;
  }

  .resume-preview {
    width: 100%;
    height: 80vh;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
</style>
