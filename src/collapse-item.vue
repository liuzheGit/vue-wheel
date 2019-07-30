<template>
  <div class="collapse-item">
    <div class="collapse-item-title" @click="toggle" :data-name="name">{{title}}</div>
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
    inject: ['eventBus'],
    props: {
      title: {
        require: true
      },
      name: {
        type: String | Number,
        require: true
      }
    },
    methods: {
      toggle(){
        if(this.open){
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        }else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    },
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (names)=>{
        this.open = names.indexOf(this.name) >= 0;
      })
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
      background: #eee;
    }
  }
</style>