<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <!-- <li>a: {{ a }}，b: {{ b }}</li> -->
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  // props: ['a', 'b'],
  props: ['id', 'title'],
  mounted() { 
    console.log(this.$route);
  }
}
</script>