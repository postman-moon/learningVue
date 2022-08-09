// 该文件用于创建 Vuex 中最为核心的 store

//引入Vue
import Vue from 'vue'
// 引入 Vuex
import  Vuex from 'vuex';
import countOptions from './count';
import personOptions from './person';
Vue.use(Vuex);

// 创建并暴露 store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  }
});

