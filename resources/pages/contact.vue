<template>
  <div class="resume page">
    <el-row type="flex" justify="space-between" align="middle" class="page-title">
      <el-col :span="20" :xs="12">
        <h1>{{ $t('contact.title') }}</h1>
      </el-col>
      <el-col :span="4" :xs="12">
        <p>
          <small>
            {{ $t('contact.introduction') }}
          </small>
        </p>
      </el-col>
    </el-row>
    <el-row>
      <p>
        <strong>{{ $t('contact.email') }}: </strong>
        <a href="mailto:i.magdy.m@gmail.com" @click="usedEmail">i.magdy.m@gmail.com</a> |
        <a href="mailto:islam@in1t.com" @click="usedEmail">islam@in1t.com</a>
      </p>
      <p>
        <strong>{{ $t('contact.github') }}: </strong>
        <a href="https://github.com/iMagdy" @click="usedGithub">https://github.com/iMagdy</a>
      </p>
      <p>
        <strong>{{ $t('contact.linkedin') }}: </strong>
        <a href="https://www.linkedin.com/in/imagdy/" @click="usedLinkedIn">https://www.linkedin.com/in/imagdy/</a>
      </p>
      <p>
        <strong>{{ $t('contact.call') }}: </strong>
        <a href="tel://+201148956422" @click="usedPhone">+20 114 895 64 22</a>
      </p>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    methods: {
      track () {
        this.$ga.page('/contact')
      },
      usedEmail() {
        this.$ga.event('contact', 'method', 'email', 10)
      },
      usedGithub() {
        this.$ga.event('contact', 'method', 'github', 10)
      },
      usedLinkedIn() {
        this.$ga.event('contact', 'method', 'linkedin', 10)
      },
      usedPhone() {
        this.$ga.event('contact', 'method', 'phone', 10)
      },
    },
    head () {
      return {
        title: `${this.$t('globals.author')} - ${this.$t('contact.title')}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-title {
    border-bottom: 1px solid #2c3e50;
  }
  .rtl {
    h1, p {
      text-align: right;
    }
  }
</style>

