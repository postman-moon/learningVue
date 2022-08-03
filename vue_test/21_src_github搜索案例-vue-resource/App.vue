<template>
	<div class="container">

		<!-- 搜索区域 -->
		<Search />

		<!-- 数据展示区 -->
		<List />
	</div>
</template>

<script>
// import axios from 'axios';
import Search from './components/Search';
import List from './components/List';

export default {
	name:'App',
  components: { 
		Search,
		List,
	},
	methods: {
		
	}
}
</script>