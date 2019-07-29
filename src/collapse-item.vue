<template>
  <div class="collapse-item">
    <div class="collapse-item-title" @click="open = !open">{{title}}</div>
    <div class="collapse-item-content" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "z-collapse-item",
    data(){
      return {
        open: false
      }
    },
    props: {
      title: {
        require: true
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #ddd;
  .collapse-item{
    border-bottom: 1px solid $border-color;
    .collapse-item-title{
      border-bottom: 1px solid $border-color;
      padding: 0 8px;
      cursor: pointer;
    }
    .collapse-item-content{
      padding: 0 8px;
    }
  }
</style>