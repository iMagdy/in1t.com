<template>
  <div class="resume page">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="4">
        <h1>Resumé</h1>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" v-on:click="downloadResume">
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
          description="In some cases where your browser is too old or connection speed is slow, the PDF preview below may fail to load. If this is the case, please click the download button aboves"
          show-icon>
        </el-alert>
      </el-col>
      <el-col v-loading="loading" class="resume-preview">
        <iframe v-on:load="loading = false" src="/Islam-Magdy-Resume.pdf" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    downloadResume: (e) => {
      let a = document.createElement('a')
      a.href = '/Islam-Magdy-Resume.pdf';
      a.download = 'Islam-Magdy-Resume.pdf';
      a.click()
    }
  },
  data: () => ({
    loading: true
  })
};
</script>

<style lang="scss">

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