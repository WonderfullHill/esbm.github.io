(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesuser-userinfo-userdetail"],{"0bec":function(t,a,e){var n=e("3385");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("33df12ba",n,!0,{sourceMap:!1,shadowMode:!1})},"0f4d":function(t,a,e){"use strict";var n=e("0bec"),i=e.n(n);i.a},"11f8":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mine"},[e("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("详情")])],2),e("v-uni-view",{staticClass:"head"},[e("v-uni-view",{staticClass:"cu-avatar round avatar",style:{backgroundImage:"url("+t.userImgUrl+")"}}),e("v-uni-view",{staticClass:"head-right"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"text-black text-bold text-xl"},[t._v(t._s(t.userItem["姓名"]))])],1),0==t.userItem.IsFav?e("v-uni-button",{staticClass:"cu-btn round shadow bg-yellow sm",staticStyle:{width:"120rpx"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.favClick()}}},[t._v("关注")]):t._e(),1==t.userItem.IsFav?e("v-uni-button",{staticClass:"cu-btn round shadow bg-yellow sm",staticStyle:{width:"150rpx"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.favClick()}}},[t._v("已关注")]):t._e()],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-button",{staticClass:"cu-btn bg-topic-theme radio",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hrefEdit.apply(void 0,arguments)}}},[t._v("联系他")]),e("v-uni-button",{staticClass:"cu-btn round shadow bg-black sm",staticStyle:{width:"150rpx",margin:"0.5rem"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.jubaoClick()}}},[t._v("举报")])],1)],1)],1),e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"avatar-name text-bold text-lg"},[t._v("入驻时间："+t._s(t.userItem["创建日期"]))]),e("v-uni-view",{staticClass:"avatar-tags",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.commentlistClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-tag bg-olive text-xs round"},[t._v("收到的评价")])],1),e("v-uni-view",{staticClass:"avatar-des text-df"},[t._v(t._s(t.userItem["企业介绍"]))])],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.TabCurs,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item",class:n==t.TabCur?"text-black text-bold cur":"text-grey",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a.name)+" "+t._s(a.num))])})),1),e("v-uni-view",{staticClass:"task",staticStyle:{position:"static"}},[e("v-uni-view",{staticClass:"cu-chat"},t._l(t.infoList,(function(a){return e("v-uni-view",{staticClass:"cu-item animation-bottom-top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hrefTaskDetail(a)}}},[e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"content shadow"},[e("v-uni-view",{staticClass:"item-header"},[e("v-uni-view",{staticClass:"item-title text-lg text-bold"},[t._v(t._s(a.title))]),1==a.IsTop?e("v-uni-button",{staticClass:"cu-btn round shadow bg-blue sm"},[t._v("置顶")]):t._e(),e("v-uni-view",{staticClass:"item-price"},[e("v-uni-text",{staticClass:"text-price text-red text-lg text-bold padding-sm"},[t._v(t._s(a.price))])],1)],1),e("v-uni-view",{staticClass:"item-desc text-gray text-sm"},[t._v(t._s(a.content))]),e("v-uni-view",{staticClass:"item-tag"},t._l(a.tags,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-tag bg-red sm round",class:"light-"+n},[t._v(t._s(a))])})),1),e("v-uni-view",{staticClass:"university"},[e("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(a.price))])],1)],1)],1),e("v-uni-view",{staticClass:"date"},[e("v-uni-text",{staticClass:"text-xs text-gray"},[t._v("发布时间:"+t._s(a.date))]),e("v-uni-button",{staticClass:"cu-btn round shadow bg-yellow sm",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.contactClick(a)}}},[t._v("联系TA")])],1)],1)})),1)],1)],1)},i=[]},"1e89":function(t,a,e){"use strict";e.r(a);var n=e("92da"),i=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=i.a},"24dc":function(t,a,e){var n=e("c789");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("846b933c",n,!0,{sourceMap:!1,shadowMode:!1})},3385:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain-box[data-v-c1a0ce48]{color:#222;padding:%?20?%;background-color:#fff}.contain-box .header-box[data-v-c1a0ce48]{display:flex}.contain-box .header-box .left[data-v-c1a0ce48]{flex:1;display:flex;align-items:center}.contain-box .header-box .left .head-img[data-v-c1a0ce48]{width:%?70?%;height:%?70?%;border-radius:50%}.contain-box .header-box .left .head-img uni-image[data-v-c1a0ce48]{width:%?70?%;height:%?70?%;border-radius:50%}.contain-box .header-box .left .info[data-v-c1a0ce48]{margin-left:%?15?%}.contain-box .header-box .left .info .name[data-v-c1a0ce48]{font-size:%?32?%;font-weight:550;margin-bottom:%?10?%}.contain-box .header-box .left .info .tip[data-v-c1a0ce48]{font-size:%?23?%;color:#bfbfbf}.contain-box .header-box .right[data-v-c1a0ce48]{display:flex;align-items:center}.contain-box .header-box .right .btn[data-v-c1a0ce48]{color:#fff;background:linear-gradient(90deg,#ff623e,#fcbc27);height:%?50?%;border-radius:%?25?%;font-size:%?25?%;display:flex;align-items:center;padding:0 %?20?%}.contain-box .header-box .right .btn .text[data-v-c1a0ce48]{margin-left:%?8?%}.contain-box .main-text[data-v-c1a0ce48]{margin-top:%?20?%;margin-bottom:%?20?%;font-size:%?26?%;font-weight:500;color:#222}.contain-box .img-list-box .row-box[data-v-c1a0ce48]{display:flex;justify-content:space-between;margin-bottom:2vw}.contain-box .img-list-box .row-box .column-box[data-v-c1a0ce48]{display:flex}.contain-box .img-list-box .row-box .column-box .img-single[data-v-c1a0ce48]{width:30vw;height:30vw}.contain-box .tag-list-box[data-v-c1a0ce48]{margin-bottom:%?20?%;display:flex;flex-wrap:wrap}.contain-box .tag-list-box uni-view[data-v-c1a0ce48]{margin-right:%?15?%;margin-bottom:%?15?%;background-color:#e6e6e6;color:#707070;height:%?40?%;border-radius:%?20?%;font-size:%?23?%;display:flex;align-items:center;justify-content:center;padding:0 %?20?%}.contain-box .handle-box[data-v-c1a0ce48]{display:flex;border-top:1px solid #f2f2f2;padding-top:%?20?%}.contain-box .handle-box uni-view[data-v-c1a0ce48]{flex:1;display:flex;justify-content:center;align-items:center}.contain-box .handle-box uni-view .label[data-v-c1a0ce48]{margin-right:%?10?%}',""]),t.exports=a},"4b24":function(t,a,e){var n=e("fd80");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("7e97653e",n,!0,{sourceMap:!1,shadowMode:!1})},"88e8":function(t,a,e){"use strict";e.r(a);var n=e("11f8"),i=e("1e89");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(c);e("8b39"),e("8bb4"),e("0f4d");var r=e("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"c1a0ce48",null,!1,n["a"],void 0);a["default"]=s.exports},"8b39":function(t,a,e){"use strict";var n=e("4b24"),i=e.n(n);i.a},"8bb4":function(t,a,e){"use strict";var n=e("24dc"),i=e.n(n);i.a},"92da":function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("e9c4"),e("14d9");var i=n(e("0b4e")),c=n(e("b85c")),r=(n(e("b503")),{data:function(){return{userImgUrl:"",userItem:{},infoList:[],TabCur:0,scrollLeft:0,TabCurs:[{id:0,name:"产品服务",num:0},{id:1,name:"求购需求",num:0}]}},onLoad:function(t){var a=this;if(console.log("onLoad========》"+t+JSON.stringify(t)),i.default.isNull(t.data))i.default.show("缺少父级类目ID");else{var e=JSON.parse(t.data);i.default.isNull(e.UserEncryptID)?i.default.show("缺少UserEncryptID"):(c.default.getUserInfoByUserEncryptID(e.UserEncryptID,(function(t){a.userItem=t,a.userImgUrl=c.default.getPicUrlByName(a.userItem.头像);var e=a.TabCurs[0];e.num=a.userItem.PublishedServiceCount;var n=a.TabCurs[1];n.num=a.userItem.PublishedDemandCount})),this.reloadDataByInfoType(e.UserEncryptID,"10231"))}},methods:{jubaoClick:function(t){c.default.jubaouser(this.userItem.ID,this.userItem["ID"],this.userItem["EncryptID"])},commentlistClick:function(){var t={CommentType:"13631",QueryUserEncryptID:this.userItem.EncryptID};i.default.openPage("../../pagescomment/commentlist",t)},favClick:function(){var t=this;if(i.default.getUser(!0)){var a="";a=1==this.userItem.IsFav?0:1,c.default.getHttpWithParam("action=favourite&targetid="+this.userItem.ID+"&favtype=12551&isfav="+a,(function(e){1==e.Status&&(t.userItem.IsFav=a)}))}},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1);var a="";a=0==this.TabCur?"10231":"10232",this.reloadDataByInfoType(this.userItem.EncryptID,a)},hrefEdit:function(){c.default.contact(this.userItem.ID,this.userItem.手机号)},hrefTaskDetail:function(t){console.log("item===>"+JSON.stringify(t)),i.default.openPage("/pagesinfo/infodetail",t)},contactClick:function(t){c.default.contact(t.发布用户,t.手机号)},reloadDataByInfoType:function(t,a){var e=this;i.default.loading(),c.default.getHttpWithParam("action=infolist&isquerymy=1&queryuserencryptid="+t+"&infotype="+a+"&ordertype=10001&istopload=1&pageindex=0&pagesize=50",(function(t){if(1==t.Status){var a=[];for(var n in t.Data.DemandList){var c=t.Data.DemandList[n],r={};r.ID=c.ID,r.title=c.需求标题,r.content=c.需求内容,r.price=c.需求价格,r.date=c.创建日期,r.手机号=c.手机号,r.发布用户=c.发布用户,a.push(r)}e.infoList=a}i.default.hideLoading()}))}}});a.default=r},c789:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cu-chat .cu-item > .main .content[data-v-c1a0ce48]{display:block;width:100%;padding:0}.cu-chat .cu-item > .main .content[data-v-c1a0ce48]::before{display:none}.cu-chat .cu-item > .main .content[data-v-c1a0ce48]::after{display:none}.cu-chat .cu-item .date[data-v-c1a0ce48]{height:40px;left:0;bottom:0;width:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 %?15?%}.cu-chat .cu-item .date uni-button[data-v-c1a0ce48]{margin-left:auto;margin-right:%?10?%}.cu-chat .cu-item > .main[data-v-c1a0ce48]{max-width:100%!important;min-width:100%!important}.cu-chat .cu-item > .cu-avatar[data-v-c1a0ce48]{width:35px!important;height:35px!important;border-radius:50%}.task[data-v-c1a0ce48]{width:100vw;display:flex;flex-flow:column}.task .cu-chat .cu-item[data-v-c1a0ce48]{margin:%?10?% %?10?% 0 %?10?%;padding:%?30?% %?15?% %?70?% %?15?%;border-radius:3px;background-color:#fff}.task .cu-chat .cu-item .main[data-v-c1a0ce48]{margin:0}.task .cu-chat .cu-item .main .content[data-v-c1a0ce48]{background-color:#fff}.task .cu-chat .cu-item .main .content .university[data-v-c1a0ce48]{width:100%;text-align:right;padding:0 %?15?%}.task .cu-chat .cu-item .main .content .item-header[data-v-c1a0ce48]{width:100%;display:flex;justify-content:flex-start;align-items:center}.task .cu-chat .cu-item .main .content .item-header .item-price[data-v-c1a0ce48]{margin-left:auto}.task .cu-chat .cu-item .main .content .item-header .item-title[data-v-c1a0ce48]{display:-webkit-box;\r\n  /*设置为弹性盒子*/-webkit-line-clamp:1;\r\n  /*最多显示1行*/overflow:hidden;\r\n  /*超出隐藏*/text-overflow:ellipsis;\r\n  /*超出显示为省略号*/-webkit-box-orient:vertical;word-break:break-all;\r\n  /*强制英文单词自动换行*/max-width:%?350?%}.task .cu-chat .cu-item .main .content .item-desc[data-v-c1a0ce48]{display:-webkit-box;\r\n  /*设置为弹性盒子*/-webkit-line-clamp:3;\r\n  /*最多显示1行*/overflow:hidden;\r\n  /*超出隐藏*/text-overflow:ellipsis;\r\n  /*超出显示为省略号*/-webkit-box-orient:vertical;word-break:break-all;\r\n  /*强制英文单词自动换行*/max-width:%?600?%}',""]),t.exports=a},fd80:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.mine .issue[data-v-c1a0ce48]{position:fixed;bottom:%?70?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mine .head[data-v-c1a0ce48]{width:100%;padding:%?20?% %?20?% %?10?% %?20?%;display:flex}.mine .head .avatar[data-v-c1a0ce48]{width:%?180?%;height:%?180?%}.mine .head .head-right[data-v-c1a0ce48]{flex:1;display:flex;padding:%?10?% %?20?%;flex-flow:column}.mine .head .head-right .top[data-v-c1a0ce48]{display:flex;justify-content:space-around;flex:1;padding:%?10?%}.mine .head .head-right .top uni-view[data-v-c1a0ce48]{width:100%;text-align:center}.mine .head .head-right .bottom[data-v-c1a0ce48]{flex:1}.mine .head .head-right .bottom uni-button[data-v-c1a0ce48]{width:100%;border-radius:%?1000?%}.mine .body[data-v-c1a0ce48]{padding:%?10?% %?20?% %?30?% %?20?%;border-bottom:%?1?% solid #eee}.mine .body uni-view[data-v-c1a0ce48]{margin-top:%?15?%}.nav .cu-item[data-v-c1a0ce48]{position:relative}.nav .cu-item.cur[data-v-c1a0ce48]{border-bottom:none;transition:.3s all}.nav .cu-item.cur[data-v-c1a0ce48]::after{content:")";width:%?30?%;height:%?8?%;border-radius:%?10000?% %?10000?% 0 0;position:absolute;background-color:#f8d347;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:0;margin:auto}',""]),t.exports=a}}]);