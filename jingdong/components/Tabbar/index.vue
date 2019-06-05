<template>
  <div class="tab-bar">
      <div class="tab-item" :class="{active : this.$route.path === '/home'}" @click="toPath('/home')">
        <img :src="this.$route.path === '/home' ? require('../../assets/images/home-active.svg') : require('../../assets/images/home.svg')" alt="">
        <span>首页</span>
      </div>
      <div class="tab-item" :class="{active : this.$route.path === '/goodlist'}" @click="toPath('/goodlist')">
        <img :src="this.$route.path === '/goodlist' ? require('../../assets/images/goodlist-active.svg') : require('../../assets/images/goodlist.svg')" alt="">
        <span>列表</span>
      </div>
      <div class="tab-item" :class="{active : this.$route.path === '/car'}" @click="toPath('/car')">
        <img :src="this.$route.path === '/car' ? require('../../assets/images/car-active.svg') : require('../../assets/images/car.svg')" alt="">
        <span>购物车</span>
      </div>
      <div class="tab-item" :class="{active : this.$route.path === '/user'}" @click="toPath('/user')">
        <img :src="this.$route.path === '/user' ? require('../../assets/images/user-active.svg') : require('../../assets/images/user.svg')" alt="">
        <span>用户</span>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return ({
      list: [

      ]
      })
    },
    methods: {
      toPath (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-bar {
    background: pink;
    height: 90px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    .tab-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin: 5px 0;
      }
      &.active {
        color: red;
      }
    }
  }
</style>