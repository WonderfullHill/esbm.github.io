(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-issue"],{"5c66":function(t,i,e){"use strict";e.r(i);var s=e("8884"),a=e("f2e7");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("fcf1");var o=e("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"35db82f9",null,!1,s["a"],void 0);i["default"]=c.exports},8884:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"issue bg-gradual-Topic"},[e("cu-custom",{attrs:{bgImage:"",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("发布")])],2),e("v-uni-view",{staticClass:"step",class:1==t.showId?"showCard":"step-"+(2-t.showId),style:t.showId>1?"left:-100%;opacity:0;z-index:100;":""},[e("v-uni-view",{staticClass:"step-container"},[e("v-uni-view",{staticClass:"cu-form-group margin-top"},[e("v-uni-view",{staticClass:"title"},[t._v("发布类型")]),e("v-uni-picker",{attrs:{value:t.index,range:t.pickerIssue},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChangeIssue.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.pickerIssue[t.index]:"发布的类型"))])],1)],1),t.isTask?t._e():e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("物品类型")]),e("v-uni-picker",{attrs:{value:t.indexThing,range:t.pickerThing},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChangeThing.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.indexThing>-1?t.pickerThing[t.indexThing]:"物品的类型"))])],1)],1),e("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("是否全新")],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-df margin-right-sm"}),e("v-uni-switch",{class:t.shadow?"checked":"",attrs:{color:"#39B54A"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetShadow.apply(void 0,arguments)}}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"step",class:2==t.showId?"showCard":"step-"+(3-t.showId),style:t.showId>2?"left:-100%;opacity:0;z-index:100;":""},[e("v-uni-view",{staticClass:"step-container"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("标题")]),e("v-uni-input",{attrs:{placeholder:"输入标题",name:"input"},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}}),e("v-uni-text",{staticClass:"cuIcon-favorfill text-orange"})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("价格")]),e("v-uni-input",{attrs:{placeholder:"输入价格 < 10000",name:"input"},model:{value:t.price,callback:function(i){t.price=i},expression:"price"}}),e("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1),t.isTask?t._e():e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("原价")]),e("v-uni-input",{attrs:{placeholder:"输入原价 < 10000",name:"input"},model:{value:t.costPrice,callback:function(i){t.costPrice=i},expression:"costPrice"}}),e("v-uni-text",{staticClass:"cuIcon-moneybagfill text-orange"})],1),t.isTask?t._e():e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("保障")]),e("v-uni-input",{attrs:{placeholder:"例:有发票",name:"input"},model:{value:t.ensure,callback:function(i){t.ensure=i},expression:"ensure"}}),e("v-uni-text",{staticClass:"cuIcon-choicenessfill text-orange"})],1),t.isTask?t._e():e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-textarea",{staticStyle:{height:"10vh"},attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"请输入转手原因..."},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.textareaReson.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"step",class:3==t.showId?"showCard":"step-"+(4-t.showId),style:t.showId>3?"left:-100%;opacity:0;z-index:100;":""},[e("v-uni-view",{staticClass:"step-container"},[t._l(t.subConcatList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"cu-form-group animation-reverse",class:t.deleteAnimate==i.name?"animation-slide-left":""},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.name))]),e("v-uni-input",{attrs:{name:"input",value:i.number}}),e("v-uni-button",{staticClass:"cu-btn bg-red shadow",attrs:{"data-id":s,"data-class":i.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteConcat.apply(void 0,arguments)}}},[t._v("移除")])],1)})),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("标签")]),e("v-uni-input",{attrs:{placeholder:"添加标签",name:"input"},model:{value:t.tagText,callback:function(i){t.tagText=i},expression:"tagText"}}),e("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DialogModalAdd"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addTag.apply(void 0,arguments)}}},[t._v("添加")])],1),e("v-uni-view",{staticClass:"item-tag",staticStyle:{padding:"15rpx"}},t._l(t.tags,(function(i,s){return e("v-uni-view",{key:s,staticClass:"cu-tag bg-red sm round",class:"light-"+s,attrs:{"data-index":s},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteTag.apply(void 0,arguments)}}},[t._v(t._s(i))])})),1)],2)],1),t.isTask?t._e():e("v-uni-view",{staticClass:"step",class:4==t.showId?"showCard":"step-"+(5-t.showId),style:t.showId>4?"left:-100%;opacity:0;z-index:100;":""},[e("v-uni-view",{staticClass:"step-container"},[t.isTask?t._e():e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[t._v("图片上传")]),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/4")])],1),t.isTask?t._e():e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"bg-img",attrs:{"data-url":t.imgList[s]},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ViewImage.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.imgList[s],mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":s},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.DelImg.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<4?e("v-uni-view",{staticClass:"solids",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ChooseImage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)],1)],1),e("v-uni-view",{staticClass:"step",class:t.showId==t.sortId?"showCard":"step-"+(t.sortId+1-t.showId)},[e("v-uni-view",{staticClass:"step-container"},[e("v-uni-view",{staticClass:"cu-form-group area"},[e("v-uni-textarea",{staticStyle:{height:"60vh"},attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"请输入详细描述..."},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.textareaAInput.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"btnBox"},[e("v-uni-button",{staticClass:"cu-btn round lg bg-cyan shadow",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.prev.apply(void 0,arguments)}}},[t._v("上一步")]),e("v-uni-view",{staticClass:"mid"}),e("v-uni-button",{staticClass:"cu-btn round lg bg-yellow shadow",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnText))])],1),t.loadModal?e("v-uni-view",{staticClass:"cu-load load-modal"},[e("v-uni-image",{attrs:{src:"/static/loading48.png",mode:"aspectFit"}}),e("v-uni-view",{staticClass:"gray-text"},[t._v("发布中...")])],1):t._e()],1)},a=[]},"8dce":function(t,i,e){"use strict";(function(t){e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("14d9"),e("a434"),e("99af"),e("ac1f"),e("5319"),e("acd8");var s={data:function(){return{animation:"",sortId:5,btnText:"下一步",msgSort:["手机、电脑","拿快递、找跑腿"],allConcatList:[{name:"QQ",number:""},{name:"Phone",number:""},{name:"WeChat",number:""}],midConcatList:[],subConcatList:[],modalName:null,deleteAnimate:"",showId:1,pickerIssue:["闲置","任务"],pickerThing:["日用百货","可口美食","服饰鞋包","文化娱乐","个护化妆","电脑数码","图书杂志","其他"],index:0,indexThing:0,isTask:!1,checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalNameADD:null,textareaAValue:"",textareaBValue:"",textareaResonValue:"",tags:[],tagText:"",loadModal:!1,isInput:!1,detailSort:"",title:"",price:"",costPrice:"",ensure:"",information:{},shadow:!1}},mounted:function(){var i=this;t.callFunction({name:"selectConcat",data:{phone:this.$store.state.user.user.phone}}).then((function(t){0!=t.result.data.length&&(i.allConcatList=t.result.data[t.result.data.length-1].list)})).catch((function(t){uni.showModal({content:"操作失败：".concat(t.message),showCancel:!1})}))},methods:{LoadModal:function(t){var i=this;this.loadModal=!0,setTimeout((function(){i.loadModal=!1}),2e3)},showModal:function(t){this.modalNameADD=t.currentTarget.dataset.target},hideModal:function(t){this.modalNameADD=null},onInput:function(){this.isInput=!0},enterModal:function(i){for(var e=0;e<this.midConcatList.length;e++)if(this.subConcatList.length){for(var s=!0,a=0;a<this.subConcatList.length;a++)this.midConcatList[e].name==this.subConcatList[a].name&&(s=!1);s&&this.subConcatList.push(this.midConcatList[e])}else this.subConcatList.push(this.midConcatList[e]);if(console.log(this.subConcatList),this.isInput)try{var n=uni.getStorageSync("Auth"),o={phone:n.phone,list:this.allConcatList};t.callFunction({name:"addConcat",data:o}).then((function(t){})).catch((function(t){uni.showModal({content:"操作失败：".concat(t.message),showCancel:!1})}))}catch(i){uni.showToast({icon:"none",title:"数据异常",duration:1500})}this.modalNameADD=null},deleteConcat:function(t){var i=t.currentTarget.dataset.id,e=t.currentTarget.dataset.class,s=this;this.deleteAnimate=e;var a=setTimeout((function(){s.subConcatList.splice(i,1),s.deleteAnimate="",clearTimeout(a)}),500)},PickerChange:function(t){this.index=t.detail.value,1==this.index?this.isTask=!0:this.isTask=!1},ChooseImage:function(){var t=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){console.log("图片1",i),0!=t.imgList.length?t.imgList=t.imgList.concat(i.tempFilePaths):t.imgList=i.tempFilePaths}})},updateImage:function(){var i=this,e=this;this.information.imgList=[];for(var s=function(s){var a=i.imgList[s],n=e.$store.state.user.user.phone+Date.parse(new Date)+"good.jpg";t.uploadFile({filePath:a,cloudPath:n,onUploadProgress:function(t){console.log(t);Math.round(100*t.loaded/t.total)}}).then((function(t){console.log("上传：",t),e.information.imgList.push(t.fileID),i.ImagesComplete(s)}))},a=0;a<this.imgList.length;a++)s(a)},ImagesComplete:function(t){t==this.imgList.length-1&&this.issueFun()},ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var i=this;uni.showModal({title:"提示",content:"确定要删除吗？",cancelText:"点错了",confirmText:"是的",success:function(e){e.confirm&&i.imgList.splice(t.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value},textareaBInput:function(t){this.textareaBValue=t.detail.value},textareaReson:function(t){this.textareaResonValue=t.detail.value},CheckboxChange:function(t){var i=this.checkbox,e=t.detail.value;this.midConcatList=[],console.log("1:",this.midConcatList);for(var s=0;s<e.length;s++){var a=JSON.parse(e[s]);this.midConcatList.push(a)}console.log("2:",this.midConcatList);for(var n=0,o=i.length;n<o;++n){i[n].checked=!1;for(var c=0,r=e.length;c<r;++c)if(i[n].value==e[c]){i[n].checked=!0;break}}},PickerChangeIssue:function(t){this.index=t.detail.value,1==this.index?(this.isTask=!0,this.sortId=4):(this.isTask=!1,this.sortId=5)},PickerChangeThing:function(t){this.indexThing=t.detail.value},next:function(){0==this.index?this.showId<5?(this.showId=this.showId+1,5==this.showId&&(this.btnText="发布")):5==this.showId&&this.issueGood():1==this.index&&(this.showId<4?(this.showId=this.showId+1,4==this.showId&&(this.btnText="发布")):4==this.showId&&this.issueGood())},prev:function(){this.showId>1&&(this.showId=this.showId-1,this.showId<5&&(this.btnText="下一步"))},addTag:function(){""!=this.tagText.replace(/\s*/g,"")&&this.tagText.replace(/\s*/g,"").length<5?(this.tags.push(this.tagText.replace(/\s*/g,"")),this.tagText=""):uni.showToast({title:"标签格式错误~",icon:"none",duration:1500})},deleteTag:function(t){this.tags.splice(t.currentTarget.dataset.index,1)},issueGood:function(){0==this.index?this.issueThing():1==this.index&&this.issueTask()},issueThing:function(){var t=this.formatisTrue();"true"==t?this.updateImage():uni.showToast({title:t,icon:"none",duration:1500})},issueFun:function(){var i=this;this.loadModal=!0,this.information.phone=this.$store.state.user.user.phone,this.information.nickname=this.$store.state.user.user.nickname,this.information.title=this.title,this.information.titleSorts=this.pickerThing[this.indexThing],this.information.price=this.price,this.information.costPrice=this.costPrice,this.information.sorts=this.pickerIssue[this.index],this.information.detailSort=this.detailSort,this.information.ensure=this.ensure,this.information.textareaAValue=this.textareaAValue,this.information.textareaResonValue=this.textareaResonValue,this.information.tags=this.tags,this.information.look=0,this.information.isNew=this.shadow;var e=this.price%this.costPrice+"";this.information.rate=10*parseFloat(this.price/this.costPrice+"."+e.substring(0,2)),this.information.avatar=this.$store.state.user.user.avatar,this.information.university=this.$store.state.user.user.university,this.information.createTime=this.tick(),console.log(this.information),t.callFunction({name:"issueGood",data:this.information}).then((function(t){i.init(),i.loadModal=!1,i.showId=0,uni.showToast({title:"已完成~",duration:1500})})).catch((function(t){uni.showModal({content:"操作失败：".concat(t.message),showCancel:!1})}))},issueTask:function(){var i=this,e=this.formatisTrue();"true"==e?(this.loadModal=!0,this.information.auth={},this.information.auth.phone=this.$store.state.user.user.phone,this.information.auth.name=this.$store.state.user.user.nickname,this.information.auth.avatar=this.$store.state.user.user.avatar,this.information.auth.campus=this.$store.state.user.user.university,this.information.title=this.title,this.information.price=this.price,this.information.sorts=this.pickerIssue[this.index],this.information.detailSort=this.detailSort,this.information.textareaAValue=this.textareaAValue,this.information.tags=this.tags,this.information.createTime=this.tick(),t.callFunction({name:"issueTask",data:this.information}).then((function(t){i.init(),i.loadModal=!1,i.showId=0,uni.showToast({title:"已完成~",duration:1500})})).catch((function(t){uni.showModal({content:"操作失败：".concat(t.message),showCancel:!1})}))):uni.showToast({title:e,icon:"none",duration:1500})},formatisTrue:function(){return this.price=this.price.replace(/\s*/g,""),this.costPrice=this.costPrice.replace(/\s*/g,""),this.ensure=this.ensure.replace(/\s*/g,""),""==this.title.replace(/\s*/g,"")||this.title.length>30?"标题的格式错误~":""==this.price||this.price.length>5?"价格的格式错误~":""==this.textareaAValue.replace(/\s*/g,"")||this.textareaAValue.length>300?"描述的格式错误~":"true"},init:function(){this.index=0,this.indexThing=0,this.detailSort="",this.title="",this.price="",this.costPrice="",this.ensure="",this.shadow=!1,this.textareaResonValue="",this.subConcatList=[],this.tags=[],this.imgList=[],this.textareaAValue=""},tick:function(){var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.date=t.getDate(),this.hour=t.getHours()<10?"0"+t.getHours():t.getHours(),this.minute=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),this.second=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();var i=this.year+"/"+this.month+"/"+this.date+"/ "+this.hour+":"+this.minute+":"+this.second;return i},SetShadow:function(t){this.shadow=t.detail.value}}};i.default=s}).call(this,e("a9ff")["default"])},d03c:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.issue[data-v-35db82f9]{overflow:hidden;height:100vh;width:100vw;position:relative}.issue .showCard[data-v-35db82f9]{top:50%!important;width:85vw!important;height:70vh!important;z-index:99!important}.issue .btnBox[data-v-35db82f9]{width:100vw;position:fixed;bottom:5vh;z-index:999;height:%?100?%;display:flex;justify-content:center}.issue .btnBox .mid[data-v-35db82f9]{width:%?100?%}.issue .step[data-v-35db82f9]{position:absolute;top:50%;left:50%;border-radius:%?20?%;box-shadow:0 0 1px 0 #fb532c;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:85vw;height:70vh;display:flex;align-items:center;background-color:#eee;transition:.5s all}.issue .step .step-container[data-v-35db82f9]{width:100%}.issue .step .bg-white[data-v-35db82f9]{background-color:transparent}.issue .step-1[data-v-35db82f9]{z-index:99;top:50%;width:85vw;height:70vh}.issue .step-2[data-v-35db82f9]{z-index:88;top:51.5%;width:75vw;height:70vh}.issue .step-3[data-v-35db82f9]{z-index:77;top:53%;width:65vw;height:70vh}.issue .step-4[data-v-35db82f9]{z-index:66;top:54.5%;width:55vw;height:70vh}.issue .step-5[data-v-35db82f9]{z-index:55;top:56%;width:45vw;height:70vh}.issue .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title[data-v-35db82f9]{display:flex}.issue .cu-modal .cu-dialog .padding-xl .concatType .block .margin-top .title .text-title[data-v-35db82f9]{width:70px;text-align:right}.cu-form-group .title[data-v-35db82f9]{min-width:calc(4em + 15px)}.cu-form-group[data-v-35db82f9]{background-color:transparent}.cu-form-group + .cu-form-group[data-v-35db82f9]{border:none}',""]),t.exports=i},d5f1:function(t,i,e){var s=e("d03c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("22e00eab",s,!0,{sourceMap:!1,shadowMode:!1})},f2e7:function(t,i,e){"use strict";e.r(i);var s=e("8dce"),a=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);i["default"]=a.a},fcf1:function(t,i,e){"use strict";var s=e("d5f1"),a=e.n(s);a.a}}]);