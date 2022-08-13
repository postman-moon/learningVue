<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>a：{{ a }}</h2>
  <button @click="sayHello">说话（Vue3所配置的————sayHello）</button>
  <br>
  <br>
  <button @click="sayWelcome">说话（Vue2所配置的————sayWelcome）</button>
  <br>
  <br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的配置中去读取Vue2中的数据、方法</button>
</template>

<script>
// import { h } from 'vue';

export default {
  name: 'App',
  data() {
    return {
      sex: '男',
      a: 100,
    }
  },
  methods: {
    sayWelcome() {
      alert('欢迎来到尚硅谷学习');
    },
    test1() {
      console.log('data中sex：', this.sex);
      console.log('data中sayWelcome：', this.sayWelcome);
      console.log('setup中name：', this.name);
      console.log('setup中的age：', this.age);
      console.log('setup中的sayHello：', this.sayHello);
    }
  },
  setup() {
    let name = '张三';
    let age = 18;
    let a = 200;

    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }

    function test2() {
      console.log('data中sex：', this.sex);
      console.log('data中sayWelcome：', this.sayWelcome);
      console.log('setup中name：', name);
      console.log('setup中的age：', age);
      console.log('setup中的sayHello：', sayHello);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
      a,
    }

    // 返回一个函数（渲染函数）
    // return () => {
    //   return h('h1', '尚硅谷');
    // }

  }
}
</script>
