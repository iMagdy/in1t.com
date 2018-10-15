<template>
  <div id="app">
    <el-container>
      <el-row>
        <el-col :xs="4" :span="4" class="hidden-sm-and-down">
          <SideNavigation />
        </el-col>
        <el-col :xs="24" :span="20">
          <!-- <el-header>
            <h1>
              Islam Magdy <br />
              <small>Senior Full Stack Developer</small>
            </h1>
          </el-header> -->
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>
            2018-present &copy; - <a href="https://github/iMagdy">open source</a>
          </el-footer>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue';
export default {
  name: 'App',
  components: {
    SideNavigation,
  },
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

$--color-primary: #1F5DD3;

/* icon font path, required */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";
@import "~element-ui/packages/theme-chalk/src/display";

body {
  margin: 0;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // font-family: 'Source Sans Pro', sans-serif;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F0F0F7;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
