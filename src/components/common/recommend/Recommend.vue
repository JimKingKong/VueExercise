<template>
  <div class="recommend">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "recommend"
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #f2f2f2;
  }
</style>