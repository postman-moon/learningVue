<template>
  <div id="app">
    <Student name="李四" sex="男" :age="18"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student,
  },
}
</script>
