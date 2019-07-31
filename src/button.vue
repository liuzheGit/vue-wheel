<template>
  <button class="z-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <z-icon class="icon" v-if="icon && !loading" :name="icon"></z-icon>
    <z-icon v-if="loading" class="icon loading" name="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import icon from './icon'
  export default {
    name: "z-button",
    components: {
      'z-icon': icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validate(value) {
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  @keyframes spin{
    0%{ transform: rotate(0) }
    100%{ transform: rotate(360deg) }
  }
  .loading{ animation: spin 1.5s infinite linear; }
  .z-button{
    height: $button-height; font-size: $font-size; background-color: $button-bg; border: 1px solid $border-color;
    border-radius: $border-radius; padding: 0 1em; display: inline-flex; justify-content: center;
    align-items: center; vertical-align: top;
    .icon{ order: 1; margin-right: .3em; }
    .content{ order: 2; }
    &.icon-right{
      .icon{ order: 2; margin-left: .3em; }
      .content{ order: 1; }
    }
    &:hover{ border-color: $border-color-hover; }
    &:active{ background-color: $button-active-bg; }
    &:focus{ outline: none }
  }
</style>