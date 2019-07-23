<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-row",
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      rowStyle(){
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    border: 1px solid red;
  }
</style>