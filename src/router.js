import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/landing.vue'),
    },
    {
      path: '/highlights',
      name: 'highlights',
      component: () => import('./views/home/highlights.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('./views/home/experience.vue'),
    },
  ],
});
