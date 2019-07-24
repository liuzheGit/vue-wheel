<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else class="content" v-html="$slots.default[0]"></div>
    <span class="button" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "z-toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 300
      },
      closeButton: {
        type: Object,
        default: ()=>{
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      let {autoClose, close, autoCloseDelay} = this;
      if (autoClose) {
        setTimeout(() => {
          close();
        }, autoCloseDelay * 1000)
      }
    },
    methods: {
      close(){
        this.$el.remove();
        this.$destroy()
      },
      log(){
        console.log('测试')
      },
      onClickClose(){
        this.close();
        if(this.closeButton && typeof this.closeButton.callback === 'function') {
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
  .toast {
    position: fixed; top: 10px; left: 50%; transform: translateX(-50%); font-size: $font-size;
    min-height: $toast-min-height; display: flex; line-height: 1.8; color: white;
    align-items: center; background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    .content{
      border-right: 1px solid #666;
      padding: 4px 16px;
      align-self: stretch;
      display: flex;
      align-items: center;
    }
    .button{
      cursor: pointer;
      flex-shrink: 0;
      align-self: stretch;
      padding: 0 16px;
      display: flex;
      align-items: center;
    }
  }
</style>