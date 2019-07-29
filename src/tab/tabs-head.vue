<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="action"></slot>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: "z-tabs-head",
    inject: ['eventBus'],
    created(){
    }
  }
</script>

<style scoped lang="scss">
  $tabs-height: 40px;
  .tabs-head{
    display: flex;
    align-items: center;
    height: $tabs-height;
    position: relative;
    > .actions{
      margin-left: auto;
    }
    > .line{
      position: absolute;
      bottom: 0;
      width: 100px;
      border-bottom: 1px solid green;
    }
  }
</style>