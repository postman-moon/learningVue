<template>
  <div class="category">
    <h3>{{ title }}分类</h3>

    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>

  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
		return {
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
		}
	}
}
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
</style>