const expect = chai.expect;
import Vue from 'vue'
import input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;
const Constructor = Vue.extend(input)
describe('input', () => {
  it('存在.', () => {
    expect(input).to.be.ok
  });

  describe('props', () => {

    it('value 属性', () => {
      const vm = new Constructor({
        propsData: {
          value: '123'
        }
      });
      vm.$mount();
      // const useElement = vm.$el.querySelector('use')
      let inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('123')
    })
    it('disabled 属性', () => {
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      });
      vm.$mount();
      let inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true)
    })
    it('readonly 属性', () => {
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      });
      vm.$mount();
      let inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true)
    })
    it('error 属性', () => {
      const vm = new Constructor({
        propsData: {
          error: '错了'
        }
      });
      vm.$mount();
      const useElement = vm.$el.querySelector('use');
      let iconText = useElement.getAttribute('xlink:href');
      expect(iconText).to.equal('#i-error')
      let errorMessage = vm.$el.querySelector('.error-message');
      expect(errorMessage.innerText).to.equal('错了')
    })
  })
  describe('事件', () => {
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change 事件
          let event = new Event(eventName);
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)
        })
    })
  })
})
