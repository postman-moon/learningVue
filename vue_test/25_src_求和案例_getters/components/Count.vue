<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>当前求和放大10倍为：{{ $store.getters.bigSum }}</h1>

    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
		return {
      number: 1, // 用户选择的数字
		}
	},
  methods: {
    increment() {
      // this.sum  += this.number;
      this.$store.commit('JIA', this.number);
    },
    decrement() {
      // this.sum -= this.number;
      this.$store.commit('JIAN', this.number);
    },
    incrementOdd() {
      // this.sum += this.number;
      this.$store.dispatch('jiaOdd', this.number);
    },
    incrementWait() {
      // setTimeout(() => {
        // this.sum += this.number;
      this.$store.dispatch('jiaWait', this.number);
      // }, 3000)
    }
  },
  mounted() {
		console.log('Count', this);
	}
}
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>