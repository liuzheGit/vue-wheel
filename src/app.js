import Vue from 'vue'
import button from './button'

Vue.component('z-button', button);
new Vue({
  el: '#app',
  data: {
    msg: 'hello'
  }
});