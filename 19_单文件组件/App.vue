<template>
  <div>
    <School></School>
    <Studen></Studen>
  </div>
</template>

<script>
import School from './School.vue';
import Student from './Student.vue';

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>

</style>