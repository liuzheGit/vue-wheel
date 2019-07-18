<template>
  <button class="z-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "z-button",
    props: {
      icon: {},
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

<style scoped lang="sass">
  .z-button
    height: var(--button-height)
    font-size: var(--font-size)
    background-color: var(--button-bg)
    border: 1px solid var(--border-color)
    border-radius: var(--border-radius)
    padding: 0 1em
    display: inline-flex
    justify-content: center
    align-items: center
    vertical-align: top

    .icon
      order: 1
      margin-right: .3em

    .content
      order: 2

    &.icon-right
      .icon
        order: 2
        margin-left: .3em

      .content
        order: 1


    &:hover
      border-color: var(--border-color-hover)

    &:active
      background-color: var(--button-active-bg)

    &:focus
      outline: none
</style>