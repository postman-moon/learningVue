<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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
  mounted() {
    // console.log('Student', this.x);

    this.x.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
}
</script>

<style scoped>
  .student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>