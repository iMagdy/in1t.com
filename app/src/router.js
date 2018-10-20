import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/View.Home.vue';
import Resume from '@/views/View.Resume.vue';
import Contact from '@/views/View.Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
