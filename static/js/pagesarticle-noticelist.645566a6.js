(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesarticle-noticelist"],{"11ef":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909"));a("a434"),a("14d9"),a("e9c4");var r,o=i(a("0b4e")),l=i(a("b85c")),u=(i(a("b503")),{data:function(){return{datalist:[],pageIndex:0,pageSize:40,hasMoreData:!0}},onLoad:function(){r=this,this.reload()},onPullDownRefresh:function(){r.pageIndex=0,r.reload()},onReachBottom:function(){r.pageIndex++,r.reload()},methods:{reload:function(){var t=this;this.hasMoreData?(o.default.loading(),l.default.getHttpWithParam("action=noticelist&pagesize="+this.pageSize+"&pageindex="+this.pageIndex,(function(e){var a;if(o.default.hideLoading(),uni.stopPullDownRefresh(),0==t.pageIndex&&t.datalist.splice(0),0!=e.Data.length){(a=t.datalist).push.apply(a,(0,n.default)(e.Data));for(var i=0;i<t.datalist.length;i++){var r=t.datalist[i];r.picurl=l.default.getPicUrlByName(r.封面)}}else t.hasMoreData=!1}))):o.default.show("没有更多数据了")},itemClick:function(t){l.default.openBannerPage(t)},phoneClick:function(t){o.default.callPhone(t.手机号)}}});e.default=u},2909:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)(t)||(0,n.default)(t)||(0,r.default)(t)||(0,o.default)()};var i=l(a("6005")),n=l(a("db90")),r=l(a("06c5")),o=l(a("3427"));function l(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a("d9e2"),a("d401")},6005:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,i.default)(t)};var i=function(t){return t&&t.__esModule?t:{default:t}}(a("6b75"))},8323:function(t,e,a){"use strict";a.r(e);var i=a("11ef"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},be63:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{"background-color":"#FFFFFF",width:"100%",height:"100%"}},[a("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("公告列表")]),a("v-uni-view",{staticClass:"action",attrs:{slot:"right"},slot:"right"})],2),a("v-uni-view",{staticStyle:{"overflow-y":"scroll"},attrs:{id:"scrollContentView"}},t._l(t.datalist,(function(e){return a("v-uni-view",{staticStyle:{width:"100%",height:"5rem"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row",height:"99%",padding:"0.5rem","align-items":"center"}},[a("v-uni-image",{staticStyle:{width:"8rem",height:"4rem"},attrs:{src:e.picurl}}),a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column",width:"100%","margin-left":"0.5rem","align-self":"flex-start"}},[a("v-uni-view",[t._v(t._s(e["标题"]))]),a("v-uni-view",{staticStyle:{color:"#C0C4CC","font-size":"0.5rem","margin-top":"0.3rem"}},[t._v(t._s(e["创建日期"]))])],1),a("v-uni-view",[a("v-uni-image",{staticClass:"cuIcon-right",staticStyle:{width:"2.2rem",height:"2.2rem"}})],1)],1),a("v-uni-view",{staticStyle:{width:"100%",height:"1rpx","background-color":"#DBF1E1"}})],1)})),1)],1)},n=[]},caff:function(t,e,a){"use strict";a.r(e);var i=a("be63"),n=a("8323");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6f6a9cba",null,!1,i["a"],void 0);e["default"]=l.exports},db90:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")}}]);