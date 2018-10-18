<template>
  <div id="app">
    <el-container>
      <el-row>
        <el-col
          :span="4"
          class="hidden-sm-and-down"
        >
          <SideNavigation />
        </el-col>
        <el-col
          :xs="24"
          :span="20">
          <el-main>
            <router-view />
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import SideNavigation from '@/components/Component.SideNavigation.vue';
import Footer from '@/components/Component.Footer.vue';
import '@/styles/View.App.scss';

export default {
  name: 'App',
  components: {
    SideNavigation,
    Footer,
  },
};
</script>

