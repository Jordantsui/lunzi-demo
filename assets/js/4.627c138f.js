(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){},200:function(t,e,n){},201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},228:function(t,e,n){"use strict";var s=n(199);n.n(s).a},229:function(t,e,n){"use strict";var s=n(200);n.n(s).a},230:function(t,e,n){"use strict";var s=n(201);n.n(s).a},231:function(t,e,n){"use strict";var s=n(202);n.n(s).a},232:function(t,e,n){"use strict";var s=n(203);n.n(s).a},241:function(t,e,n){"use strict";n.r(e);n(25),n(96),n(55),n(14),n(26);var s={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},a=(n(228),n(1)),i=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"63c02567",null).exports,r=(n(229),Object(a.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"08c625a2",null).exports),o={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},l=(n(230),Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])},[],!1,null,"1ef6e0f1",null).exports),c=(n(231),Object(a.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"95535a5e",null).exports),u=(n(232),{components:{"g-layout":i,"g-header":r,"g-sider":l,"g-content":c,"g-footer":Object(a.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"73f380be",null).exports},data:function(){return{content:'\n<g-layout style="height: 100vh;">\n    <g-sider>sider</g-sider>\n    <g-layout>\n        <g-header>header</g-header>\n        <g-content>content</g-content>\n        <g-footer>footer</g-footer>\n    </g-layout>\n</g-layout>\n  '.replace(/\t+| +/g,"").trim()}}}),d=Object(a.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-layout",{staticStyle:{height:"100vh"}},[n("g-sider",{staticStyle:{border:"1px solid red"}},[t._v("sider")]),t._v(" "),n("g-layout",[n("g-header",{staticStyle:{border:"1px solid red"}},[t._v("header")]),t._v(" "),n("g-content",{staticStyle:{border:"1px solid red"}},[t._v("content")]),t._v(" "),n("g-footer",{staticStyle:{border:"1px solid red"}},[t._v("footer")])],1)],1),t._v(" "),n("pre",[t._v("        "),n("code",[t._v(t._s(t.content))]),t._v("\n    ")])],1)},[],!1,null,null,null);e.default=d.exports}}]);