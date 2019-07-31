<template>
  <svg class="z-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    // name: "z-icon",
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .z-icon{ width: 1em; height: 1em; }
</style>