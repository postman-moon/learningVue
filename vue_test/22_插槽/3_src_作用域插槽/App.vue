<template>
	<div class="container">

		<Category>
			<template scope="atguigu">
				<ul>
					<li v-for="(item, index) in atguigu.games" :key="index">{{ item }}</li>
				</ul>
			</template>
		</Category>

		<Category>
			<template slot-scope="{ games }">
				<ol>
					<li v-for="(item, index) in games" :key="index">{{ item }}</li>
				</ol>
			</template>
		</Category>

		<Category>
			<template scope="atguigu">
				<h4 v-for="(item, index) in atguigu.games" :key="index">{{ item }}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
import Category from './components/Category';

export default {
	name:'App',
  components: { 
		Category,
	},

}
</script>

<style>
	.container,
	.footer {
		display: flex;
		justify-content: space-around;
	}

	img, video {
		width: 200px;
	}

</style>