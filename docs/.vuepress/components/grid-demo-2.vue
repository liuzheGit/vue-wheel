<template>
  <div style="padding-top: 16px;">
    <h2>设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <z-row class="demoRow" gutter="10">
      <z-col span="8">
        <div class="demoCol">8</div>
      </z-col>
      <z-col span="8">
        <div class="demoCol">8</div>
      </z-col>
      <z-col span="8">
        <div class="demoCol">8</div>
      </z-col>
    </z-row>
    <z-row class="demoRow" gutter="10">
      <z-col span="6">
        <div class="demoCol">6</div>
      </z-col>
      <z-col span="6">
        <div class="demoCol">6</div>
      </z-col>
      <z-col span="6">
        <div class="demoCol">6</div>
      </z-col>
      <z-col span="6">
        <div class="demoCol">6</div>
      </z-col>
    </z-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import ZRow from '../../../src/grid/row'
  import ZCol from '../../../src/grid/col'

  export default {
    components: {ZRow, ZCol},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <z-row class="demoRow" gutter="10">
            <z-col span="8">
              <div class="demoCol">8</div>
            </z-col>
            <z-col span="8">
              <div class="demoCol">8</div>
            </z-col>
            <z-col span="8">
              <div class="demoCol">8</div>
            </z-col>
          </z-row>

          <z-row class="demoRow" gutter="10">
            <z-col span="6">
              <div class="demoCol">6</div>
            </z-col>
            <z-col span="6">
              <div class="demoCol">6</div>
            </z-col>
            <z-col span="6">
              <div class="demoCol">6</div>
            </z-col>
            <z-col span="6">
              <div class="demoCol">6</div>
            </z-col>
          </z-row>



      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>