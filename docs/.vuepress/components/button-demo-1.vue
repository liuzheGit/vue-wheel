<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <z-button>默认按钮</z-button>
    <z-button icon="setting">icon按钮</z-button>
    <z-button :loading="true">loading按钮</z-button>
    <z-button disabled>禁用按钮</z-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import '../../../src/iconfont-svg.js'
  import Button from '../../../src/button'

  export default {
    components: {
      'z-button': Button
    },
    data () {
      return {
        content: `
          <z-button>默认按钮</z-button>
          <z-button icon="setting">icon按钮</z-button>
          <z-button :loading="true">loading</z-button>
          <z-button disabled>禁用按钮</z-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>