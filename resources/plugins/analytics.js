import Vue from 'vue'
import VueAnalytics from 'vue-analytics'


export default () => {
  Vue.use(VueAnalytics, {
    id: 'UA-44383953-6',
    autoTracking: {
      screenview: true
    }
  })
}
