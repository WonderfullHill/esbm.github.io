(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesarticle-webview"],{"0d03":function(t,e,i){"use strict";i.r(e);var n=i("32c7"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"0f30":function(t,e,i){t.exports=i.p+"static/img/web_go.be22ff54.png"},2129:function(t,e,i){"use strict";i.r(e);var n=i("a136"),a=i("0d03");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var l=i("f0c5"),o=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"51620cb4",null,!1,n["a"],void 0);e["default"]=o.exports},25324:function(t,e,i){t.exports=i.p+"static/img/refresh_white.52296644.png"},"32c7":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("ac1f"),i("5319");var a=n(i("0b4e")),s=(n(i("b85c")),{data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},titleHeight:0,title:"",webUrl:"",originUrl:""}},onLoad:function(t){a.default.isPlatformAppIOSiPad()&&console.log("plus.navigator.getUserAgent()=="+plus.navigator.getUserAgent());var e=uni.getSystemInfoSync(),i=e.platform,n=e.statusBarHeight;console.log("statusBarHeight===>"+n),"android"===i?this.titleHeight=40+n:"ios"===i&&(this.titleHeight=44+n);console.log("data====>"+JSON.stringify(t));var s=a.default.getPageData(),l=decodeURIComponent(s.url);a.default.isPlatformH5()?window.location.replace(l):this.webUrl=l,console.log("this.url="+this.webUrl),this.title=s.title},onBackPress:function(){console.log("back====>"),this.back()},methods:{back:function(){a.default.isPlatformH5()&&history.go(-1)},webOpen:function(){a.default.isPlatformH5()?window.open(this.webUrl):a.default.openApp(this.webUrl)},refresh:function(){a.default.isPlatformH5()?document.getElementById("webView").contentWindow.reload():(void 0).reload()},close:function(){a.default.closePage()}}});e.default=s},7214:function(t,e,i){t.exports=i.p+"static/img/back_white.2f8825f7.png"},a136:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"zy-layout-column"},[n("v-uni-view",{staticClass:"zy-layout-between",staticStyle:{"z-index":"99999","background-color":"#ED1500",color:"white",width:"100%",position:"relative"},style:{height:t.titleHeight+"px"}},[n("v-uni-view",{staticClass:"zy-layout-between",staticStyle:{width:"100%",height:"2.8rem",position:"absolute",bottom:"0"}},[n("v-uni-view",{staticClass:"zy-layout-Row",staticStyle:{height:"100%","align-items":"center"}},[n("v-uni-view",{staticClass:" zy-layout-ChildCenter",staticStyle:{width:"4rem",height:"100%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"1.5rem",height:"1.3rem"},attrs:{src:i("7214")}})],1),n("v-uni-view",{staticStyle:{width:"6rem",height:"100%","align-items":"center",display:"flex"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"1.3rem",height:"1.2rem"},attrs:{src:i("f417")}})],1)],1),n("v-uni-view",[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:" zy-layout-ChildCenter",staticStyle:{width:"5rem",height:"100%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.webOpen.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"1.4rem",height:"1.3rem"},attrs:{src:i("0f30")}})],1),n("v-uni-view",{staticClass:" zy-layout-ChildCenter",staticStyle:{width:"5rem",height:"100%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.refresh.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"1.4rem",height:"1.3rem"},attrs:{src:i("25324")}})],1)],1)],1),n("v-uni-web-view",{staticStyle:{position:"fixed"},style:{top:t.titleHeight+"px",bottom:"-"+t.titleHeight+"px"},attrs:{id:"webView","webview-styles":t.webviewStyles,src:t.webUrl}})],1)},a=[]},f417:function(t,e){t.exports="data:image/png;base64,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"}}]);