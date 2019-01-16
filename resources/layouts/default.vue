<template>
  <div>
    <div id="app">
      <el-container>
        <el-row>
          <el-col
            :xs="24"
            :span="4"
          >
            <SideNavigation />
          </el-col>

          <el-col
            :xs="24"
            :span="20">
            
            <el-main>
              <nuxt/>
            </el-main>
            
            <el-footer>
              <Footer />
            </el-footer>

          </el-col>

        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import SideNavigation from '~/components/SideNavigation.vue'

export default {
  name: 'DefaultLayout',
  head () {
    return {
      title: `Islam Magdy - Senior Full Stack Engineer`
    }
  },
  components: {
    Footer,
    SideNavigation
  }
}
</script>
