/* 
  该文件是整个项目的入口文件
*/

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

/* 
  关于不同版本的 Vue：
    1. Vue.js 与 vue.runtime.xxx.js 的区别：
      (1) vue.js 时完整版的Vue，包含：核心功能 + 模板解析器
      (2) vue.runtime.xxx.js 时运行版的 vue，只包含：核心功能，没有模板解析器
    
    2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，
      需要使用 render 函数接收到的 createElement 函数去指定具体内容
*/

// 创建Vue实例对象 --- vm
new Vue({
  // 将 App 组件放入容器中
  render: h => h(App),
}).$mount('#app')
