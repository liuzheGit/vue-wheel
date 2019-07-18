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

// 单元测试
import chai from 'chai'
const expect = chai.expect

const Constructor = Vue.extend(button)
// icon属性测试
{
  let button1 = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button1.$mount()
  let useComponent = button1.$el.querySelector('use');
  expect(useComponent.getAttribute('xlink:href')).to.eq('#i-setting')
}
// loading属性测试
{
  let button1 = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  button1.$mount()
  let useComponent = button1.$el.querySelector('use');
  let href = useComponent.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}
// iconPosition属性测试
{
  let div = document.createElement('div');
  document.body.appendChild(div);
  let button = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  });
  button.$mount(div);
  let svg = button.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2')
  button.$el.remove();
  button.$destroy()
}
{
  let div = document.createElement('div');
  document.body.appendChild(div);
  let button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button.$mount(div);
  let svg = button.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1')
  button.$el.remove();
  button.$destroy()
}
