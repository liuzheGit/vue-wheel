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

import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(button)
  console.log(Constructor)
  let button1 = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button1.$mount()
  let useComponent = button1.$el.querySelector('use');
  expect(useComponent.getAttribute('xlink:href')).to.eq('#i-setting')
}