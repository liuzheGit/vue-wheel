<template>
  <div class="tabs-item" @click="changeItem" :class="classes">
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
      },
      disabled: {
        type: Boolean
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
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
      changeItem() {
        if(this.disabled){return }
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style scoped lang="scss">
  $active-color: blue;
  $disabled-text-color: gray;
  .tabs-item {
    cursor: pointer;
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $active-color;
      font-weight: bold;
    }
    &.disabled {
      cursor: not-allowed;
      color: $disabled-text-color;
    }
  }
</style>