import Vue from 'vue'
import VueGtm from 'vue-gtm';

export default () => {
  if(!process.server) {
    Vue.use(VueGtm, {
      id: 'GTM-MPVRNVW',
      enabled: true,
      debug: process.env.NODE_ENV !== 'production'
    })
  }
}