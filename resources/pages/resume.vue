<template>
  <div class="resume page">
    <el-row 
      type="flex"
      justify="space-between"
      align="middle">
      <el-col :span="4" :xs="12">
        <h1>{{ $t('resume.title') }}</h1>
      </el-col>
      <el-col :span="2" :xs="12">
        <el-button
          type="primary"
          @click="downloadResume">
          <i class="el-icon-download el-icon-left"></i>
          {{ $t('resume.download') }}
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-alert
          :title="$t('resume.notificationTitle')"
          :description="$t('resume.notificationDescription')"
          class="info-alert"
          type="info"
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
        title: `${this.$t('globals.author')} - ${this.$t('resume.title')}`
      }
    }
  }
</script>

<style lang="scss" scoped>

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

  .rtl {
    h1, .el-alert {
      text-align: right;
    }
  }
</style>
