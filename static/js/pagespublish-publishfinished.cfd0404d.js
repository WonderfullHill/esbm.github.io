(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagespublish-publishfinished"],{"089d":function(e,t,i){"use strict";i.r(t);var a=i("ddea"),s=i("ef15");for(var n in s)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(n);i("d8d4");var o=i("f0c5"),l=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"88f22016",null,!1,a["a"],void 0);t["default"]=l.exports},1630:function(e,t,i){e.exports=i.p+"static/img/rev-a.8ff987dc.png"},"8ab8":function(e,t,i){e.exports=i.p+"static/img/py-black.aa121432.png"},c605:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.issueThing[data-v-88f22016]{position:relative;min-height:100vh;width:100vw;overflow:hidden}.issueThing .enter[data-v-88f22016]{position:absolute;bottom:0;width:100%}.issueThing .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title[data-v-88f22016]{display:flex}.issueThing .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title .text-title[data-v-88f22016]{width:70px;text-align:right}.cu-form-group .title[data-v-88f22016]{min-width:calc(4em + 15px)}',""]),e.exports=t},d072:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac1f"),i("5319"),i("00b4"),i("4d63"),i("c607"),i("2c3e"),i("25f0");var a={isNowTimeInTimeSpan:function(e,t){var i=s();return function(e,t,i){var a=!1,s=new Date(Date.parse(e)),n=new Date(Date.parse(t)),o=new Date(Date.parse(i));s>=n&&s<=o&&(a=!0);return a}(i,e,t)},compareTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s(),i=!1,a=new Date(Date.parse(e)),n=new Date(Date.parse(t));a>n&&(i=!0);return i},compareTimeNow:function(e){var t=!1,i=new Date(Date.parse(e)),a=new Date;i>a&&(t=!0);return t},getDateNow:s,dateAddDays:function(e,t){var i=new Date(e.replace(/-/g,"/")),a=new Date(1e3*(i/1e3+86400*t)),s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return s},getWeekIndex:function(){return(new Date).getDay()},getWeekStr:function(){var e="星期"+"日一二三四五六".charAt((new Date).getDay());return e}};function s(){var e=new Date,t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t}(e);return t}t.default=a},d8d4:function(e,t,i){"use strict";var a=i("ef12"),s=i.n(a);s.a},ddea:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"issueThing"},[a("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.title))])],2),e.isTask?e._e():a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[e._v("图片上传(第一张图将作为主图展示)")]),a("v-uni-view",{staticClass:"action"},[e._v(e._s(e.imgList.length)+"/9")])],1),e.isTask?e._e():a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e._l(e.imgList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":e.imgList[i]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ViewImage.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e.imgList[i].url,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.DelImg(0,i,t)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),e.imgList.length<9?a("v-uni-view",{staticClass:"solids",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ChooseImage(0,e.index)}}},[a("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):e._e()],2)],1),a("div",{staticClass:"cu-form-group",staticStyle:{display:"flex","flex-direction":"row","align-items":"center"}},[e._l(e.videolist,(function(t,s){return a("v-uni-view",{staticStyle:{position:"relative"}},[a("v-uni-image",{staticStyle:{width:"5rem",height:"5rem"},attrs:{src:i("8ab8")},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.playVideoClick(t)}}}),a("v-uni-image",{staticStyle:{width:"1rem",height:"1rem",position:"absolute",left:"0",top:"0"},attrs:{src:i("1630")},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.removeVideoClick(t,s)}}})],1)})),e.videolist.length<1?a("v-uni-button",{staticStyle:{width:"5rem",height:"5rem","background-color":"#18B566",color:"white","font-size":"1rem",display:"flex","justify-content":"center","align-items":"center"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.recordVideoClick()}}},[e._v("点击录像")]):e._e()],2),a("v-uni-form",[a("v-uni-view",{staticClass:"cu-form-group "},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.titlelabel))]),a("v-uni-input",{attrs:{placeholder:"请输入"+e.titlelabel,name:"input"},model:{value:e.infotitle,callback:function(t){e.infotitle=t},expression:"infotitle"}}),a("v-uni-text",{staticClass:"cuIcon-favorfill text-orange"})],1),1e4==e.isshowpriceinput?a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("价格")]),a("v-uni-input",{attrs:{placeholder:"输入价格 ",name:"input",type:"digit"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),void 0!=e.unitPrice&&"undefined"!=e.unitPrice&&"无"!=e.unitPrice?a("v-uni-view",[e._v(e._s(e.unitPrice))]):e._e(),a("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1):e._e(),13666==e.infoType?a("v-uni-view",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("加价幅度(元)")]),a("v-uni-input",{attrs:{placeholder:"加价幅度 ",name:"input",type:"number"},model:{value:e.priceadd,callback:function(t){e.priceadd=t},expression:"priceadd"}}),a("v-uni-text",{staticClass:"cuIcon-roundaddfill text-orange"})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("超时时间(分钟)")]),a("v-uni-input",{attrs:{placeholder:"超时时间 ",name:"input",type:"number"},model:{value:e.endtimeout,callback:function(t){e.endtimeout=t},expression:"endtimeout"}}),a("v-uni-text",{staticClass:"cuIcon-countdownfill text-orange"})],1)],1):e._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:10231==e.infoType,expression:"infoType==10231"}],staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("库存")]),a("v-uni-input",{attrs:{placeholder:"输入库存 ",name:"input",type:"digit"},model:{value:e.kucun,callback:function(t){e.kucun=t},expression:"kucun"}}),a("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1),a("v-uni-view",{staticClass:"cu-form-group  area",staticStyle:{position:"relative"}},[a("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"请输入"+e.contentlabel},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.textareaAInput.apply(void 0,arguments)}},model:{value:e.infocontent,callback:function(t){e.infocontent=t},expression:"infocontent"}}),a("v-uni-view",{staticClass:"zy-layout-between",staticStyle:{height:"2rem",position:"absolute",bottom:"0",left:"0",width:"95%"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.resetTextClick.apply(void 0,arguments)}}},[a("v-uni-view"),a("v-uni-view",{staticClass:"color-gray",staticStyle:{display:"flex","flex-direction":"row",height:"2rem"}},[a("v-uni-view",{staticClass:"cuIcon-delete"})],1)],1)],1),a("v-uni-view",{staticClass:"margin-top"},[a("v-uni-view",{staticClass:"cu-form-group "},[a("v-uni-view",{staticClass:"title"},[e._v("联系人")]),a("v-uni-input",{attrs:{placeholder:"请输入联系人",name:"input"},model:{value:e.selAddress["姓名"],callback:function(t){e.$set(e.selAddress,"姓名",t)},expression:"selAddress['姓名']"}}),a("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DialogModalAdd"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressChoose()}}},[e._v("选择已有联系方式")])],1),a("v-uni-view",{staticClass:"cu-form-group "},[a("v-uni-view",{staticClass:"title"},[e._v("联系电话")]),a("v-uni-input",{attrs:{placeholder:"请输入联系电话",name:"input"},model:{value:e.selAddress["电话"],callback:function(t){e.$set(e.selAddress,"电话",t)},expression:"selAddress['电话']"}}),a("v-uni-text",{staticClass:"cuIcon-phone text-orange"})],1),a("v-uni-view",{staticClass:"cu-form-group ",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCityClick()}}},[a("v-uni-view",{staticClass:"title"},[e._v("地区")]),e.selAddress["企业地址省份"].length>0?a("v-uni-input",{attrs:{name:"input",disabled:""}}):e._e(),e._v(e._s(e.selAddress["企业地址省份"])+"-"+e._s(e.selAddress["企业地址城市"])+"-"+e._s(e.selAddress["企业地址县区"])),0==e.selAddress["企业地址省份"].length?a("v-uni-input",{attrs:{placeholder:"请选择地区",name:"input",disabled:""}}):e._e(),a("v-uni-view",{staticStyle:{"background-color":"#18B566",color:"white",padding:"0.3rem 0.3rem","border-radius":"0.3rem"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getLocationClick.apply(void 0,arguments)}}},[e._v("点击定位"),a("v-uni-text",{staticClass:"cuIcon-location text-orange",staticStyle:{color:"white"}})],1)],1),a("v-uni-view",{staticClass:"cu-form-group "},[a("v-uni-view",{staticClass:"title"},[e._v("详细地址")]),a("v-uni-input",{attrs:{placeholder:"请输入详细地址",name:"input"},model:{value:e.selAddress["企业地址"],callback:function(t){e.$set(e.selAddress,"企业地址",t)},expression:"selAddress['企业地址']"}}),a("v-uni-text",{staticClass:"cuIcon-addressbook text-orange"})],1)],1),a("v-uni-view",{staticClass:"margin-top"},e._l(e.TypeList,(function(t,i){return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-form-group ",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.choosetypeClick(t)}}},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(t["属性名称"]))]),13759==t["属性值数据类型"]?a("v-uni-view",[e._v("多选")]):e._e(),12423==t["属性值数据类型"]?a("v-uni-input",{attrs:{placeholder:"请输入",type:"number",enable:"false",name:"input","data-id":"item.SelPropertyID"},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.propertyTextchange(t)}},model:{value:t.SelPropertyValue,callback:function(i){e.$set(t,"SelPropertyValue",i)},expression:"item.SelPropertyValue"}}):12427==t["属性值数据类型"]?a("v-uni-input",{attrs:{placeholder:"请输入",type:"digit",enable:"false",name:"input","data-id":"item.SelPropertyID"},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.propertyTextchange(t)}},model:{value:t.SelPropertyValue,callback:function(i){e.$set(t,"SelPropertyValue",i)},expression:"item.SelPropertyValue"}}):a("v-uni-input",{attrs:{placeholder:12425!=t["属性值数据类型"]?"请输入":"请选择",enable:"false",name:"input","data-id":"item.SelPropertyID"},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.propertyTextchange(t)}},model:{value:t.SelPropertyValue,callback:function(i){e.$set(t,"SelPropertyValue",i)},expression:"item.SelPropertyValue"}}),void 0!=t.unit["分类名称"]&&"undefined"!=t.unit["分类名称"]&&"无"!=t.unit["分类名称"]?a("v-uni-view",[e._v(e._s(t.unit["分类名称"]))]):e._e()],1),13759==t["属性值数据类型"]?a("v-uni-view",{staticClass:"cu-form-group ",staticStyle:{"flex-wrap":"wrap"}},e._l(t.children,(function(t,i){return a("v-uni-view",{staticStyle:{padding:"0.5rem"}},[a("v-uni-checkbox",{attrs:{checked:t.isChecked},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.propertyChecked(t)}}},[e._v(e._s(t.name))])],1)})),1):e._e()],1)})),1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"10231"==e.infoType,expression:"infoType=='10231'"}],staticClass:"margin-top"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showContactTypeClick(0)}}},[a("v-uni-view",{staticClass:"title"},[e._v("展示联系方式，扣费"+e._s(e.contactShowPricePublisher)+"元/次")]),e.isCheckReducePublish?a("v-uni-text",{staticClass:"cuIcon-roundcheck text-orange"}):a("v-uni-text",{staticClass:"cuIcon-round text-orange"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showContactTypeClick(1)}}},[a("v-uni-view",{staticClass:"title"},[e._v("查看联系方式,扣费咨询者"+e._s(e.contactShowPriceAsker)+"元/次")]),e.isCheckReduceAsk?a("v-uni-text",{staticClass:"cuIcon-roundcheck text-orange"}):a("v-uni-text",{staticClass:"cuIcon-round text-orange"})],1),10232==e.infoType&&1e4==e.isshowtuotuanshangjin?a("v-uni-view",{staticClass:"cu-form-group Affirm-invoice margin-top"},[a("v-uni-view",{staticClass:"title"},[e._v("托管赏金（可选）")]),a("v-uni-input",{attrs:{placeholder:"请托管赏金",name:"input",type:"number",maxlength:"7"},model:{value:e.appendMoney,callback:function(t){e.appendMoney=t},expression:"appendMoney"}})],1):e._e(),a("v-uni-view",{staticClass:"cu-form-group flex  justify-around  margin-top"},[10231==e.infoType?a("v-uni-button",{staticClass:"cu-btn animation-reverse margin-lg basis-sm shadow bg-olive",class:["animation-scale-downs"==e.animation?"animation-scale-down":""],attrs:{"data-class":"animation-scale-downs"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.publishInfo.apply(void 0,arguments)}}},[e._v("发布信息")]):e._e(),10232==e.infoType?a("v-uni-button",{staticClass:"cu-btn animation-reverse margin-lg basis-sm shadow bg-olive",class:["animation-scale-downs"==e.animation?"animation-scale-down":""],attrs:{"data-class":"animation-scale-downs"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.publishInfo.apply(void 0,arguments)}}},[e._v("发布需求")]):e._e(),13666==e.infoType?a("v-uni-button",{staticClass:"cu-btn animation-reverse margin-lg basis-sm shadow bg-olive",class:["animation-scale-downs"==e.animation?"animation-scale-down":""],attrs:{"data-class":"animation-scale-downs"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.publishInfo.apply(void 0,arguments)}}},[e._v("发布竞拍")]):e._e()],1)],1),e.loadModal?a("v-uni-view",{staticClass:"cu-load load-modal"},[a("v-uni-image",{attrs:{src:"/static/loading48.png",mode:"aspectFit"}}),a("v-uni-view",{staticClass:"gray-text"},[e._v("发布中...")])],1):e._e(),a("v-uni-view",{staticClass:"cu-modal",class:"DialogModalAdd"==e.modalNameADD?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[e._v("选择联系方式")]),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"padding-xl",staticStyle:{padding:"50rpx 20rpx"}},[a("v-uni-view",{staticClass:"concatType"},[a("v-uni-checkbox-group",{staticClass:"block",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.CheckboxChange.apply(void 0,arguments)}}},e._l(e.allConcatList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"text-title"},[a("v-uni-text",{staticClass:"text-gray text-bold padding-xs"},[e._v(e._s(t.name))])],1),a("v-uni-text",{staticClass:" text-olive",staticStyle:{"padding-left":"10rpx"}},[e._v(e._s(t.number))])],1),a("v-uni-checkbox",{staticClass:"round",attrs:{value:JSON.stringify(t)}})],1)})),1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[e._v("算了")]),a("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.enterModal.apply(void 0,arguments)}}},[e._v("选好了")])],1)],1)],1),a("selectAddress",{ref:"selectAddress",on:{selectAddress:function(t){arguments[0]=t=e.$handleEvent(t),e.successSelectAddress.apply(void 0,arguments)}}})],1)},s=[]},e2ca:function(e,t,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("e9c4"),i("d3b7"),i("159b"),i("14d9"),i("a434"),i("b64b"),i("c975"),i("acd8");a(i("b503"));var s=a(i("0b4e")),n=a(i("b85c")),o=a(i("d072")),l=a(i("84d9")),c=a(i("bc7e")),r=(uni.getRecorderManager(),{}),u={},d={},p={components:{selectAddress:c.default},data:function(){return{uploadFileObj:[],unitPrice:0,isshowtuotuanshangjin:1e4,isshowpriceinput:1e4,titlelabel:"标题",contentlabel:"详细描述",commision1:"",commision2:"",commision3:"",isSupportPay:!0,infoType:"",selAddressText:"请选择联系方式",selAddress:{"姓名":"","手机号":"","电话":"","企业地址省份":"","企业地址城市":"","企业地址县区":"","企业地址":""},kucun:0,TypeList:[],infotitle:"",infocontent:"",price:"",priceadd:"",starttime:o.default.getDateNow(),endtimeout:"",SeviceTypeName:"",animation:"",allConcatList:[{name:"QQ",number:"1509827684"},{name:"Phone",number:"17625495599"},{name:"WeChat",number:"wihkah-254"}],midConcatList:[],subConcatList:[],modalName:null,index:0,deleteAnimate:"",picker:["闲置","任务"],loadModal:!1,isTask:!1,imgList:[],modalNameADD:null,textareaAValue:"",textareaBValue:"",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],isCheckReducePublish:!1,isCheckReduceAsk:!1,isCheckVIP:!0,appendMoney:0,contactShowPricePublisher:0,contactShowPriceAsker:0,videolist:[],maxVideoCount:1,maxPictureCount:9,currentCatalog:{},parentCatalog1:{},parentCatalog2:{}}},onUnload:function(){s.default.notifyRegisterEventOff("addressChoosed"),s.default.notifyRegisterEventOff("addreddmap_choosed")},onLoad:function(e){var t=this;s.default.getUser(!0)&&(console.log("onLoad========》"+e+JSON.stringify(e)),s.default.isNull(e.data)?s.default.show("缺少父级类目ID"):(r=JSON.parse(e.data),this.title=r.分类名称,this.infoType=r.InfoType,s.default.isNull(this.infoType)&&(this.infoType=r.需求类型),n.default.getHttpWithParam("action=getparentcataloglist&catalogid="+r.ID,(function(e){t.currentCatalog=e.Data.CurrentCatalog,t.parentCatalog1=e.Data.ParentCatalog1,t.parentCatalog2=e.Data.ParentCatalog2,t.title=t.currentCatalog["分类名称"]+" - "+t.parentCatalog1["分类名称"]})),n.default.getHttpWithLocation("action=getpublishconfigbycatalogid&catalogid="+r.ID,(function(e){var i=e.Data;s.default.isNull(i["发布界面标题"])||(t.titlelabel=i["发布界面标题"]),t.isshowpriceinput=i["发布界面是否显示价格"],t.isshowtuotuanshangjin=i["发布界面是否显示托管金额"],s.default.isNull(i["发布界面详情"])||(t.contentlabel=i["发布界面详情"]),t.unitPrice=i["价格单位名称"],t.infoType=e.Data.发布信息类型})),n.default.getHttpWithParam("action=getinfocontactshowprice",(function(e){e.Data.forEach((function(e){12600==e["扣费方式"]&&(t.contactShowPricePublisher=e["价格"]),12601==e["扣费方式"]&&(t.contactShowPriceAsker=e["价格"])}))})),this.getlocation(),1==r.isUpdate?this.reload():n.default.getHttpWithLocation("action=getpropertylistbycatalogid&catalogid="+r.ID,(function(e){var i=e.Data;for(var a in i)i[a].SubCatalog={},i[a].SelPropertyValue="";t.TypeList=i}))))},methods:{propertyChecked:function(e){e.isChecked=!e.isChecked},getlocation:function(){var e=this;n.default.getLocationData((function(t){e.selAddress["企业地址省份"]=t.Province,e.selAddress["企业地址城市"]=t.City,e.selAddress["企业地址县区"]=t.District,e.selAddress["企业地址"]=t.Street+t.detail}))},getLocationClick:function(){var e=this;s.default.notifyRegisterEvent("addreddmap_choosed",(function(t){console.log("data=="+JSON.stringify(t)),e.selAddress["企业地址省份"]=t.province,e.selAddress["企业地址城市"]=t.city,e.selAddress["企业地址县区"]=t.area,t.address==t.name?e.selAddress["企业地址"]=t.address:e.selAddress["企业地址"]=t.address+t.name})),s.default.openPage("/pagesaddress/addressmap")},onCityClick:function(){this.$refs.selectAddress.show()},successSelectAddress:function(e){console.log(e),0==e.index?this.selAddress.企业地址省份=e.text:1==e.index?this.selAddress.企业地址城市=e.text:2==e.index&&(this.selAddress.企业地址县区=e.text)},resetTextClick:function(){var e=this;s.default.confirm("确定删除详情？",(function(t){1==t&&(e.infocontent="")}))},appendMonenyChanged:function(e){e.target.value?this.isCheckVIP=!1:this.isCheckVIP=!0},recordVideoClick:function(){var e=this;uni.chooseVideo({count:1,sourceType:["camera","album"],success:function(t){console.log(JSON.stringify(t)),e.videolist.push(t.tempFilePath);var i={filename:"",videourl:t.tempFilePath,isvideo:!0};i.filename="video"+e.uploadFileObj.length,e.uploadFileObj.push(i)}})},removeVideoClick:function(e,t){if(1!=r.isUpdate)this.videolist.splice(t,1),uni.removeSavedFile({filePath:e,complete:function(e){console.log("removeSavedFile===>"+e+JSON.stringify(e))}});else for(var i=0;i<this.uploadFileObj.length;i++){var a=this.uploadFileObj[i];if(a.filename==e.filename){this.uploadFileObj.splice(i,1);break}}},playVideoClick:function(e){s.default.openPage("/pagesvideo/videopreview",{src:e})},showContactTypeClick:function(e){this.appendMoney>0||("supportpay"==e?this.isSupportPay=!this.isSupportPay:0==e?(this.isCheckReducePublish=!this.isCheckReducePublish,this.isCheckReduceAsk=!1,this.isCheckVIP=!1):1==e?(this.isCheckReducePublish=!1,this.isCheckReduceAsk=!this.isCheckReduceAsk,this.isCheckVIP=!1):(this.isCheckReducePublish=!1,this.isCheckReduceAsk=!1,this.isCheckVIP=!this.isCheckVIP))},publishTask:function(e){this.Toggle(e,this.infoType)},publishInfo:function(e){this.Toggle(e,this.infoType)},Toggle:function(e,t){var i=this;if(1!=this.loadModal){var a=e.currentTarget.dataset.class;if(this.animation=a,this.infotitle.length<2)return s.default.show(this.titlelabel+"不能少于2个字"),void(this.animation="");if(1e4==this.isshowpriceinput&&0==this.price.length)return s.default.show("价格不能为空"),void(this.animation="");if(0==Object.keys(this.selAddress).length)return s.default.show("请选择地址"),void(this.animation="");if("13666"==this.infoType){if(s.default.isNull(this.starttime)||-1==this.starttime.indexOf(":"))return s.default.alert("请选择开始时间"),void(this.animation="");if(s.default.isNull(this.priceadd))return s.default.alert("请选择加价幅度"),void(this.animation="");if(s.default.isNull(this.endtimeout))return s.default.alert("请超时时间"),void(this.animation="")}this.LoadModal(e);for(var o=[],c=0;c<this.uploadFileObj.length;c++){var u=this.uploadFileObj[c];if(u.isvideo){if(-1!=u.videourl.indexOf(n.default.getHost()))continue;o.push({name:"video"+c,uri:u.videourl})}else{if(-1!=u.url.indexOf(n.default.getHost()))continue;o.push({name:"infopic"+c,uri:u.url})}}var p="",h=[];if(1==r.isUpdate)for(var v in d){var f={};f["id"]=v,f["propertyid"]=v,f["value"]=d[v]["ID"],h.push(f)}else for(var m in this.TypeList){var g=this.TypeList[m];p+=g.ID+","+g.SubCatalog.ID+",";var C={};if(C["id"]=g.PropertyNameCatalogID,C["propertyid"]=g.ID,C["value"]=g.SelPropertyID,13759==g.属性值数据类型){for(var y="",w=0;w<g.children.length;w++){var b=g.children[w];console.log("subitem.isChecked=="+b.isChecked),b.isChecked&&(y+=b["name"]+",")}C["value"]=y}h.push(C)}var k={};1==r.isUpdate?(k["action"]="info_update",k["infoid"]=r.InfoID,k.fileitemlist=JSON.stringify(this.uploadFileObj)):(k["action"]="info_insert",k["catalogid"]=r.ID),k["demandtype"]=t,k["content"]=this.infocontent,k["title"]=this.infotitle,k["subcatalogid"]=p,k["price"]=this.price,k["endtimeout"]=this.endtimeout,k["starttime"]=this.starttime,k["priceadd"]=this.priceadd,k["propertylist"]=JSON.stringify(h),k["kucun"]=this.kucun,k["unitprice"]=this.unitPrice;var x={};s.default.isNull(this.commision1)?x["commission1"]="0":x["commission1"]=parseFloat(this.commision1)/100,s.default.isNull(this.commision2)?x["commission2"]="0":x["commission2"]=parseFloat(this.commision2)/100,s.default.isNull(this.commision3)?x["commission3"]="0":x["commission3"]=parseFloat(this.commision3)/100,k["commission"]=JSON.stringify(x),k["contactshowtype"]="",this.isCheckReducePublish?k["contactshowtype"]="12600":this.isCheckReduceAsk&&(k["contactshowtype"]="12601"),k["appendmoney"]=this.appendMoney,"10231"==t||"13666"==t?(k["addrsendprovince"]=this.selAddress.企业地址省份,k["addrsendcity"]=this.selAddress.企业地址城市,k["addrsendarea"]=this.selAddress.企业地址县区,k["addrsenddistrice"]=this.selAddress.企业地址,k["sellername"]=this.selAddress.姓名,k["sellerphone"]=this.selAddress.电话):"10232"==t&&(k["addrbuyprovince"]=this.selAddress.企业地址省份,k["addrbuycity"]=this.selAddress.企业地址城市,k["addrbuyarea"]=this.selAddress.企业地址县区,k["addrbuydistrice"]=this.selAddress.企业地址,k["buyername"]=this.selAddress.姓名,k["buyerphone"]=this.selAddress.电话),n.default.uploadFilesWithParam(k,o,(function(e){if(i.loadModal=!1,1==e.Status)s.default.show("发布成功"),s.default.closePageToRoot(),i.appendMoney>0?s.default.delay(.3,(function(){l.default.orderPay("13624",i.appendMoney,"任务赏金托管",e.Data.demandid)})):i.isCheckVIP&&n.default.getVIPPriceList();else if(10001==e.Status){if(s.default.isPlatformWeiXinMPIOS())return void s.default.alert("今日发布次数已用完");s.default.confirm("今日发布次数已用完，是否购买？",(function(e){1==e&&(s.default.loading(),n.default.getHttpWithLocation("action=infopublishproductlist",(function(e){if(console.log("data"+e+JSON.stringify(e)),1==e.Status){var t=[];for(var i in e.Data){var a=e.Data[i];t.push("发布"+a.需求标题+"次("+a.需求价格+"元)")}s.default.showActionSheet(t,(function(t){if(-1!=t){var i=e.Data[t];s.default.show("选择了"+i.需求标题);var a={ShopID:"",ShopName:"",ProductList:[],Coupon:{}},n={};n.ProductName="购买发布"+i.需求标题+"次",n.ProductCount=1,n.ProductID=i.ID,n.ProductPrice=i.需求价格,a.ProductList.push(n),n.PropertyList=[];var o={OrderType:"12536"};o.ShopList=[a],s.default.openPage("/pagesorder/ConfirmOrder",o)}}))}s.default.hideLoading()})))}))}i.animation=""}))}},choosetypeClick:function(e){e.属性值数据类型+""=="12425"&&(e.isPublishChoosing=!0,e.CatalogID=e.PropertySystemValueID,n.default.getPropertyListByCatalogID(e.CatalogID,(function(t){var i=t.Data;if(i.length<=6){var a=[];for(var n in i){var o=i[n];a.push(o["name"])}s.default.showActionSheet(a,(function(t){var a=i[t].tagObject;u=a,e.SubCatalog=a,e.SelPropertyID=a.ID,e.SelPropertyValue=u.分类名称,d[e.ID]=a}))}else s.default.notifyRegisterEventOnce("publishing_choosedtype",(function(t){console.log("publishing_choosedtype====>"+JSON.stringify(t)),u=t,e.SubCatalog=t,e.SelPropertyID=t.ID,e.SelPropertyValue=u.分类名称,d[e.ID]=t})),s.default.openPage("publishchoosetype",e)})))},addressChoose:function(){var e=this;s.default.notifyRegisterEventOnce("addressChoosed",(function(t){e.selAddress=t,e.selAddressText=e.selAddress.姓名+"-"+e.selAddress.电话+"\n"+e.selAddress.企业地址省份+"-"+e.selAddress.企业地址城市+"-"+e.selAddress.企业地址县区+"\n"+e.selAddress.企业地址})),s.default.openPage("/pagesaddress/address",{isChoose:"1"})},propertyTextchange:function(e){console.log("propertyTextchange"+e.SelPropertyValue),e.SelPropertyID=e.SelPropertyValue,d[e.ID]={},d[e.ID].ID=e.SelPropertyValue},LoadModal:function(e){this.loadModal=!0},showModal:function(e){this.modalNameADD=e.currentTarget.dataset.target},hideModal:function(e){this.modalNameADD=null},enterModal:function(e){for(var t=0;t<this.midConcatList.length;t++)if(this.subConcatList.length){for(var i=!0,a=0;a<this.subConcatList.length;a++)this.midConcatList[t].name==this.subConcatList[a].name&&(i=!1);i&&this.subConcatList.push(this.midConcatList[t])}else this.subConcatList.push(this.midConcatList[t]);this.modalNameADD=null},deleteConcat:function(e){var t=e.currentTarget.dataset.id,i=e.currentTarget.dataset.class,a=this;console.log(i),this.deleteAnimate=i;var s=setTimeout((function(){a.subConcatList.splice(t,1),clearTimeout(s)}),500)},PickerChange:function(e){this.index=e.detail.value,1==this.index?this.isTask=!0:this.isTask=!1},ChooseImage:function(e,t,i){var a=this;uni.chooseImage({count:4,sizeType:["original","compressed"],success:function(t){for(var i in t.tempFilePaths){var s=t.tempFilePaths[i],n={"图片":"",url:s,filename:""};n.type=e,n.imgListindex=a.imgList.length,n.图片="infopic"+a.uploadFileObj.length,n.filename="infopic"+a.uploadFileObj.length,n.是否详情图=12504,a.imgList.push(n),a.uploadFileObj.push(n)}}})},ViewImage:function(e){console.log(""+type+JSON.stringify(item));var t=[];if(0==type)for(var i in this.imgList){var a=this.imgList[i];t.push(a.url)}else for(var s in this.imgDetailList){var n=this.imgDetailList[s];t.push(n.url)}uni.previewImage({urls:t,current:item.url})},DelImg:function(e,t,i){var a=this;uni.showModal({title:"提示",content:"确定要删除吗？",cancelText:"点错了",confirmText:"是的",success:function(s){if(s.confirm){for(var n=0;n<a.uploadFileObj.length;n++){var o=a.uploadFileObj[n];if(o.filename==i.filename){a.uploadFileObj.splice(n,1);break}}if(0==e&&(a.imgList.splice(t,1),0==t))if(a.delPicNameList.push(i.filename),a.imgList.length>0){var l=a.imgList[0];a.fengmian=l.filename,a.delPicNameList.push(l.filename)}else a.fengmian=""}}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},textareaBInput:function(e){this.textareaBValue=e.detail.value},CheckboxChange:function(e){var t=this.checkbox,i=e.detail.value;this.midConcatList=[],console.log("1:",this.midConcatList);for(var a=0;a<i.length;a++){var s=JSON.parse(i[a]);this.midConcatList.push(s)}console.log("2:",this.midConcatList);for(var n=0,o=t.length;n<o;++n){t[n].checked=!1;for(var l=0,c=i.length;l<c;++l)if(t[n].value==i[l]){t[n].checked=!0;break}}},change:function(e){this.starttime=e,console.log("-change事件:",e)}}};t.default=p},ef12:function(e,t,i){var a=i("c605");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("ff4f9642",a,!0,{sourceMap:!1,shadowMode:!1})},ef15:function(e,t,i){"use strict";i.r(t);var a=i("e2ca"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a}}]);