(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{121:function(t,n,e){"use strict";var a=e(53);e.n(a).a},122:function(t,n,e){"use strict";var a=e(54);e.n(a).a},123:function(t,n,e){"use strict";var a=e(55);e.n(a).a},124:function(t,n,e){"use strict";var a=e(56);e.n(a).a},125:function(t,n,e){"use strict";var a=e(57);e.n(a).a},129:function(t,n,e){"use strict";e(79),e(44),e(37);var a={name:"z-layout",data:function(){return{layoutClass:{hasAside:!1}}},mounted:function(){var t=this;this.$children.forEach(function(n){"z-aside"===n.$options.name&&(t.layoutClass.hasAside=!0)})}},i=(e(121),e(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"60ce960f",null);n.a=s.exports},131:function(t,n,e){"use strict";var a={name:"z-header"},i=(e(122),e(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"e77174b8",null);n.a=s.exports},132:function(t,n,e){"use strict";var a={name:"z-footer"},i=(e(123),e(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"5d110cf2",null);n.a=s.exports},133:function(t,n,e){"use strict";var a={name:"z-aside",data:function(){return{visible:!0}}},i=(e(125),e(1)),s=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"aside"},[t._t("default"),t._v(" "),e("button",{staticClass:"close",on:{click:function(n){t.visible=!t.visible}}},[t._v("X")])],2):t._e()])},[],!1,null,"07c3330d",null);n.a=s.exports},134:function(t,n,e){"use strict";var a={name:"z-content"},i=(e(124),e(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"4c669a80",null);n.a=s.exports},193:function(t,n,e){},245:function(t,n,e){"use strict";var a=e(193);e.n(a).a},267:function(t,n,e){"use strict";e.r(n);e(26),e(28);var a=e(129),i=e(131),s=e(132),c=e(134),r=e(133),o={components:{ZLayout:a.a,ZHeader:i.a,ZFooter:s.a,ZContent:c.a,ZSider:r.a},data:function(){return{content:'\n        <z-layout style="color: white; margin-bottom:50px;">\n          <z-header style="height: 50px; background:lightskyblue;">\n            header\n          </z-header>\n          <z-content style="height: 100px; background:deepskyblue;">\n            content\n          </z-content>\n          <z-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </z-footer>\n        </z-layout>\n\n    '.replace(/^ {8}/gm,"").trim()}}},u=(e(245),e(1)),l=Object(u.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("z-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("z-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("z-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),e("z-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"3a136716",null);n.default=l.exports},37:function(t,n,e){"use strict";var a=e(12),i=e(69)(0),s=e(35)([].forEach,!0);a(a.P+a.F*!s,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},53:function(t,n,e){},54:function(t,n,e){},55:function(t,n,e){},56:function(t,n,e){},57:function(t,n,e){},79:function(t,n,e){var a=e(23).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||e(14)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})}}]);