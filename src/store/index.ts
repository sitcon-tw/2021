import Vue from 'vue';
import Vuex from 'vuex';

import { app } from './modules/app';
import { menu } from './modules/menu';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: ''
  },
  modules: {
    app,
    menu
  }
});
