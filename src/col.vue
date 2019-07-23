<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value)=>{
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if(!['span', 'offset'].includes(key)){
        return false
      }
    });
    return valid
  };

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
      pad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
    },
    methods: {
      createClass(obj, str = ''){
        if(!obj) {return []}
        let arr = [];
        if(obj.span){ arr.push(`col-${str}${obj.span}`) }
        if(obj.offset){ arr.push(`offset-${str}${obj.offset}`) }
        return arr
      }
    },
    computed: {
      colClass(){
        let {span, offset , pad, narrowPc, pc, widePc} = this;
        let createClass = this.createClass;
        return [
          ...createClass({span, offset}),
          ...createClass(pad, 'pad-'),
          ...createClass(narrowPc, 'norrow-pc-'),
          ...createClass(pc, 'pc-'),
          ...createClass(widePc, 'wide-pc-')
        ]
      },
      colStyle(){
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    font-size: 30px;
    width: 50%;
    /*flex-shrink: 0;*/
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


    /* 适配 */

    @media (min-width: 577px) {
      $class-prefix: col-pad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    /* end 适配*/
  }
</style>