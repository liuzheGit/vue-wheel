<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "z-collapse",
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array
      }
    },
    mounted(){
      // 触发更新selected
      this.eventBus.$emit('update:selected', this.selected);

      this.eventBus.$on('update:addSelected', (name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if(this.single){
          selectedCopy = [name]
        }else {
          selectedCopy.push(name)
        }

        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })


      this.eventBus.$on('update:removeSelected', (name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1)

        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #ddd;
  .collapse{
    border: 1px solid $border-color;
    border-radius: 4px
  }
</style>