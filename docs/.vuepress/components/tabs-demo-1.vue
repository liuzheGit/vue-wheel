<template>
  <div style="paddinz-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <z-tabs :selected="selected">
      <z-tabs-head>
        <z-tabs-item name="1">1</z-tabs-item>
        <z-tabs-item name="2">2</z-tabs-item>
      </z-tabs-head>
      <z-tabs-body>
        <z-tabs-pane name="1">content 1</z-tabs-pane>
        <z-tabs-pane name="2">content 2</z-tabs-pane>
      </z-tabs-body>
    </z-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import ZTabs from '../../../src/tab/tabs'
  import ZTabsBody from '../../../src/tab/tabs-body'
  import ZTabsHead from '../../../src/tab/tabs-head'
  import ZTabsItem from '../../../src/tab/tabs-item'
  import ZTabsPane from '../../../src/tab/tabs-pane'

  export default {
    components: {ZTabs, ZTabsBody, ZTabsHead, ZTabsItem, ZTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

          <z-tabs :selected="selected">
            <z-tabs-head>
              <z-tabs-item name="1">1</z-tabs-item>
              <z-tabs-item name="2">2</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
              <z-tabs-pane name="1">content 1</z-tabs-pane>
              <z-tabs-pane name="2">content 2</z-tabs-pane>
            </z-tabs-body>
          </z-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>