(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesinfo-infochooseperson"],{"04a2":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909"));a("e9c4"),a("a434"),a("14d9");var o,r=i(a("0b4e")),l=i(a("b85c")),u=(i(a("b503")),{data:function(){return{datalist:[],pageIndex:0,pageSize:40,hasMoreData:!0,dataItem:{}}},onLoad:function(t){o=this,console.log("onLoad========》"+t+JSON.stringify(t)),r.default.isNull(t.data)?r.default.show("缺少父级类目ID"):(this.dataItem=JSON.parse(t.data),this.reload())},onPullDownRefresh:function(){o.pageIndex=0,o.reload()},onReachBottom:function(){o.pageIndex++,o.reload()},methods:{reload:function(){var t=this;this.hasMoreData?(r.default.loading(),l.default.getHttpWithParam("action=robuserlist&infoid="+this.dataItem.ID,(function(e){var a;if(r.default.hideLoading(),uni.stopPullDownRefresh(),1==e.Status)if(0==t.pageIndex&&t.datalist.splice(0),0!=e.Data.length){(a=t.datalist).push.apply(a,(0,n.default)(e.Data));for(var i=0;i<t.datalist.length;i++){var o=t.datalist[i];o.picurl=l.default.getPicUrlByName(o.头像)}}else t.hasMoreData=!1}))):r.default.show("没有更多数据了")},itemClick:function(t){r.default.openPage("/pagesuser/userinfo/userdetail",{UserEncryptID:t.EncryptID})},chooseClick:function(t){r.default.loading(),l.default.getHttpWithParam("action=chooseperson&infoid="+this.dataItem.ID+"&attachid="+t.ID,(function(e){r.default.hideLoading(),1==e.Status&&(r.default.notifyEvent("chooseperson",t),r.default.closePage())}))}}});e.default=u},2909:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()};var i=l(a("6005")),n=l(a("db90")),o=l(a("06c5")),r=l(a("3427"));function l(t){return t&&t.__esModule?t:{default:t}}},"2fa8":function(t,e,a){"use strict";a.r(e);var i=a("9fbc"),n=a("f263");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"da99b22e",null,!1,i["a"],void 0);e["default"]=l.exports},3427:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a("d9e2"),a("d401")},6005:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,i.default)(t)};var i=function(t){return t&&t.__esModule?t:{default:t}}(a("6b75"))},"9fbc":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{"background-color":"#FFFFFF",width:"100%",height:"100%"}},[a("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("投标用户")]),a("v-uni-view",{staticClass:"action",attrs:{slot:"right"},slot:"right"})],2),a("v-uni-view",{staticStyle:{"overflow-y":"scroll"},attrs:{id:"scrollContentView"}},t._l(t.datalist,(function(e){return a("v-uni-view",{staticStyle:{width:"100%",height:"5rem"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row",height:"99%",padding:"0.5rem","align-items":"center"}},[a("v-uni-image",{staticStyle:{width:"8rem",height:"4rem"},attrs:{src:e.picurl}}),a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column",width:"100%","margin-left":"0.5rem","align-self":"flex-start"}},[a("v-uni-view",[t._v(t._s(e["姓名"]))]),a("v-uni-view",{staticStyle:{color:"#C0C4CC","font-size":"0.5rem","margin-top":"0.3rem"}},[t._v(t._s(e["企业介绍"]))])],1),a("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseClick(e)}}},[a("v-uni-button",{staticStyle:{width:"3.5rem",height:"1.5rem","font-size":"1rem"},attrs:{type:"primary"}},[t._v("选择")])],1)],1),a("v-uni-view",{staticStyle:{width:"100%",height:"1rpx","background-color":"#DBF1E1"}})],1)})),1)],1)},n=[]},db90:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")},f263:function(t,e,a){"use strict";a.r(e);var i=a("04a2"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);