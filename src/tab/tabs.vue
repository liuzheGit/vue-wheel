<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-tabs",
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
    created(){
      this.$emit('update:selected', '')
    }
  }
</script>

<style scoped>
  .tabs{

  }
</style>