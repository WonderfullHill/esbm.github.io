(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesarticle-webview_fullscreen"],{"0b15":function(t,e,i){"use strict";i.r(e);var n=i("0c70"),a=i("90ef");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"7490a7ea",null,!1,n["a"],void 0);e["default"]=r.exports},"0c70":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zy-layout-column",staticStyle:{"background-color":"blue"}},[i("v-uni-view",{staticStyle:{"background-color":"#E9E9E9",width:"100vw","z-index":"99999",position:"fixed",top:"0"},style:{height:t.titleHeight+"px"}}),i("v-uni-web-view",{staticStyle:{position:"fixed","background-color":"white"},attrs:{id:"webView","webview-styles":t.webviewStyles,src:t.webUrl}}),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","background-color":"#E9E9E9",width:"100vw","z-index":"99999",position:"fixed",bottom:"0"},style:{height:t.navHeight}},[i("v-uni-view",{staticClass:"zy-layout-ChildCenter",staticStyle:{flex:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomClick("home")}}},[i("v-uni-image",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{src:"/static/image/home.png"}})],1),i("v-uni-view",{staticClass:"zy-layout-ChildCenter",staticStyle:{flex:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomClick("back")}}},[i("v-uni-image",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{src:"/static/image/back.png"}})],1),i("v-uni-view",{staticClass:"zy-layout-ChildCenter",staticStyle:{flex:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomClick("refresh")}}},[i("v-uni-image",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{src:"/static/image/refresh.png"}})],1)],1)],1)},a=[]},"113f":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ade3"));i("e9c4"),i("ac1f"),i("5319");var o,l=n(i("0b4e")),r=(n(i("b85c")),n(i("b503")),o={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},titleHeight:0,bottomSafeHeight:0,navHeight:44,title:"",webUrl:"",originUrl:""}},onBackPress:function(t){var e=getCurrentPages(),i=e[e.length-2];return i.$vm.fun(),t.from,!0},onLoad:function(t){l.default.isPlatformAppIOSiPad()&&console.log("plus.navigator.getUserAgent()=="+plus.navigator.getUserAgent());var e=uni.getSystemInfoSync(),i=(e.platform,e.statusBarHeight);console.log("statusBarHeight===>"+i),this.titleHeight=l.default.getStatusBar(),this.bottomSafeHeight=l.default.getBottomSafeHeight(),uni.getSystemInfo((function(t){console.log("data=>>"+JSON.stringify(t))}));console.log("data====>"+JSON.stringify(t));var n=l.default.getPageData(),a=l.default.getDataSync("version_fullscreenurl");l.default.isPlatformH5()?window.location.replace(a):this.webUrl=a,console.log("this.url="+this.webUrl),this.title=n.title}},(0,a.default)(o,"onBackPress",(function(){console.log("back====>"),this.back()})),(0,a.default)(o,"methods",{bottomClick:function(t){"home"==t?(void 0).loadURL(this.webUrl):"back"==t?(void 0).back():"refresh"==t&&(void 0).reload()},back:function(){l.default.isPlatformH5()&&history.go(-1)},webOpen:function(){l.default.isPlatformH5()?window.open(this.webUrl):l.default.openApp(this.webUrl)},refresh:function(){l.default.isPlatformH5()?document.getElementById("webView").contentWindow.reload():(void 0).reload()},close:function(){l.default.closePage()}}),o);e.default=r},"90ef":function(t,e,i){"use strict";i.r(e);var n=i("113f"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);