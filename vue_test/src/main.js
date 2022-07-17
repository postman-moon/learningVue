// 引入 Vue
import Vue from 'vue';
// 引入 App
import App  from './App.vue';

// 关闭 Vue 的生产提示
Vue.config.productionTip =  false;

// Vue.prototype.x = { a:1, b:2 }

const Demo = Vue.extend();
const d = new Demo();
Vue.prototype.x = d;


// 创建 Vue 实例
new Vue({
  el: '#app',
  render: h => h(App),
})