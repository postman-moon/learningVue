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

    <button @click="increment(number)">+</button>
    <button @click="decrement(number)">-</button>
    <button @click="incrementOdd(number)">当前求和为奇数再加</button>
    <button @click="incrementWait(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

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
    /* increment() {
      // this.sum  += this.number;
      this.$store.commit('JIA', this.number);
    },
    decrement() {
      // this.sum -= this.number;
      this.$store.commit('JIAN', this.number);
    }, */

    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutation （对象方法）
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutation （数组方法）
    // ...mapMutations(['JIA', 'JIAN']),

    /* incrementOdd() {
      // this.sum += this.number;
      this.$store.dispatch('jiaOdd', this.number);
    },
    incrementWait() {
      // setTimeout(() => {
        // this.sum += this.number;
      this.$store.dispatch('jiaWait', this.number);
      // }, 3000)
    } */
        // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions （对象方法）
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions （数组方法）
    // ...mapActions(['jiaOdd', 'jiaWait']),
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