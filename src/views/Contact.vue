<template>
  <div class="resume page">
    <el-row type="flex" justify="space-between" align="middle" class="page-title">
      <h1>Get in touch</h1>
      <p>
        <small>
          Currently open for contracting or full-time remote offers
        </small>
      </p>
    </el-row>
    <el-row>
      <p>
        <strong>Email: </strong> <a href="mailto:i.magdy.m@gmail.com">i.magdy.m@gmail.com</a> | <a href="mailto:islam@in1t.com">islam@in1t.com</a>
      </p>
      <p>
        <strong>Github: </strong> <a href="https://github.com/iMagdy">https://github.com/iMagdy</a>
      </p>
      <p>
        <strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/imagdy/">https://www.linkedin.com/in/imagdy/</a>
      </p>
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
  }
};
</script>

<style lang="scss">

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