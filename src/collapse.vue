<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-collapse"
  }
</script>

<style scoped lang="scss">
  $border-color: #ddd;
  .collapse{
    border: 1px solid $border-color;
    border-radius: 4px
  }
</style>