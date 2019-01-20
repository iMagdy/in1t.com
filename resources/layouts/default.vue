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
          </el-col>

        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import SideNavigation from '~/components/SideNavigation.vue'

export default {
  name: 'DefaultLayout',
  head () {
    return {
      title: `${this.$t('globals.author')} - ${this.$t('globals.title')}`,
      bodyAttrs: {
        class: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
    }
  },
  components: {
    SideNavigation
  }
}
</script>
