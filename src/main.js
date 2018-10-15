import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Element, { size: 'small' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
