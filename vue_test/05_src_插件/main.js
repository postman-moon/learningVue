// 引入 Vue
import Vue from 'vue';
// 引入 App
import App  from './App.vue';
// 引入插件
import plugins from './plugins';

// 关闭 Vue 的生产提示
Vue.config.productionTip =  false;

// 应用（使用）插件
Vue.use(plugins);

// 创建 Vue 实例
new Vue({
  el: '#app',
  render: h => h(App)
})