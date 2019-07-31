<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button icon="settings">默认按钮</z-button>
    <z-button :loading="true">默认按钮</z-button>
    <z-button disabled>默认按钮</z-button>

    <pre>
    <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    name: 'button-demos',
    components: {
      'z-button': Button
    },
    data () {
      return {
        content: `
        <z-button>默认按钮</z-button>
        <z-button icon="settings">默认按钮</z-button>
        <z-button :loading="true">默认按钮</z-button>
        <z-button disabled>默认按钮</z-button>
      `
      }
    }
  }
</script>