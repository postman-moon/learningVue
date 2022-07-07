<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁</button>
  </div>
</template>

<script>

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
  methods: {
    sendStudentName() {
      // 触发 Student 组件实例身上的 atguigu 事件
      this.$emit('atguigu', this.name)
      // this.$emit('demo')
    },
    unbind(){
      // this.$off('atguigu'); // 解绑一个自定义事件
      // this.$off('atguigu', 'demo'); // 解绑多个自定义事件
      this.$off(); // 解绑所有的自定义事件
    },
    death() {
      this.$destory(); // 销毁了当前 Student 组件的实例，销毁后所有 Student 实例的自定义事件全都不生效
    }
  }
}
</script>

<style scoped>
  .student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>