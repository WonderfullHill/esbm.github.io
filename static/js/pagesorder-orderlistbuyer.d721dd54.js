(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesorder-orderlistbuyer"],{"1a7a":function(t,a,e){var i=e("4c48");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3b7f8766",i,!0,{sourceMap:!1,shadowMode:!1})},"2aa3":function(t,a,e){"use strict";var i=e("a3ad"),n=e.n(i);n.a},"2f72":function(t,a,e){"use strict";var i=e("1a7a"),n=e.n(i);n.a},4379:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"collection"},[e("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("我购买的")])],2),e("v-uni-view",{staticClass:"container"},[e("v-uni-scroll-view",{staticClass:"bg-white nav text-center",style:{position:"fixed",top:t.custombar+"px"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.navList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-green cur":"",attrs:{"data-id":i,"data-tag":a},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a["分类名称"]))])})),1),e("v-uni-view",{staticClass:"good"},[e("v-uni-view",{staticClass:"task"},[e("v-uni-view",{staticClass:"cu-chat"},t._l(t.taskList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item animation-bottom-top",style:{animationDelay:.1*(i+1)+"s"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hrefTask(a)}}},[e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"content shadow"},[e("v-uni-view",{staticClass:"item-header"},[e("v-uni-view",{staticClass:"item-title text-lg text-bold"},[t._v(t._s(a["订单名称"]))]),e("v-uni-view",{staticClass:"item-price"},[e("v-uni-text",{staticClass:"text-price text-red text-lg text-bold padding-sm"},[t._v(t._s(a["订单价格"]))])],1)],1),e("v-uni-view",{staticClass:"item-desc text-gray text-sm"},[t._v(t._s(a["需求内容"]))]),e("v-uni-view",{staticClass:"item-tag"},t._l(a.tags,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-tag bg-red sm round",class:"light-"+i},[t._v(t._s(a))])})),1),e("v-uni-view",{staticClass:"university"})],1)],1),e("v-uni-view",{staticClass:"date"},[e("v-uni-text",{staticClass:"text-xs text-gray"},[t._v("发布时间:"+t._s(a["创建日期"]))]),e("v-uni-button",{staticClass:"cu-btn round shadow bg-yellow sm",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hrefChat(a)}}},[t._v(t._s(a.OrderStatusName))])],1)],1)})),1)],1)],1)],1)],1)},n=[]},"4c48":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-flex[data-v-06308752], .uni-flex-row[data-v-06308752], .uni-list-box[data-v-06308752], .uni-media-box[data-v-06308752], .uni-footer[data-v-06308752], .uni-flex-column[data-v-06308752], .uni-content[data-v-06308752]{display:flex}.uni-flex-row[data-v-06308752], .uni-list-box[data-v-06308752], .uni-media-box[data-v-06308752], .uni-footer[data-v-06308752]{flex-direction:row;box-sizing:border-box}.uni-flex-column[data-v-06308752], .uni-content[data-v-06308752]{flex-direction:column}.uni-color-gary[data-v-06308752]{color:#3b4144}\r\n/* 标题 */.uni-title[data-v-06308752]{display:flex;margin-bottom:%?16?%;font-size:%?32?%;font-weight:700;color:#3b4144}.uni-title-sub[data-v-06308752]{display:flex;font-size:%?28?%;font-weight:500;color:#3b4144}\r\n/* 描述 额外文本 */.uni-note[data-v-06308752]{margin-top:10px;color:#999;font-size:%?24?%}\r\n/* 列表内容 */.uni-list-box[data-v-06308752]{flex:1;margin-top:10px}\r\n/* 略缩图 */.uni-thumb[data-v-06308752]{flex-shrink:0;margin-right:%?20?%;width:125px;height:75px;border-radius:%?12?%;overflow:hidden;border:1px #f5f5f5 solid}.uni-thumb uni-image[data-v-06308752]{width:100%;height:100%}.uni-media-box[data-v-06308752]{border-radius:%?12?%;overflow:hidden}.uni-media-box .uni-thumb[data-v-06308752]{margin:0;margin-left:4px;flex-shrink:1;width:33%;border-radius:0}.uni-media-box .uni-thumb[data-v-06308752]:first-child{margin:0}\r\n/* 内容 */.uni-content[data-v-06308752]{justify-content:space-between}\r\n/* 列表footer */.uni-footer[data-v-06308752]{justify-content:space-between;margin-top:%?24?%}.uni-footer-text[data-v-06308752]{font-size:%?24?%;color:#999;margin-left:5px}\r\n/* 标签 */.uni-tag[data-v-06308752]{flex-shrink:0;padding:0 5px;border:1px #c8c7cc solid;margin-right:10px;border-radius:%?6?%;background:#f8f8f8;color:#333;font-size:%?24?%}\r\n/* 链接 */.uni-link[data-v-06308752]{margin-left:10px;color:#333;text-decoration:underline}uni-page-body[data-v-06308752]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}body.?%PAGE?%[data-v-06308752]{background-color:#efeff4}.tips[data-v-06308752]{color:#67c23a;font-size:14px;line-height:40px;text-align:center;background-color:#f0f9eb;height:0;opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);transition:all .3s}.tips-ani[data-v-06308752]{-webkit-transform:translateY(0);transform:translateY(0);height:40px;opacity:1}.shop[data-v-06308752]{flex:1;display:flex;flex-direction:column;justify-content:space-between}.shop-picture[data-v-06308752]{width:110px;height:110px}.shop-picture-column[data-v-06308752]{width:100%;height:170px;margin-bottom:10px}.shop-price[data-v-06308752]{margin-top:5px;font-size:12px;color:#ff5a5f}.shop-price-text[data-v-06308752]{font-size:16px}.hot-tag[data-v-06308752]{background:#ff5a5f;border:none;color:#fff}.button-box[data-v-06308752]{height:30px;line-height:30px;font-size:12px;background:#007aff;color:#fff}.uni-link[data-v-06308752]{flex-shrink:0}.ellipsis[data-v-06308752]{display:flex;overflow:hidden}.uni-ellipsis-1[data-v-06308752]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uni-ellipsis-2[data-v-06308752]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.list .uni-list--waterfall[data-v-06308752]{display:flex;flex-direction:row;flex-wrap:wrap;padding:5px;box-sizing:border-box}.list .uni-list--waterfall[data-v-06308752] .uni-list-item--waterfall{width:50%;box-sizing:border-box}.list .uni-list--waterfall[data-v-06308752] .uni-list-item--waterfall .uni-list-item__container{padding:5px;flex-direction:column}',""]),t.exports=a},"4de1":function(t,a,e){var i=e("ea68");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1c15b38c",i,!0,{sourceMap:!1,shadowMode:!1})},"5f3a":function(t,a,e){"use strict";var i=e("4de1"),n=e.n(i);n.a},8968:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("e9c4");var n=i(e("dc68")),r=i(e("098b")),o=i(e("0fff")),s=i(e("0b4e")),l=i(e("b85c")),d=(i(e("b503")),{}),c={},u={components:{HMfilterDropdown:n.default,Goods:r.default,taskItem:o.default},data:function(){return{orderType:"",defaultSelected:[],filterData:[],demandtype:10003,TabCur:0,scrollLeft:0,custombar:this.CustomBar,navList:[],infoList:[],taskList:[]}},onLoad:function(t){console.log("onLoad========》"+t+JSON.stringify(t)),s.default.isNull(t.data)?s.default.show("缺少父级类目ID"):(d=JSON.parse(t.data),this.orderType=d.OrderType,s.default.isNull(orderType)&&s.default.show("orderType 不能为空"))},onShow:function(){console.log("onShow=================>"),this.reload()},methods:{reload:function(){var t=this;s.default.loading(),l.default.getHttpWithLocation("action=cataloglistbytypeid&catalogtypeid=10012&pageindex=0&pagesize=50&isquerymy=1&queryuserencryptid="+s.default.getUser(!0).EncryptID,(function(a){1==a.Status&&(t.navList=a.Data,t.navList.length>0&&t.reloadByID(t.navList[0].ID),s.default.hideLoading())}))},reloadByID:function(t){var a=this;s.default.loading(),l.default.getHttpWithLocation("action=orderlist&ordertype="+this.orderType+"&orderstatus="+t+"&orderuserencryptid="+s.default.getUser(!1).EncryptID+"&pageindex=0&pagesize=50&isquerymy=1&queryuserencryptid="+s.default.getUser(!0).EncryptID,(function(t){1==t.Status&&(a.taskList=t.Data,s.default.hideLoading())}))},updateClick:function(t){s.default.openPage("infoupdate",t)},deleteClick:function(t){var a=this;s.default.confirm("确定要删除？",(function(e){e&&(s.default.loading(),l.default.getHttpWithLocation("action=demand_delete&demandid="+t.ID+"&queryuserencryptid="+s.default.getUser(!1).EncryptID,(function(t){console.log("data"+t+JSON.stringify(t)),1==t.Status&&a.reload(),s.default.hideLoading()})))}))},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.defaultSelected=[];var a=t.currentTarget.dataset.tag;this.reloadByID(a.ID)},confirm:function(t){console.log(":"+t.index+JSON.stringify(t.index)+"--"+t.value+JSON.stringify(t.value)),""!=t.value&&this.reloadDataByCatalog(c.ID,t.value)},hrefTask:function(t){s.default.openPage("orderupdate",t)},hrefstoreDetail:function(t){uni.navigateTo({url:"storeDetail?item="+encodeURIComponent(JSON.stringify(t))})}}};a.default=u},a3ad:function(t,a,e){var i=e("f844");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("af2a75e4",i,!0,{sourceMap:!1,shadowMode:!1})},b273:function(t,a,e){"use strict";e.r(a);var i=e("4379"),n=e("f00c");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("5f3a"),e("2f72"),e("2aa3");var o=e("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"06308752",null,!1,i["a"],void 0);a["default"]=s.exports},ea68:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.collection[data-v-06308752]{min-height:100vh;background-color:#eee;overflow-x:hidden}.collection .nav[data-v-06308752]{z-index:99}.collection .goods[data-v-06308752]{display:flex;position:relative;margin-left:0;transition:.5s all;margin-top:%?90?%}.collection .goods .good[data-v-06308752]{flex:1}',""]),t.exports=a},f00c:function(t,a,e){"use strict";e.r(a);var i=e("8968"),n=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},f844:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cu-chat .cu-item > .main .content[data-v-06308752]{display:block;width:100%;padding:0}.cu-chat .cu-item > .main .content[data-v-06308752]::before{display:none}.cu-chat .cu-item > .main .content[data-v-06308752]::after{display:none}.cu-chat .cu-item .date[data-v-06308752]{height:40px;left:0;bottom:0;width:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 %?15?%}.cu-chat .cu-item .date uni-button[data-v-06308752]{margin-left:auto;margin-right:%?10?%}.cu-chat .cu-item > .main[data-v-06308752]{max-width:100%!important;min-width:100%!important}.cu-chat .cu-item > .cu-avatar[data-v-06308752]{width:35px!important;height:35px!important;border-radius:50%}.task[data-v-06308752]{width:100vw;display:flex;flex-flow:column}.task .cu-chat .cu-item[data-v-06308752]{margin:%?10?% %?10?% 0 %?10?%;padding:%?30?% %?15?% %?70?% %?15?%;border-radius:3px;background-color:#fff}.task .cu-chat .cu-item .main[data-v-06308752]{margin:0}.task .cu-chat .cu-item .main .content[data-v-06308752]{background-color:#fff}.task .cu-chat .cu-item .main .content .university[data-v-06308752]{width:100%;text-align:right;padding:0 %?15?%}.task .cu-chat .cu-item .main .content .item-header[data-v-06308752]{width:100%;display:flex;justify-content:flex-start;align-items:center}.task .cu-chat .cu-item .main .content .item-header .item-price[data-v-06308752]{margin-left:auto}.task .cu-chat .cu-item .main .content .item-header .item-title[data-v-06308752]{display:-webkit-box;\r\n  /*设置为弹性盒子*/-webkit-line-clamp:1;\r\n  /*最多显示1行*/overflow:hidden;\r\n  /*超出隐藏*/text-overflow:ellipsis;\r\n  /*超出显示为省略号*/-webkit-box-orient:vertical;word-break:break-all;\r\n  /*强制英文单词自动换行*/max-width:%?350?%}.task .cu-chat .cu-item .main .content .item-desc[data-v-06308752]{display:-webkit-box;\r\n  /*设置为弹性盒子*/-webkit-line-clamp:3;\r\n  /*最多显示1行*/overflow:hidden;\r\n  /*超出隐藏*/text-overflow:ellipsis;\r\n  /*超出显示为省略号*/-webkit-box-orient:vertical;word-break:break-all;\r\n  /*强制英文单词自动换行*/max-width:%?600?%}',""]),t.exports=a}}]);