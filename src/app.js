import Vue from 'vue'
import button from './button'
import icon from './icon'

Vue.component('z-button', button);
Vue.component('z-icon', icon);
new Vue({
  el: '#app',
  data: {
    msg: 'hello',
    up: 'up',
    loading1: true,
    loading2: false
  }
});