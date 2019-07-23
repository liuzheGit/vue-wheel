<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-row",
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value){
          return ['left','center','right'].includes(value)
        }
      }
    },
    computed: {
      rowStyle(){
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
      },
      rowClass(){
        let {align} = this;
        return align && `align-${align}`
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>