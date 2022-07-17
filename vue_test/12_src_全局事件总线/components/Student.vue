<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName ">把学生名给School组件</button>
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

    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', 666);
    }
  },
  beforeDestroy() {
    this.$bus.$off('hello');
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