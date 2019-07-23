<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-toast"
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    font-size: $font-size; min-height: $toast-min-height; display: flex; line-height: 1.8;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
  }
</style>