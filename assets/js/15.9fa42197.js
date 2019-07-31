(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{126:function(t,n,o){"use strict";var e=o(58);o.n(e).a},127:function(t,n,o){"use strict";o(73),o(65);var e={name:"z-toast",props:{autoClose:{type:[Boolean,Number],default:3,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},computed:{toastClasses:function(){return["position-".concat(this.position)]}},mounted:function(){var t=this.autoClose,n=this.close;t&&setTimeout(function(){n()},1e3*t)},methods:{close:function(){this.$el.remove(),this.$emit("beforeClose"),this.$destroy()},log:function(){console.log("组件内部的log")},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)}}},s=(o(126),o(1)),i=Object(s.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"toast-wrap",class:t.toastClasses},[o("div",{staticClass:"toast"},[t.enableHtml?o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$slots.default[0])}}):o("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),t.closeButton?o("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v(t._s(t.closeButton.text))]):t._e()])])},[],!1,null,"7edae1ed",null).exports;var c=null;n.a={install:function(t,n){t.prototype.$toast=function(n,o){c&&c.close(),c=function(t){var n=t.Vue,o=t.message,e=t.propsData,s=t.onClose,c=new(n.extend(i))({propsData:e});return c.$slots.default=[o],c.$mount(),c.$on("beforeClose",s),document.body.appendChild(c.$el),c}({Vue:t,message:n,propsData:o,onClose:function(){c=null}})}}}},20:function(t,n,o){},205:function(t,n,o){},206:function(t,n,o){},257:function(t,n,o){"use strict";var e=o(205);o.n(e).a},258:function(t,n,o){"use strict";var e=o(206);o.n(e).a},274:function(t,n,o){"use strict";o.r(n);o(26),o(28);var e=o(127),s=o(93);o(0).a.use(e.a);var i={components:{ZButton:s.a},data:function(){return{content:"\n        <style>\n          .toast-wrapt {\n            z-index: 30;\n          }\n        </style>\n\n        <div>\n          <z-button @click=\"onClickButton\">上方弹出</z-button>\n        </div>\n\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},c=(o(257),o(258),o(1)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"paddinz-top":"16px"}},[o("h2",[t._v("支持 HTML")]),t._v(" "),t._m(0),t._v(" "),o("div",[o("z-button",{on:{click:t.onClickButton}},[t._v("上方弹出")])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"93406c42",null);n.default=a.exports},32:function(t,n,o){},50:function(t,n,o){"use strict";var e=o(20);o.n(e).a},58:function(t,n,o){},59:function(t,n,o){"use strict";var e={props:["name"]},s=(o(50),o(1)),i=Object(s.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{staticClass:"z-icon"},[n("use",{attrs:{"xlink:href":"#i-"+this.name}})])},[],!1,null,"7e985f0c",null);n.a=i.exports},91:function(t,n,o){"use strict";var e=o(32);o.n(e).a},93:function(t,n,o){"use strict";var e={name:"z-button",components:{"z-icon":o(59).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validate:function(t){return!("left"!==t&&"right"!==t)}}}},s=(o(91),o(1)),i=Object(s.a)(e,function(){var t,n=this,o=n.$createElement,e=n._self._c||o;return e("button",{staticClass:"z-button",class:(t={},t["icon-"+n.iconPosition]=!0,t),on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?e("z-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?e("z-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):n._e(),n._v(" "),e("div",{staticClass:"content"},[n._t("default")],2)],1)},[],!1,null,"0fd93c64",null);n.a=i.exports}}]);