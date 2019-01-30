<template>
  <div class="resume page">
    <el-row v-if="!viewProperties.isMobile" type="flex" justify="space-between" align="middle" class="page-title">
      <el-col :span="20" :xs="24">
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
        <a href="mailto:i.magdy.m@gmail.com" @click="usedEmail">i.magdy.m@gmail.com</a>
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
    data() {
      return {
        viewProperties: this.$store.state.viewProperties
      }
    },
    methods: {
      usedEmail() {
        dataLayer.push({
          category: 'ContactPage', 
          action: 'click', 
          label: 'email', 
          value: 100, 
          event: 'contact_action'
        });
      },
      usedGithub() {
        dataLayer.push({
          category: 'ContactPage', 
          action: 'click', 
          label: 'github', 
          value: 100, 
          event: 'contact_action'
        });
      },
      usedLinkedIn() {
        dataLayer.push({
          category: 'ContactPage', 
          action: 'click', 
          label: 'linkedIn', 
          value: 100, 
          event: 'contact_action'
        });
      },
      usedPhone() {
        dataLayer.push({
          category: 'ContactPage', 
          action: 'click', 
          label: 'phone', 
          value: 100, 
          event: 'contact_action'
        });
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

