<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person 组件的总人数：{{ personList.length }}</h3>

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
    // 借助 mapState 生成计算属性，从 state 中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject', 'personList']),

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据（数组写法）
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutation （对象方法）
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions （对象方法）
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

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