const expect = chai.expect;
import Vue from 'vue'
import col from '../src/grid/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;
describe('col', () => {
    it('存在.', () => {
        expect(col).to.be.ok
    });

    it('接收 span 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
                span: 2
            }
        }).$mount(div);
        expect(vm.$el.classList.contains('col-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收 offset 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
                offset: 3
            }
        }).$mount(div);
        expect(vm.$el.classList.contains('offset-3')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收 pad 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
                pad: {
                    span: 12,
                    offset: 2
                }
            }
        }).$mount(div);
        expect(vm.$el.classList.contains('col-pad-12')).to.eq(true);
        expect(vm.$el.classList.contains('offset-pad-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收 narrowPc 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    span: 2
                }
            }
        }).$mount(div);
        console.log(vm.$el.classList)
        expect(vm.$el.classList.contains('col-narrow-pc-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收 pc 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
                pc: {
                    span: 2,
                    offset: 10
                }
            }
        }).$mount(div);
        expect(vm.$el.classList.contains('col-pc-2')).to.eq(true);
        expect(vm.$el.classList.contains('offset-pc-10')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收 widePc 属性', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(col);
        const vm = new Constructor({
            propsData: {
              widePc: {
                  span: 10
              }
            }
        }).$mount(div);
        expect(vm.$el.classList.contains('col-wide-pc-10')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
});