<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "z-tabs",
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        validator(value){
          return ['vertical', 'horizontal'].indexOf(value) >= 0
        }
      }
    },
    mounted(){
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'z-tabs-head'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'z-tabs-item' && childVm.name === this.selected){
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      });
    }
  }
</script>

<style scoped>
  .tabs{

  }
</style>