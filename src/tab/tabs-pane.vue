<template>
  <div class="tabs-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-tabs-pane",
    data(){
      return {
        active: false
      }
    },
    props: {
      name: {
        require: true
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (data)=>{
        this.active = data === this.name;
      })
    }
  }
</script>

<style scoped>
  .tabs-pane{

  }
</style>