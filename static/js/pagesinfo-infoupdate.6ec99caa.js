(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesinfo-infoupdate"],{1630:function(t,e,i){t.exports=i.p+"static/img/rev-a.8ff987dc.png"},3177:function(t,e,i){"use strict";i.r(e);var s=i("fdb7"),a=i("adc9");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("4de2");var o=i("f0c5"),l=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"056c43da",null,!1,s["a"],void 0);e["default"]=l.exports},"31d4":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.issueThing[data-v-056c43da]{position:relative;min-height:100vh;width:100vw;overflow:hidden}.issueThing .enter[data-v-056c43da]{position:absolute;bottom:0;width:100%}.issueThing .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title[data-v-056c43da]{display:flex}.issueThing .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title .text-title[data-v-056c43da]{width:70px;text-align:right}.cu-form-group .title[data-v-056c43da]{min-width:calc(4em + 15px)}',""]),t.exports=e},4167:function(t,e,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("14d9"),i("99af"),i("a434"),i("b64b"),i("c975"),i("acd8");var a=s(i("0b4e")),n=s(i("b85c")),o=s(i("84d9")),l=s(i("fb26")),c=(s(i("b503")),{}),u=(uni.getRecorderManager(),{data:function(){return{kucun:0,paiedMoney:0,commission1:"",commission2:"",commission3:"",infoState:"",picOriginlist:[],selSubCatalogDict:{},TypeList:[],infoStateText:"",infoStateStyle:"",infoType:"",infotitle:"",infocontent:"",price:"",uploadFileObj:[],delPicNameList:[],selAddressText:"请选择地址",selAddress:{},animation:"",allConcatList:[{name:"QQ",number:"1509827684"},{name:"Phone",number:"17625495599"},{name:"WeChat",number:"wihkah-254"}],midConcatList:[],subConcatList:[],modalName:null,index:0,deleteAnimate:"",picker:["闲置","任务"],loadModal:!1,isTask:!1,imgList:[],imgDetailList:[],modalNameADD:null,textareaAValue:"",textareaBValue:"",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],videolist:[]}},onUnload:function(){a.default.notifyRegisterEventOff("publishing_choosedtype"),a.default.notifyRegisterEventOff("addressChoosed")},onLoad:function(t){a.default.getUser(!0)&&(console.log("onLoad========》"+t+JSON.stringify(t)),a.default.isNull(t.data)?a.default.show("缺少父级类目ID"):(console.log("uploadFileObj="+this.uploadFileObj.length),c=JSON.parse(t.data),this.reload()))},methods:{reload:function(){var t=this;a.default.loading(),n.default.getHttpWithLocation("action=infodetail&infoid="+c.ID+"&isloadpropertyall=1",(function(e){e.Data.PublishUser;t.infoStateText=e.Data.infostatetext,t.infoStateStyle=e.Data.infostatestyle;var i=e.Data.InfoItem;c=e.Data.InfoItem,t.infoState=i.需求状态,t.infotitle=i.需求标题,t.price=i.需求价格,t.infocontent=i.需求内容,t.infoType=i.需求类型,t.paiedMoney=i.托管金额,t.kucun=i.库存,t.commission1=100*i.佣金一级,t.commission2=100*i.佣金二级,t.commission3=100*i.佣金三级,"10231"==t.infoType?t.title="我的服务":t.title="我的需求";var s=e.Data.piclist;t.uploadFileObj=[],a.default.isNull(i.需求封面)||(console.log("uploadFileObj===》？"+i.需求封面),t.uploadFileObj.push({filename:i.需求封面,"图片":i.需求封面,url:n.default.getPicUrlByName(i.需求封面)}),t.uploadFileObj=t.uploadFileObj.concat(s)),t.uploadFileObj=t.uploadFileObj.concat(e.Data.videolist);var o=[];for(var l in t.imgDetailList=[],a.default.isNull(i.需求封面)||o.push({"图片":i.需求封面,url:n.default.getHostFile()+i.需求封面,filename:i.需求封面}),e.Data.piclist){var u=e.Data.piclist[l];u.url=n.default.getHostFile()+u.图片,u.filename=u.图片,12503==u.是否详情图?t.imgDetailList.push(u):o.push(u)}t.imgList=o,t.videolist.splice(0);for(var r=0;r<e.Data.videolist.length;r++){var d=e.Data.videolist[r];d.index=r+1,d.url=n.default.getPicUrlByName(d.视频封面),d.isvideo=!0,d.videourl=n.default.getPicUrlByName(d.视频),d.filename=d.视频,t.videolist.push(d)}"10231"==t.infoType?(t.selAddress.姓名=i.卖家姓名,t.selAddress.电话=i.卖家手机号,t.selAddress.企业地址省份=i.卖家地址省份,t.selAddress.企业地址城市=i.卖家地址城市,t.selAddress.企业地址县区=i.卖家地址县区,t.selAddress.企业地址=i.卖家地址):(t.selAddress.姓名=i.买家姓名,t.selAddress.电话=i.买家手机号,t.selAddress.企业地址省份=i.收货地址省份,t.selAddress.企业地址城市=i.收货地址城市,t.selAddress.企业地址县区=i.收货地址县区,t.selAddress.企业地址=i.收货地址),t.updateReceiveAddressUI();var v=e.Data.InfoPropertyList;for(var f in v){var p=v[f];v[f].SelPropertyID="",v[f].SelPropertyValue=p.PropertyValueName}t.TypeList=v,a.default.hideLoading()}))},askPlatformClick:function(){var t=this;l.default.askPlatform(c.ID,(function(e){t.reload()}))},rejectClick:function(){var t=this;l.default.rejectService(c.ID,(function(e){t.reload()}))},revokeRefundClick:function(){var t=this;l.default.revokeRefund(c.ID,(function(e){t.reload()}))},appendMoneyClick:function(){var t=prompt("请输入追加的金额","");a.default.isNull(t)||(0!=t?o.default.orderPay("13624",t,"任务赏金托管",c.ID):a.default.show("追加金额不能为0"))},infoStateChangeClick:function(){var t=this;l.default.changeInfoState(c.ID,c,(function(e){t.reload()}))},infoRejectClick:function(){var t=this;l.default.rejectService(c.ID,(function(e){t.reload()}))},recordVideoClick:function(){var t=this;uni.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(JSON.stringify(e)),t.videolist.push(e.tempFilePath);var i={filename:"",videourl:e.tempFilePath,isvideo:!0};i.filename="video"+t.uploadFileObj.length,t.uploadFileObj.push(i)}})},removeVideoClick:function(t,e){for(var i=0;i<this.uploadFileObj.length;i++){var s=this.uploadFileObj[i];if(s.filename==t.filename){this.uploadFileObj.splice(i,1);break}}this.videolist.splice(e,1),uni.removeSavedFile({filePath:t,complete:function(t){console.log("removeSavedFile===>"+t+JSON.stringify(t))}})},playVideoClick:function(t){a.default.openPage("/pagesvideo/videopreview",{src:t.videourl})},publishTask:function(t){this.Toggle(t,this.infoType)},publishInfo:function(t){this.Toggle(t,this.infoType)},Toggle:function(t,e){var i=this,s=t.currentTarget.dataset.class;if(this.animation=s,this.infotitle.length<3)return a.default.show("标题不能少于3个字"),void(this.animation="");if(this.infocontent.length<6)return a.default.show("描述内容不能少于6个字"),void(this.animation="");if(0==this.price.length)return a.default.show("价格不能为空"),void(this.animation="");if(0==Object.keys(this.selAddress).length)return a.default.show("请选择地址"),void(this.animation="");this.LoadModal(t);for(var o=[],l=0;l<this.uploadFileObj.length;l++){var u=this.uploadFileObj[l];if(u.isvideo){if(-1!=u.videourl.indexOf(n.default.getHost()))continue;o.push({name:"video"+l,uri:u.videourl})}else{if(-1!=u.url.indexOf(n.default.getHost()))continue;o.push({name:"infopic"+l,uri:u.url})}}console.log("selSubCatalogDict"+JSON.stringify(this.selSubCatalogDict));var r=[];for(var d in this.selSubCatalogDict){var v={};v["id"]=d,v["propertyid"]=d,v["value"]=this.selSubCatalogDict[d]["ID"],r.push(v)}console.log("this.delPicNameList"+this.delPicNameList+"===="+JSON.stringify(this.delPicNameList));var f={action:"info_update"};f["kucun"]=this.kucun,f["infoid"]=c.ID,f["demandtype"]=e,f["content"]=this.infocontent,f["title"]=this.infotitle,f["catalogid"]=c.ID,f["subcatalogid"]="",f["price"]=this.price,f["propertylist"]=JSON.stringify(r),f.fileitemlist=JSON.stringify(this.uploadFileObj);var p={};a.default.isNull(this.commission1)?p["commission1"]="0":p["commission1"]=parseFloat(this.commission1)/100,a.default.isNull(this.commission2)?p["commission2"]="0":p["commission2"]=parseFloat(this.commission2)/100,a.default.isNull(this.commission3)?p["commission3"]="0":p["commission3"]=parseFloat(this.commission3)/100,f["commission"]=JSON.stringify(p),"10231"==e?(f["addrsendprovince"]=this.selAddress.企业地址省份,f["addrsendcity"]=this.selAddress.企业地址城市,f["addrsendarea"]=this.selAddress.企业地址县区,f["addrsenddistrice"]=this.selAddress.企业地址,f["sellername"]=this.selAddress.姓名,f["sellerphone"]=this.selAddress.电话):"10232"==e&&(f["addrbuyprovince"]=this.selAddress.企业地址省份,f["addrbuycity"]=this.selAddress.企业地址城市,f["addrbuyarea"]=this.selAddress.企业地址县区,f["addrbuydistrice"]=this.selAddress.企业地址,f["buyername"]=this.selAddress.姓名,f["buyerphone"]=this.selAddress.电话),n.default.uploadFilesWithParam(f,o,(function(t){1==t.Status&&(a.default.show("更新成功"),a.default.closePage()),i.animation=""}))},propertyTextchange:function(t){console.log("propertyTextchange"+t.SelPropertyValue),t.SelPropertyID=t.SelPropertyValue,this.selSubCatalogDict[t.ID]={},this.selSubCatalogDict[t.ID].ID=t.SelPropertyValue},choosetypeClick:function(t){var e=this;t.属性值数据类型+""=="12425"&&(t.isPublishChoosing=!0,t.CatalogID=t.PropertySystemValueID,a.default.notifyRegisterEventOnce("publishing_choosedtype",(function(i){console.log("publishing_choosedtype====>"+JSON.stringify(i)),t.SelPropertyID=i.ID,t.SelPropertyValue=i.分类名称,e.selSubCatalogDict[t.ID]=i})),a.default.openPage("../publish/publishchoosetype",t))},addressChoose:function(){var t=this;a.default.notifyRegisterEventOnce("addressChoosed",(function(e){t.selAddress=e,t.updateReceiveAddressUI()})),a.default.openPage("../address/address",{isChoose:"1"})},updateReceiveAddressUI:function(){this.selAddressText=this.selAddress.姓名+"-"+this.selAddress.电话+"\n"+this.selAddress.企业地址省份+"-"+this.selAddress.企业地址城市+"-"+this.selAddress.企业地址县区+"\n"+this.selAddress.企业地址},LoadModal:function(t){var e=this;this.loadModal=!0,setTimeout((function(){e.loadModal=!1}),2e3)},showModal:function(t){this.modalNameADD=t.currentTarget.dataset.target},hideModal:function(t){this.modalNameADD=null},enterModal:function(t){for(var e=0;e<this.midConcatList.length;e++)if(this.subConcatList.length){for(var i=!0,s=0;s<this.subConcatList.length;s++)this.midConcatList[e].name==this.subConcatList[s].name&&(i=!1);i&&this.subConcatList.push(this.midConcatList[e])}else this.subConcatList.push(this.midConcatList[e]);this.modalNameADD=null},deleteConcat:function(t){var e=t.currentTarget.dataset.id,i=t.currentTarget.dataset.class,s=this;console.log(i),this.deleteAnimate=i;var a=setTimeout((function(){s.subConcatList.splice(e,1),clearTimeout(a)}),500)},PickerChange:function(t){this.index=t.detail.value,1==this.index?this.isTask=!0:this.isTask=!1},ChooseImage:function(t,e,i){var s=this,a=4;1==t&&(a=10),uni.chooseImage({count:a,sizeType:["original","compressed"],success:function(e){for(var i in console.log("ChooseImage="+JSON.stringify(e)),e.tempFilePaths){var a=e.tempFilePaths[i],n={"图片":"",url:a,filename:""};n.type=t,n.imgListindex=s.imgList.length,n.图片="infopic"+s.uploadFileObj.length,n.filename="infopic"+s.uploadFileObj.length,n.是否详情图=12504,s.imgList.push(n),s.uploadFileObj.push(n)}}})},ViewImage:function(t,e){console.log(""+t+JSON.stringify(e));var i=[];if(0==t)for(var s in this.imgList){var a=this.imgList[s];i.push(a.url)}else for(var n in this.imgDetailList){var o=this.imgDetailList[n];i.push(o.url)}uni.previewImage({urls:i,current:e.url})},DelImg:function(t,e,i){var s=this;uni.showModal({title:"提示",content:"确定要删除吗？",cancelText:"点错了",confirmText:"是的",success:function(a){if(a.confirm){for(var n=0;n<s.uploadFileObj.length;n++){var o=s.uploadFileObj[n];if(o.filename==i.filename){s.uploadFileObj.splice(n,1);break}}if(0==t&&(s.imgList.splice(e,1),0==e))if(s.delPicNameList.push(i.filename),s.imgList.length>0){var l=s.imgList[0];s.fengmian=l.filename,s.delPicNameList.push(l.filename)}else s.fengmian=""}}})},textareaAInput:function(t){this.textareaAValue=t.detail.value},textareaBInput:function(t){this.textareaBValue=t.detail.value},CheckboxChange:function(t){var e=this.checkbox,i=t.detail.value;this.midConcatList=[],console.log("1:",this.midConcatList);for(var s=0;s<i.length;s++){var a=JSON.parse(i[s]);this.midConcatList.push(a)}console.log("2:",this.midConcatList);for(var n=0,o=e.length;n<o;++n){e[n].checked=!1;for(var l=0,c=i.length;l<c;++l)if(e[n].value==i[l]){e[n].checked=!0;break}}}}});e.default=u},"4de2":function(t,e,i){"use strict";var s=i("8c6b"),a=i.n(s);a.a},"8ab8":function(t,e,i){t.exports=i.p+"static/img/py-black.aa121432.png"},"8c6b":function(t,e,i){var s=i("31d4");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("f6f82db6",s,!0,{sourceMap:!1,shadowMode:!1})},adc9:function(t,e,i){"use strict";i.r(e);var s=i("4167"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},fdb7:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"issueThing"},[s("cu-custom",{attrs:{bgColor:"bg-topic-theme",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),s("v-uni-view",{staticClass:"choose-adress",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addressChoose.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"cu-list bg-white menu card-menu shadow-custom"},[s("v-uni-view",{staticClass:"cu-item arrow"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-topic text-lg"},[t._v(t._s(t.selAddressText))]),s("v-uni-text",{staticClass:" text-grey text-sm"})],1)],1)],1)],1),t.isTask?t._e():s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[t._v("图片上传")]),s("v-uni-view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/4")])],1),t.isTask?t._e():s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(e,i){return s("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":e.url},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ViewImage(0,e)}}},[s("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}),s("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.DelImg(0,i,e)}}},[s("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<9?s("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage(0,t.index)}}},[s("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),s("div",{staticClass:"cu-form-group",staticStyle:{display:"flex","flex-direction":"row","align-items":"center"}},[t._l(t.videolist,(function(e,a){return s("v-uni-view",{staticStyle:{position:"relative"}},[s("v-uni-image",{staticStyle:{width:"5rem",height:"5rem"},attrs:{src:i("8ab8")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.playVideoClick(e)}}}),s("v-uni-image",{staticStyle:{width:"1rem",height:"1rem",position:"absolute",left:"0",top:"0"},attrs:{src:i("1630")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeVideoClick(e,a)}}})],1)})),t.videolist.length<1?s("v-uni-button",{staticStyle:{width:"5rem",height:"5rem","background-color":"#18B566",color:"white","font-size":"1rem",display:"flex","justify-content":"center","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.recordVideoClick()}}},[t._v("点击录像")]):t._e()],2),s("v-uni-form",[s("v-uni-view",{staticClass:"cu-form-group "},[s("v-uni-view",{staticClass:"title"},[t._v("标题")]),s("v-uni-input",{attrs:{placeholder:"输入标题",name:"input"},model:{value:t.infotitle,callback:function(e){t.infotitle=e},expression:"infotitle"}}),s("v-uni-text",{staticClass:"cuIcon-favorfill text-orange"})],1),s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[t._v("价格")]),s("v-uni-input",{attrs:{placeholder:"输入价格 ",name:"input",type:"digit"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),s("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1),s("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:10231==t.infoType,expression:"infoType==10231"}],staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[t._v("库存")]),s("v-uni-input",{attrs:{placeholder:"输入库存 ",name:"input",type:"digit"},model:{value:t.kucun,callback:function(e){t.kucun=e},expression:"kucun"}}),s("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1),s("v-uni-view",{staticClass:"cu-form-group  area"},[s("v-uni-textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"请输入详细描述..."},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaAInput.apply(void 0,arguments)}},model:{value:t.infocontent,callback:function(e){t.infocontent=e},expression:"infocontent"}})],1),s("v-uni-view",{staticClass:"margin-top"},[s("v-uni-view",{staticClass:"cu-form-group "},[s("v-uni-view",{staticClass:"title"},[t._v("一级代理返佣奖励")]),s("v-uni-input",{attrs:{placeholder:"0-90",name:"input",type:"number",maxlength:"2"},model:{value:t.commission1,callback:function(e){t.commission1=e},expression:"commission1"}}),t._v("%"),s("v-uni-text",{staticClass:"cuIcon-moneybag text-orange"})],1),s("v-uni-view",{staticClass:"cu-form-group "},[s("v-uni-view",{staticClass:"title"},[t._v("二级代理返佣奖励")]),s("v-uni-input",{attrs:{placeholder:"0-90",name:"input",type:"number",maxlength:"2"},model:{value:t.commission2,callback:function(e){t.commission2=e},expression:"commission2"}}),t._v("%"),s("v-uni-text",{staticClass:"cuIcon-moneybag text-orange"})],1),s("v-uni-view",{staticClass:"cu-form-group "},[s("v-uni-view",{staticClass:"title"},[t._v("三级代理返佣奖励")]),s("v-uni-input",{attrs:{placeholder:"0-90",name:"input",type:"number",maxlength:"2"},model:{value:t.commission3,callback:function(e){t.commission3=e},expression:"commission3"}}),t._v("%"),s("v-uni-text",{staticClass:"cuIcon-moneybag text-orange"})],1)],1),s("v-uni-view",{staticClass:"margin-top"},[s("v-uni-view",{staticClass:"cu-form-group "},[s("v-uni-view",{staticClass:"title"},[t._v("已托管赏金")]),s("v-uni-input",{attrs:{placeholder:"",name:"input",type:"number",disabled:"true"},model:{value:t.paiedMoney,callback:function(e){t.paiedMoney=e},expression:"paiedMoney"}}),s("v-uni-text",{staticClass:"cuIcon-moneybag text-orange"})],1)],1),s("v-uni-view",{staticClass:"cu-form-group "},[10232==t.infoType&&10008!=t.infoState?s("v-uni-view",{staticStyle:{"justify-content":"flex-end"}},[s("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.appendMoneyClick.apply(void 0,arguments)}}},[t._v("追加赏金")])],1):t._e(),10232==t.infoType&&10006==t.infoState?s("v-uni-view",{staticStyle:{"justify-content":"flex-end"}},[s("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.infoRejectClick.apply(void 0,arguments)}}},[t._v("拒绝验收，退款")])],1):t._e(),10232==t.infoType&&10009==t.infoState?s("v-uni-view",{staticStyle:{"justify-content":"flex-end"}},[s("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.askPlatformClick.apply(void 0,arguments)}}},[t._v("申请平台介入")])],1):t._e(),10232==t.infoType&&10009==t.infoState?s("v-uni-view",{staticStyle:{"justify-content":"flex-end"}},[s("v-uni-button",{staticClass:"cu-btn bg-blue round shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.revokeRefundClick.apply(void 0,arguments)}}},[t._v("撤销退款，继续合作")])],1):t._e()],1),s("v-uni-view",{staticClass:"margin-top"},t._l(t.TypeList,(function(e,i){return s("v-uni-view",{staticClass:"cu-form-group ",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choosetypeClick(e)}}},[s("v-uni-view",{staticClass:"title"},[t._v(t._s(e.PropertyName))]),s("v-uni-input",{attrs:{placeholder:0==e.SubCatalogLevelCount?"请输入":"请选择","data-id":"item.SelPropertyID",enable:"false",name:"input"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.propertyTextchange(e)}},model:{value:e.SelPropertyValue,callback:function(i){t.$set(e,"SelPropertyValue",i)},expression:"item.SelPropertyValue"}})],1)})),1),s("v-uni-view",{staticClass:"cu-form-group flex  justify-around  margin-top"},[s("v-uni-button",{staticClass:"cu-btn animation-reverse margin-lg basis-sm shadow bg-olive",class:["animation-scale-downs"==t.animation?"animation-scale-down":""],attrs:{"data-class":"animation-scale-downs"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.publishInfo.apply(void 0,arguments)}}},[t._v("修改")]),10232==t.infoType?s("v-uni-view",{staticStyle:{"justify-content":"flex-end"}},[s("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",style:t.infoStateStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.infoStateChangeClick.apply(void 0,arguments)}}},[t._v(t._s(t.infoStateText))])],1):t._e()],1)],1),t.loadModal?s("v-uni-view",{staticClass:"cu-load load-modal"},[s("v-uni-image",{attrs:{src:"/static/loading48.png",mode:"aspectFit"}}),s("v-uni-view",{staticClass:"gray-text"},[t._v("发布中...")])],1):t._e(),s("v-uni-view",{staticClass:"cu-modal",class:"DialogModalAdd"==t.modalNameADD?"show":""},[s("v-uni-view",{staticClass:"cu-dialog"},[s("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[s("v-uni-view",{staticClass:"content"},[t._v("选择联系方式")]),s("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),s("v-uni-view",{staticClass:"padding-xl",staticStyle:{padding:"50rpx 20rpx"}},[s("v-uni-view",{staticClass:"concatType"},[s("v-uni-checkbox-group",{staticClass:"block",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.CheckboxChange.apply(void 0,arguments)}}},t._l(t.allConcatList,(function(e,i){return s("v-uni-view",{key:i,staticClass:"cu-form-group margin-top"},[s("v-uni-view",{staticClass:"title"},[s("v-uni-view",{staticClass:"text-title"},[s("v-uni-text",{staticClass:"text-gray text-bold padding-xs"},[t._v(t._s(e.name))])],1),s("v-uni-text",{staticClass:" text-olive",staticStyle:{"padding-left":"10rpx"}},[t._v(t._s(e.number))])],1),s("v-uni-checkbox",{staticClass:"round",attrs:{value:JSON.stringify(e)}})],1)})),1)],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("算了")]),s("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.enterModal.apply(void 0,arguments)}}},[t._v("选好了")])],1)],1)],1)],1)},a=[]}}]);