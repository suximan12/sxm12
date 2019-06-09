<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->

    <!-- <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </p> -->
    <Nav></Nav>    
    <router-view class="router"></router-view>
    <!-- <Home/> -->
  </div>
</template>

<script>
import "normalize.css"
import HelloWorld from "./components/HelloWorld";
import Home from "./views/Home.vue";
import Nav from "./views/Nav.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    Home,
    Nav
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.router{
  height: calc(100vh - 51px);
  }
</style>
