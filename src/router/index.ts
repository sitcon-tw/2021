import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import CFP from '../pages/CFP.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: CFP,
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/2021',
  routes
});

export default router;
