<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  /* beforeDestroy() {
    console.log('About组件即将被销毁了');
  }, 
  mounted() {
    console.log('About组件挂载完毕了', this);
  },
  */
  mounted() {
    console.log('About组件', this.$route);
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter (to, from, next) {
    console.log('App---beforeRouterEnter');
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'atguigu') {
        next();
      } else {
        alert('学校名不对，无权限查看！');
      }
    } else {
      next();
    }
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    console.log('App--beforeRouterLeave', to, from);
    next();
  }
}
</script>