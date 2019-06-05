<template>
  <div id="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from './components/Tabbar'

  export default {
    components: {
      TabBar
    }
  }
</script>

<style>
</style>
