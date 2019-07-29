<template>
  <div class="tabs-item" @click="changeItem" :class="classes" :data-name="name">
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
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
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