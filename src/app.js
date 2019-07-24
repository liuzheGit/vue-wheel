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


// Toast
import plugin from './plugin'

Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    msg: 'hello',
    up: 'up',
    loading1: true,
    loading2: false
  },
  methods: {
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
        closeButton: { text: '关闭'},
        position: value
      })
    }
  }
});

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies);
const expect = chai.expect


const Constructor = Vue.extend(button)
// icon属性测试
{
  let vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  vm.$mount()
  let useComponent = vm.$el.querySelector('use');
  expect(useComponent.getAttribute('xlink:href')).to.eq('#i-setting')
}
// loading属性测试
{
  let vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  vm.$mount()
  let useComponent = vm.$el.querySelector('use');
  let href = useComponent.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}
// iconPosition属性测试
{
  let div = document.createElement('div');
  document.body.appendChild(div);
  let vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2')
  vm.$el.remove();
  vm.$destroy()
}
{
  let div = document.createElement('div');
  document.body.appendChild(div);
  let vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1')
  vm.$el.remove();
  vm.$destroy()
}
// click测试
{
  let vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  vm.$mount();
  // 这里是监听
  let spy = chai.spy(function () {
  })
  vm.$on('click', spy);
  let button = vm.$el;
  /* 这里是模拟点击 */
  button.click()
  expect(spy).to.have.been.called();
}
