<template>
  <div class="resume page">
    <el-row type="flex" justify="space-between" align="middle" class="page-title">
      <el-col :span="20" :xs="12">
        <h1>Privacy Policy</h1>
      </el-col>
    </el-row>
    <el-row>
      
      <h3>Introduction</h3>
      <p>
        Your privacy is my first priority. This website does not require you to login or signup for a new account, 
        hence, we store no personal information about you.
      </p>

      <h3>Cookies</h3>
      <p>
        We're using cookies to store some information that has nothing to do with your personal indentity, we basically 
        don't save any names, passwords, emails,.. etc in our cookies.
      </p>

      <p>
        Other services utilized in this website can save extra cookies, in order for them to work 
        properly, for list of services, please see below.
      </p>
      
      <h3>Services used in my website that may store extra cookies</h3>
      <p>
        Other services may store extra cookies in order to work properly are listed below, although they all 
        comply to GDPR, you can still view their privacy policy for more information.
      </p>
      <ul>
        <li>
          <a rel="noopener" target="_blank" href="http://analytics.google.com">Google Analytics</a>
        </li>
        <li>
          <a rel="noopener" target="_blank" href="https://tagmanager.google.com">Google Tag Manager</a>
        </li>
        <li>
          <a rel="noopener" target="_blank" href="https://optimize.google.com">Google Optimize</a>
        </li>
        <li>
          <a rel="noopener" target="_blank" href="https://www.facebook.com/business/help/742478679120153">Facebook Pixel</a>
        </li>
        <li>
          <a rel="noopener" target="_blank" href="https://www.hotjar.com/">Hot Jar</a>
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'PrivacyPolicy',
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

