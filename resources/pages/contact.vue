<template>
  <div class="resume page">
    <el-row type="flex" justify="space-between" align="middle" class="page-title">
      <el-col :span="20" :xs="12">
        <h1>Get in touch</h1>
      </el-col>
      <el-col :span="4" :xs="12">
        <p>
          <small>
            Currently open for contracting or full-time remote offers
          </small>
        </p>
      </el-col>
    </el-row>
    <el-row>
      <p>
        <strong>Email: </strong>
        <a href="mailto:i.magdy.m@gmail.com" @click="usedEmail">i.magdy.m@gmail.com</a> |
        <a href="mailto:islam@in1t.com" @click="usedEmail">islam@in1t.com</a>
      </p>
      <p>
        <strong>Github: </strong>
        <a href="https://github.com/iMagdy" @click="usedGithub">https://github.com/iMagdy</a>
      </p>
      <p>
        <strong>LinkedIn: </strong>
        <a href="https://www.linkedin.com/in/imagdy/" @click="usedLinkedIn">https://www.linkedin.com/in/imagdy/</a>
      </p>
      <p>
        <strong>Call: </strong>
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

  .page-title {
    border-bottom: 1px solid #2c3e50;
  }
</style>

