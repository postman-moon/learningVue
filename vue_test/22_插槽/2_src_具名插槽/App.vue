<template>
	<div class="container">
		<Category title="美食" :listData="foods">
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<div class="footer" slot="footer">
				<a href="http://www.baidu.com">更多美食</a>
			</div>
		</Category>

		<Category title="游戏" :listData="games">
			<ul slot="center">
				<li v-for="(item, index) in games" :key="index">{{ item }}</li>
			</ul>
			
			<div class="footer" slot="footer">
				<a href="http://www.baidu.com">单机游戏</a>
				<a href="http://www.baidu.com">网络游戏</a>
			</div>
		</Category>

		<Category title="电影" :listDat="games">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>

			<template v-slot:footer>
				<div class="footer">
					<a href="http://www.baidu.com">经典</a>
					<a href="http://www.baidu.com">热门</a>
					<a href="http://www.baidu.com">推荐</a>
				</div>
				<h4 class="footer">欢迎前来观影</h4>
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
	data() {
		return {
			foods: ['火锅', '烧烤', '小龙虾', '牛排'],
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
			films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
		}
	}
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