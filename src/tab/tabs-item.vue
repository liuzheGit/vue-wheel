<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "z-tabs-item",
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        require: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (data) => {
        this.active = data === this.name;
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {
    cursor: pointer;
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      background: #f00;
    }
  }
</style>