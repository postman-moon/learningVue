// 该文件用于创建 Vuex 中最为核心的 store

//引入Vue
import Vue from 'vue'
// 引入 Vuex
import  Vuex from 'vuex';
Vue.use(Vuex);

// 准备 actions ———— 用于响应组件中的动作
const actions = {
  jia(context, value) {
    console.log('actions 中的jia被调用了', context, value);
    context.commit('JIA', value);
  },
  jian(context, value) {
    console.log('actions 中的jian被调用了', context, value);
    context.commit('JIAN', value);
  },
  jiaOdd(context, value) {
    console.log('actions 中的jiaOdd被调用了', context, value);
    if (context.state.sum % 2) {
      context.commit('JIA', value);
    }
  },
  jiaWait(context, value) {
    console.log('actions 中的jiaWait被调用了', context, value);
    setTimeout(() => {
      context.commit('JIA', value);
    }, 300);
  }
};
// 准备 mutation ———— 用于操作数据（state）
const mutations = {
  JIA(state, value) {
    console.log('mutations 中的JIA被调用了', state, value);
    state.sum += value;
  },
  JIAN(state, value) {
    console.log('mutations 中的JIA被调用了', state, value);
    state.sum -= value;
  }
};
// 准备 state ———— 用于存储数据
const state = {
  sum: 0, // 当前的和
};

// 准备 getter ———— 用于将 state 中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
}

// 创建并暴露 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});

