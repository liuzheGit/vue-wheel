import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'

Vue.component('z-button', button);
Vue.component('z-icon', icon);
Vue.component('z-button-group', buttonGroup);
new Vue({
  el: '#app',
  data: {
    msg: 'hello',
    up: 'up',
    loading1: true,
    loading2: false
  }
});