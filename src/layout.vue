<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-layout",
    data(){
      return {
        layoutClass: {
          hasAside: false
        }
      }
    },
    mounted() {
      console.log(this.$children);
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'z-aside'){
          this.layoutClass.hasAside = true
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasAside{
      flex-direction: row;
    }
  }
</style>