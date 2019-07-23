<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-col",
    data(){
      return {
        gutter: 0
      }
    },
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      colClass(){
        let span = this.span;
        let offset = this.offset;
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle(){
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    font-size: 30px;
    width: 50%;
    flex-shrink: 0;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>