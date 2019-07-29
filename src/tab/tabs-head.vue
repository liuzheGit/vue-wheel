<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="action"></slot>
    </div>
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
    border: 1px solid red;
    > .actions{
      margin-left: auto;
    }
  }
</style>