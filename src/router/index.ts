import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// components
import CFP from '../pages/CFP.vue';
import News from '../pages/News.vue';
import OCFP from '../pages/OCFP.vue';
import Home from '../pages/Home.vue';
import Agenda from '../pages/Agenda.vue';
import Sponsor from '../pages/Sponsor.vue';
import Team from '../pages/Team.vue';
import Traffic from '../pages/Traffic.vue';
import Venue from '../pages/Venue.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      index: 0,
      label: 'SITCON 2021',
      menuItem: true
    }
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda,
    meta: {
      index: 1,
      label: 'SITCON 2021',
      menuItem: true
    }
  },
  {
    path: '/sponsor',
    name: 'Sponsor',
    component: Sponsor,
    meta: {
      index: 4,
      label: '贊助資訊',
      menuItem: true
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      index: 5,
      label: 'SITCON團隊',
      menuItem: true
    }
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: Traffic,
    meta: {
      index: 2,
      label: '交通方式',
      menuItem: true
    }
  },
  {
    path: '/venue',
    name: 'Venue',
    component: Venue,
    meta: {
      index: 3,
      label: '會場地圖',
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
    path: '/cfp/ocfp-news',
    name: 'ocfp-news',
    component: OCFP,
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
