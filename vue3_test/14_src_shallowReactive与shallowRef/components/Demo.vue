<template>
  <h4>当前的x.y值是：{{ x.y }}</h4>
  <button @click="x.y++">点我+1</button>
  <button @click="x={ y: 888 }">点我替换</button>
  <hr>
  <h2>{{ person }}</h2>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age ++">增加年龄</button>
  <button @click="person.job.j1.salary ++">涨薪</button>
</template>

<script>
import { 
  reactive, 
  // shallowReactive, 
  toRefs, 
  // ref,
  shallowRef,
} from 'vue';

export default {
  name: 'Demo',
  setup() {
    // let person = shallowReactive({   // 只考虑第一层数据的响应式
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    });

    // shallowRef 只处理基本数据类型的响应式，不进行对象的响应式处理
    let x = shallowRef({
      y: 0
    });


    // 返回一个对象（常用）
    return {
      x,
      person,
      ...toRefs(person),
    }
  }
}
</script>
