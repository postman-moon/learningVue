<template>
  <div class="app">
    <h3>我是App组件（祖），{{ name }} -- {{ price }}</h3>
    <Child />
  </div>
</template>

<script>
  import { toRefs, reactive, provide } from "vue";
  import Child from "./components/Child.vue";

  export default {
    name: "App",
    components: { Child },
    setup() {
      let car = reactive({
        name: '奔驰',
        price: '40w'
      });

      provide('car', car);

      return {
        ...toRefs(car),
      }
    }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>