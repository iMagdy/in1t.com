import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import i18n from './i18n';
import device from './helpers/user-agent';

Vue.config.productionTip = false;

Vue.prototype.$isMobile = device.mobile();
Vue.prototype.$isTablet = device.tablet();
Vue.prototype.$device = device;
Vue.prototype.$enableExperimental = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
