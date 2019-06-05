<template>
  <div>
    <Item :msg="msg" :list="list"/>
  </div>
</template>

<script>
  import Item from '../../components/item/'

  export default {
    name: "index",
    components: {
      Item
    },
    data () {
      return ({
        msg: '主页',
        list: '列表'
      })
    }
  }
</script>

<style scoped>

</style>