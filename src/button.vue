<template>
  <button class="z-button">hi</button>
</template>

<script>
  export default {
    name: "button"
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
    .&:hover
      border-color: var(--border-color-hover)
    .&:active
      background-color: var(--button-active-bg)
    .&:focus
      outline: none
</style>