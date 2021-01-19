import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// components
import CFP from '../pages/CFP.vue';
import News from '../pages/News.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/cfp',
    meta: {
      index: 0,
      label: 'SITCON 2021',
      menuItem: true
    }
  },
  {
    path: '/cfp',
    name: 'CFP',
    component: CFP,
    meta: {
      menuItem: false
    }
  },
  {
    path: '/cfp/news',
    name: 'news',
    component: News,
    meta: {
      menuItem: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/2021',
  routes
});

export default router;
