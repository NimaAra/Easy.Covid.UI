(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01563793"],{"1ce0":function(t,e,n){},"1fbd":function(t,e,n){"use strict";var i=n("1ce0"),s=n.n(i);s.a},"88d2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",[n("div",{staticClass:"summary"},[n("p",[t._v(" This page provides predictve monitoring of COVID-19 based on the daily updated data from each country to estimate the pandemic life cycle curves and theoretical ending dates. For more information on this data please look at the "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" page. ")],1)]),n("div",{staticClass:"predictions-wrapper"},[n("p",[t._v(" Last updated: "),n("span",[t._v(t._s(t._f("moment")(t.data.asOf,"DD-MM-YYYY")))])]),n("ul",{staticClass:"predictions-list"},t._l(t.data.data,(function(e){return n("li",{key:e.name,staticClass:"predictions-item",on:{click:function(n){return t.onItemClicked(e.source)}}},[n("h3",[t._v(t._s(e.name))]),n("img",{attrs:{src:e.source}})])})),0)]),n("modal",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],on:{dismissed:function(e){t.isOpen=!1}}},[t.selectedImage?n("img",{attrs:{width:"70%",src:t.selectedImage}}):t._e()])],1):t._e()},s=[],a=n("9ab4"),o=n("60a3"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",t._g({attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},t.Listeners),[n("div",{staticClass:"modal-mask",on:{click:t.onClick}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[t._t("default")],2)])])])},c=[],u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["d"])(e,t),e.prototype.created=function(){window.addEventListener("keydown",this.onKeyPress)},e.prototype.destroyed=function(){window.removeEventListener("keydown",this.onKeyPress)},e.prototype.onClick=function(t){var e=t.target;e.classList.contains("modal-wrapper")&&this.emitDismissed()},e.prototype.onKeyPress=function(t){"Escape"===t.key&&this.emitDismissed()},e.prototype.emitDismissed=function(){this.$emit("dismissed")},Object.defineProperty(e.prototype,"Listeners",{get:function(){return Object(a["a"])(Object(a["a"])({},this.$listeners),{beforeEnter:this.setDuration,afterEnter:this.cleanUpDuration,beforeLeave:this.setDuration,afterLeave:this.cleanUpDuration})},enumerable:!0,configurable:!0}),e.prototype.setDuration=function(t){t.style.animationDuration="300ms"},e.prototype.cleanUpDuration=function(t){t.style.animationDuration=""},e=Object(a["c"])([o["a"]],e),e}(o["c"]),d=u,l=d,p=(n("1fbd"),n("2877")),f=Object(p["a"])(l,r,c,!1,null,"4552554e",null),m=f.exports,h=n("fa81"),v=h["a"].Instance,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=null,e.selectedImage="",e.isOpen=!1,e}return Object(a["d"])(e,t),e.prototype.beforeCreate=function(){return Object(a["b"])(this,void 0,Promise,(function(){var t;return Object(a["e"])(this,(function(e){switch(e.label){case 0:return t=this,[4,v.getPredictions()];case 1:return t.data=e.sent(),[2]}}))}))},e.prototype.onItemClicked=function(t){this.selectedImage=t,this.isOpen=!0},e=Object(a["c"])([Object(o["a"])({components:{Modal:m}})],e),e}(o["c"]),y=b,w=y,O=(n("c0c7"),Object(p["a"])(w,i,s,!1,null,"00cdec99",null));e["default"]=O.exports},c0c7:function(t,e,n){"use strict";var i=n("e120"),s=n.n(i);s.a},e120:function(t,e,n){}}]);