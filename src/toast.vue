<template>
  <div class="toast-wrap" :class="toastClasses">
    <div class="toast">
      <div v-if="!enableHtml" class="content">
        <slot></slot>
      </div>
      <div v-else class="content" v-html="$slots.default[0]"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "z-toast",
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 3,
        validator(value){
          return value === false || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastClasses() {
        return [`position-${this.position}`]
      }
    },
    mounted() {
      let {autoClose, close} = this;
      if (autoClose) {
        setTimeout(() => {
          close();
        }, autoClose * 1000)
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$emit('beforeClose');
        this.$destroy()
      },
      log(){ console.log('组件内部的log') },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $duration-time: 300ms;
  @keyframes slide-up {
    0%{opacity: 0; transform: translateY(100%)}
    100%{opacity: 1; transform: translateY(0%)}
  }
  @keyframes slide-down {
    0%{opacity: 0; transform: translateY(-100%)}
    100%{opacity: 1; transform: translateY(0%)}
  }
  @keyframes fade-in {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  .toast-wrap{
    position: fixed; left: 50%;
    transform: translateX(-50%);
    &.position-top{
      top: 0;
      .toast{
        animation: slide-down $duration-time;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%, -50%);
      .toast{
        animation: fade-in $duration-time;
      }
    }
    &.position-bottom{
      bottom: 0;
      .toast{
        animation: slide-up $duration-time;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .toast { color: white; font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    display: flex; align-items: center;
    .content { border-right: 1px solid #666; padding: 4px 16px; align-self: stretch;
      display: flex; align-items: center; }
    .close { cursor: pointer; flex-shrink: 0; align-self: stretch; padding: 0 16px; display: flex;
      align-items: center; }
  }
</style>