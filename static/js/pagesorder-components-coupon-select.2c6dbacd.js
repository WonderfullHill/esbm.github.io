(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesorder-components-coupon-select"],{"0f4e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{curCoupon:{}}},props:{list:{type:Array,default:function(){return[]}}},methods:{confirm:function(){this.$emit("confirm",this.curCoupon),this.close()},checkCoupon:function(t){this.curCoupon._id===t._id?this.curCoupon={}:this.curCoupon=t},open:function(t){this.$refs.popup.open()},close:function(){this.$refs.popup.close()}}};e.default=i},"11b8":function(t,e,n){"use strict";var i=n("1492"),o=n.n(i);o.a},1492:function(t,e,n){var i=n("d6b44");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("329b1c6b",i,!0,{sourceMap:!1,shadowMode:!1})},2998:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"s-header center"},[n("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-text",[t._v("请选择优惠券")]),n("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])],1),n("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":"true"}},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"coupon-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.checkCoupon(e)}}},[n("v-uni-view",{staticClass:"con"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),n("v-uni-text",{staticClass:"time"},[t._v("有效期至 "+t._s(t._f("date")(e.end_time,"Y-m-d H:i")))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.coupon_money))]),n("v-uni-text",[t._v("满"+t._s(e.total_money)+"可用")])],1),n("v-uni-view",{staticClass:"circle l"}),n("v-uni-view",{staticClass:"circle r"})],1),n("v-uni-view",{staticClass:"bot row"},[n("v-uni-text",{staticClass:"tips"},[t._v("平台所有商品可用")]),t.curCoupon._id===e._id?n("v-uni-text",{staticClass:"mix-icon icon-xuanzhong"}):t._e()],1)],1)})),1)],1)],1)},o=[]},4400:function(t,e,n){"use strict";n.r(e);var i=n("0f4e"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d6b44:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-4ea03ee2]{padding-bottom:%?10?%;border-radius:%?16?% %?16?% 0 0;background-color:#f7f7f7}.s-header[data-v-4ea03ee2]{justify-content:space-between;padding:%?30?% 0 %?14?%;font-size:%?32?%;color:#333;font-weight:700}.s-header .btn[data-v-4ea03ee2]{padding:%?10?% %?36?%;font-size:%?28?%;color:#666;font-weight:400}.s-header .btn[data-v-4ea03ee2]:last-child{color:#ff536f}.scroll-view[data-v-4ea03ee2]{min-height:50vh;max-height:70vh}.coupon-item[data-v-4ea03ee2]{display:flex;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-4ea03ee2]{display:flex;align-items:center;position:relative;height:%?140?%;padding:0 %?30?%}.coupon-item .con[data-v-4ea03ee2]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #e5e5e5;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-4ea03ee2]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-4ea03ee2]{font-size:%?32?%;color:#333;margin-bottom:%?24?%}.coupon-item .time[data-v-4ea03ee2]{font-size:%?24?%;color:#999}.coupon-item .right[data-v-4ea03ee2]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:%?30?%;font-size:%?24?%;color:#666;height:%?100?%}.coupon-item .price[data-v-4ea03ee2]{margin-bottom:%?14?%;font-size:%?50?%;color:#ff536f;font-weight:700}.coupon-item .price[data-v-4ea03ee2]:before{content:"￥";font-size:%?34?%}.coupon-item .bot[data-v-4ea03ee2]{height:%?72?%;padding:0 %?28?% 0 %?30?%}.coupon-item .bot .tips[data-v-4ea03ee2]{flex:1;font-size:%?24?%;color:#999}.coupon-item .bot .icon-xuanzhong[data-v-4ea03ee2]{font-size:%?36?%;color:#ff536f}.coupon-item .circle[data-v-4ea03ee2]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-4ea03ee2]{left:auto;right:%?-6?%}',""]),t.exports=e},e855:function(t,e,n){"use strict";n.r(e);var i=n("2998"),o=n("4400");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("11b8");var c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"4ea03ee2",null,!1,i["a"],void 0);e["default"]=r.exports}}]);