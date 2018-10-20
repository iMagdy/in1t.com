import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import pkg from '../package.json';

Vue.use(Element, { size: 'small' });

Vue.prototype.$appName = pkg.name;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
