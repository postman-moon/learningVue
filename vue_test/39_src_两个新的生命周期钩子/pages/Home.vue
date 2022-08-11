<template>
  <div>
      <h2>我是Home的内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>

          </li>
        </ul>
        <!-- 缓存多个路由组件 -->
        <!-- <keep-alive :include="['News', 'Message']"> -->

        <!-- 缓存一个路由组件 -->
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
      </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了');
  }, 
  mounted() {
    console.log('Home组件挂载完毕了', this);
  },
  */
}
</script>
