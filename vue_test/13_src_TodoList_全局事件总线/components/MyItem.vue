<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>

      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了 props -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  // 声明接收 todo 对象
  props: ['todo'],
  methods: {
    handleCheck(id) {
      // 通知 App 组件将对应的 todo 对象的 done 值取反
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo', id);
    },
    handleDelete(id) {
      if (confirm('确认删除？')){
        // this.deleteTodo(id);
        this.$bus.$emit('deleteTodo', id);
      }
    }
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ccc;
}

li:hover button {
  display: block;
}
</style>