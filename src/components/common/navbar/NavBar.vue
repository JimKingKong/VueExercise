<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .navbar {
    height: 44px;
    background-color: #f00;
    display: flex;
    text-align: center;
    line-height: 44px;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>