<template>
  <div>{{list}}</div>
</template>

<script>
  export default {
    name: "index",
    props: {
      msg: {
        type: String
      },
      list: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>