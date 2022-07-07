// 引入 Vue
import Vue from 'vue';
// 引入 App
import App  from './App.vue';

// 关闭 Vue 的生产提示
Vue.config.productionTip =  false;

// 创建 Vue 实例
new Vue({
  el: '#app',
  render: h => h(App),
  // mounted() {
  //   setTimeout(() => {
  //     this.$destroy()
  //   }, 3000);
  // },
})