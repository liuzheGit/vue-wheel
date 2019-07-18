 const expect = chai.expect;
 import Vue from 'vue'
 import button from '../src/button'

 Vue.config.productionTip = false
 Vue.config.devtools = false
 const Constructor = Vue.extend(button)
 describe('button', () => {
     it('存在.', () => {
         expect(button).to.be.ok
     })

     it('可以设置icon.', () => {
         const vm = new Constructor({
           propsData: {
               icon: 'setting'
           }
         })
         vm.$mount();
         console.log(vm.$el)
         const useElement = vm.$el.querySelector('use')
         console.log(useElement)
         expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
         // vm.$destroy()
     })
     it('可以设置loading.', () => {
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
         vm.$destroy()
     })
     it('icon 默认的 order 是 1', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('1')
         vm.$el.remove()
         vm.$destroy()
     })
     it('设置 iconPosition 可以改变 order', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'right'
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('2')
         vm.$el.remove()
         vm.$destroy()
     })
     it('点击 button 触发 click 事件', () => {
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount()

         const callback = sinon.fake();
         vm.$on('click', callback)
         vm.$el.click()
         expect(callback).to.have.been.called

     })
 })