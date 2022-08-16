<template>
  <div class="app">
    <h3>我是App组件</h3>
  </div>
</template>

<script>
  import { toRefs, reactive, ref, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";

  export default {
    name: "App",
    setup() {
      let car = reactive({
        name: '奔驰',
        price: '40w'
      });
      let sum = ref(0);
      let car2 = readonly(car);

      console.log('isRef(sum)', isRef(sum));
      console.log('isReactive(car)', isReactive(car));
      console.log('isReadonly(car2)', isReadonly(car2));
      console.log('isProxy(car)', isProxy(car));
      console.log('isProxy(car2)', isProxy(car2));


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