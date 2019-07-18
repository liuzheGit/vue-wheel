<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted() {
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase();
        if(name !== 'button'){
          console.warn(`z-button-group组件的子元素只能是z-button, 而不能是${name}.`)
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  .z-button-group
    display: inline-flex
    .z-button
      border-radius: 0
      &:not(:first-child)
        margin-left: -1px
      &:first-child
        border-bottom-left-radius: var(--border-radius)
        border-top-left-radius: var(--border-radius)
      &:last-child
        border-bottom-right-radius: var(--border-radius)
        border-top-right-radius: var(--border-radius)
      &:hover
        position: relative
        z-index: 1
</style>