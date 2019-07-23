 const expect = chai.expect;
 import Vue from 'vue'
 import row from '../src/row'
 import col from '../src/col'

 Vue.config.productionTip = false;
 Vue.config.devtools = false;
 describe('row', () => {
   it('存在.', () => {
     expect(row).to.be.ok
   });
   it('接收 gutter 属性', (done)=>{
     Vue.component('g-row', row)
     Vue.component('g-col', col)
     const div = document.createElement('div')
     document.body.appendChild(div)
     div.innerHTML = `
        <g-row gutter="20">
          <g-col span="12"></g-col>
          <g-col span="12"></g-col>
        </g-row>
     `;

     const vm = new Vue({
       el: div
     });

     setTimeout(()=>{
       const row = vm.$el.querySelector('.row');
       expect(window.getComputedStyle(row).marginLeft).to.eq('-10px');
       expect(window.getComputedStyle(row).marginRight).to.eq('-10px');
       const cols = vm.$el.querySelectorAll('.col');
       expect(window.getComputedStyle(cols[0]).paddingRight).to.eq('10px');
       expect(window.getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
       done()
       vm.$el.remove();
       vm.$destroy()
     })
   });

   it('接收 align 属性', ()=>{
     const div = document.createElement('div');
     document.body.appendChild(div);
     const Constructor = Vue.extend(row);
     const vm = new Constructor({
       propsData: {
         align: 'right'
       }
     }).$mount(div)

     const el = vm.$el;
     expect(window.getComputedStyle(el).justifyContent).to.eq('flex-end');
     div.remove()
     vm.$destroy()
   })
 });