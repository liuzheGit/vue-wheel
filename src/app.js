import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import row from './grid/row'
import col from './grid/col'
import layout from './layout'
import content from './content'
import header from './header'
import footer from './footer'
import aside from './aside'
import tabs from './tab/tabs'
import tabsHead from './tab/tabs-head'
import tabsItem from './tab/tabs-item'
import tabsBody from './tab/tabs-body'
import tabsPane from './tab/tabs-pane'

import collapse from './collapse'
import collapseItem from './collapse-item'

import './iconfont-svg'

Vue.component('z-button', button);
Vue.component('z-icon', icon);
Vue.component('z-button-group', buttonGroup);
Vue.component('z-input', input);
Vue.component('z-row', row);
Vue.component('z-col', col);

Vue.component('z-layout', layout)
Vue.component('z-content', content)
Vue.component('z-header', header)
Vue.component('z-footer', footer)
Vue.component('z-aside', aside)

Vue.component('z-tabs', tabs)
Vue.component('z-tabs-head', tabsHead)
Vue.component('z-tabs-item', tabsItem)
Vue.component('z-tabs-body', tabsBody)
Vue.component('z-tabs-pane', tabsPane)
Vue.component('z-collapse', collapse)
Vue.component('z-collapse-item', collapseItem)
// Toast
import plugin from './plugin'

Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    collapseSelected: [],
    msg: 'hello',
    up: 'up',
    loading1: true,
    loading2: false,
    selectedTab: 'ov'
  },
  methods: {
    yyy(){
      console.log('tabs的监听@update:selected触发了')
    },
    inputEvent(event) {
      console.log(event.target.value)
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(value) {
      this.$toast('我是toast', {
        closeButton: { text: '关闭', callback(toask){
          console.log('点击关闭了');
          toask.log()
          }},
        position: value
      })
    }
  }
});

