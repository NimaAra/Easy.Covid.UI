(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14ba2e74"],{"6cf7":function(t,e,a){"use strict";var s=a("dae5"),n=a.n(s);n.a},"98d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"top-pane"},[a("chart",{attrs:{data:t.plotlyData}})],1),a("div",{staticClass:"bottom-pane"},[t.statesData.length?t._e():a("spinner",{staticClass:"spinner"}),a("ul",{staticClass:"tiles",class:{show:t.statesData.length}},t._l(t.statesData,(function(t){return a("li",{key:t.name,staticClass:"tile"},[a("us-tile",{attrs:{data:t}})],1)})),0)],1)])},n=[],r=a("9ab4"),c=a("60a3"),i=a("56b5"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile-content"},[a("h1",[t._v(t._s(t.data.name))]),t.stats?a("div",{staticClass:"stats"},[a("table",[t._m(0),a("tr",[a("td",[a("span",{staticClass:"value is-case"},[t._v(t._s(t.stats.totalCases))])]),a("td",[a("span",{staticClass:"value is-death"},[t._v(" "+t._s(t.stats.totalDeaths)+" "),a("span",{staticClass:"value-percent"},[t._v("("+t._s(t.stats.totalDeathsPercent)+"%)")])])])]),t._m(1),a("tr",[a("td",[a("span",{staticClass:"value is-case"},[t._v(t._s(t.stats.todayCases))])]),a("td",[a("span",{staticClass:"value is-death"},[t._v(" "+t._s(t.stats.todayDeaths)+" "),a("span",{staticClass:"value-percent"},[t._v("("+t._s(t.stats.todayDeathsPercent)+"%)")])])])])])]):t._e()])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("label",[t._v("Total Cases")])]),a("td",[a("label",[t._v("Total Deaths")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("label",[t._v("Today Cases")])]),a("td",[a("label",[t._v("Today Deaths")])])])}],u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r["d"])(e,t),Object.defineProperty(e.prototype,"stats",{get:function(){var t=this,e=function(t,e){return 100*t/e},a=function(a){return e(a,t.data.stats.c).toFixed(2)},s=this.data.stats;return{totalCases:s.c.toLocaleString(),totalDeaths:s.d.toLocaleString(),totalDeathsPercent:a(s.d),todayCases:s.ct.toLocaleString(),todayDeaths:s.dt.toLocaleString(),todayDeathsPercent:a(s.dt)}},enumerable:!0,configurable:!0}),Object(r["c"])([Object(c["b"])({type:Object,required:!0})],e.prototype,"data",void 0),e=Object(r["c"])([c["a"]],e),e}(c["c"]),d=u,p=d,f=(a("6cf7"),a("2877")),b=Object(f["a"])(p,o,l,!1,null,"98dcfca0",null),h=b.exports,v=a("fa81"),y=a("99dd"),_=v["a"].Instance,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.statesData=[],e}return Object(r["d"])(e,t),e.prototype.beforeCreate=function(){return Object(r["b"])(this,void 0,Promise,(function(){var t;return Object(r["e"])(this,(function(e){switch(e.label){case 0:return t=this,[4,_.getUSStatesSummaries()];case 1:return t.statesData=e.sent(),[2]}}))}))},Object.defineProperty(e.prototype,"plotlyData",{get:function(){return new y["a"]({series:this.series,layout:this.layout})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"series",{get:function(){var t=this.statesData,e=t.map((function(t){return t.name})),a=t.map((function(t){return t.stats.c})),s=t.map((function(t){return t.stats.d})),n=t.map((function(t){return t.stats.r})),r="bar",c="#d3840d",i="#009933",o="#ff0000";return[{x:e,y:a,name:"Cases",type:r,marker:{color:c}},{x:e,y:n,name:"Recoveries",type:r,marker:{color:i}},{x:e,y:s,name:"Deaths",type:r,marker:{color:o}}]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return{title:"US Cases and Deaths",barmode:"stack",margin:{t:50,b:115,l:50,r:0,pad:0},xaxis:{tickangle:-45,tickfont:{size:10,color:"#4a5a6a"}}}},enumerable:!0,configurable:!0}),e=Object(r["c"])([Object(c["a"])({components:{"us-tile":h,Chart:i["a"]}})],e),e}(c["c"]),C=m,D=C,g=(a("e68f"),Object(f["a"])(D,s,n,!1,null,"3caf1dba",null));e["default"]=g.exports},dae5:function(t,e,a){},dc88:function(t,e,a){},e68f:function(t,e,a){"use strict";var s=a("dc88"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-14ba2e74.fcc213c0.js.map