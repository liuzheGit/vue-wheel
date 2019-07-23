<template>
  <transition name="slide">
    <div class="aside" v-if="visible">
      <slot></slot>
      <button class="close" @click="visible = !visible">X</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "z-aside",
    data(){
      return {
        visible: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .aside{
    position: relative;
    .close{
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 16px;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to{
    margin-left: -200px;
    opacity: 0;
  }
</style>