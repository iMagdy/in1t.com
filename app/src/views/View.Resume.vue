<template>
  <div class="resume page">
    <el-row 
      type="flex"
      justify="space-between"
      align="middle">
      <el-col :span="4">
        <h1>Resumé</h1>
      </el-col>
      <el-col :span="2">
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
        <iframe v-on:load="loading = false" src="/Islam-Magdy-Resume.pdf" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '@/styles/View.Resume.scss';

  export default {
    name: 'home',
    methods: {
      downloadResume: () => {
        const a = document.createElement('a');
        a.href = '/Islam-Magdy-Resume.pdf';
        a.download = 'Islam-Magdy-Resume.pdf';
        a.click();
      },
    },
    data: () => ({
      loading: true,
    }),
  };
</script>
