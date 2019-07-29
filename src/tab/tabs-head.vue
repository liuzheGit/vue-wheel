<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="action"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
  export default {
    name: "z-tabs-head",
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected', (data,vm)=>{
        let {width, left } = vm.$el.getBoundingClientRect();
        let lineParent = this.$refs.line.parentNode.getBoundingClientRect();
        let offsetWidth = lineParent.left;
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left - offsetWidth}px`;
      })
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
      border-bottom: 1px solid blue;
      transition: all 350ms;
    }
  }
</style>