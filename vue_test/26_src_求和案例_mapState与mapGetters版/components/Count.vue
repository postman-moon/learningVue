<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>

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
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Count',
  data() {
		return {
      number: 1, // 用户选择的数字
		}
	},
  computed: {
    // 靠程序员自己亲自去写计算属性
    /* he() {
      return this.$store.state.sum;
    },
    xuexiao() {
      return this.$store.state.school;
    },
    xueke() {
      return this.$store.state.subject;
    }, */

    // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法）
    // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),

    // 借助 mapState 生成计算属性，从 state 中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    /* bigSum() {
      return this.$store.getters.bigSum;
    } */
    // 借助 mapGetters 生成计算属性，从 getters 中读取数据（对象写法）
    // ...mapGetters({ bigSum: 'bigSum' }),

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据（数组写法）
    ...mapGetters(['bigSum']),
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

    const x = mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'});
    console.log(x);
	}
}
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>