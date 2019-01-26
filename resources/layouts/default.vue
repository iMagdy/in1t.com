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
    <no-ssr>
      <cookie-law>
        <div slot="message">
          We're using cookies to ensure you're getting the best possible experience. <a href="/privacy">Learn more</a>
        </div>
      </cookie-law>
    </no-ssr>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
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
    CookieLaw,
    SideNavigation
  }
}
</script>