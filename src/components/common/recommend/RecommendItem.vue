<template>
  <div class="recommend-item">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "recommendItem"
  }
</script>

<style scoped>
  .recommend-item{
    flex: 1;
    text-align: center;
  }

</style>