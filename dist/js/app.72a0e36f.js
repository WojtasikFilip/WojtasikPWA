(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b37ec":"b49f14f8","chunk-2d0e9b70":"552e3d64","chunk-2d221831":"a94fdca8","chunk-8f0c8848":"fcf9be65"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-8f0c8848":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b37ec":"31d6cfe0","chunk-2d0e9b70":"31d6cfe0","chunk-2d221831":"31d6cfe0","chunk-8f0c8848":"8c3b68be"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"43b0":function(e,t,n){e.exports=n.p+"img/android-chrome-192x192.05e1dd13.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{dense:"",dark:"",app:""}},[r("img",{staticClass:"mr-3",attrs:{src:n("43b0"),width:"40"}}),r("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v("vData")]),r("v-spacer")],1),r("v-main",[r("router-view",{attrs:{mitschriften:e.mitschriften}})],1)],1)},o=[],i=n("1da1"),c=(n("96cf"),n("bc3a")),s=n.n(c),u=n("1d25"),l={name:"App",data:function(){return{mitschriften:[],storedMitschriften:[],db:null,id:""}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMitschriften();case 2:return t.next=4,e.openDB();case 4:console.log(e.mitschriften),console.log(e.storedMitschriften);case 6:case"end":return t.stop()}}),t)})))()},methods:{fetchMitschriften:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s()({url:"http://127.0.0.1:3000/mitschriften",method:"GET"});case 2:n=t.sent,r=n.data,e.mitschriften=r;case 5:case"end":return t.stop()}}),t)})))()},openDB:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["a"])("mitschriftenDB",1,{upgrade:function(e){e.createObjectStore("mitschriften",{keyPath:"id"})}});case 2:e.db=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getStoredMitschriften:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.db.transaction("mitschriften","readwrite"),r=n.objectStore("mitschriften"),t.next=4,r.put(e.mitschriften);case 4:return t.next=6,n.done;case 6:return t.next=8,e.db.getAll("mitschriften");case 8:e.storedMitschriften=t.sent;case 9:case"end":return t.stop()}}),t)})))()},removeMitschrift:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.db.delete("mitschriften",e);case 2:t.getStoredMitschriften();case 3:case"end":return n.stop()}}),n)})))()}}},f=l,d=n("2877"),h=n("6544"),p=n.n(h),m=n("7496"),v=n("40dc"),b=n("f6c4"),g=n("2fa4"),w=n("2a7f"),k=Object(d["a"])(f,a,o,!1,null,null,null),y=k.exports;p()(k,{VApp:m["a"],VAppBar:v["a"],VMain:b["a"],VSpacer:g["a"],VToolbarTitle:w["a"]});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"text-center"},[n("div",{staticClass:"pa-5"},[n("h1",[e._v("Hallo!")]),n("h2",[e._v("Willkommen bei vData.")]),n("h2",[e._v("Mithilfe von vData können Sie")]),n("h2",[e._v("ein Tafelbild fotografieren und in Text umwandeln.")])]),n("div",[n("v-btn",{staticClass:"mb-5 mt-5",attrs:{outlined:"","x-large":"",width:"200",to:"/aufnahme"}},[e._v("AUFNAHME "),n("v-icon",{staticClass:"ml-3"},[e._v("mdi-image-plus")])],1),n("br"),n("v-btn",{staticClass:"mt-5",attrs:{outlined:"","x-large":"",width:"200",to:"/galerie"}},[e._v("GALERIE "),n("v-icon",{staticClass:"ml-3"},[e._v("mdi-image-multiple")])],1)],1)])},O=[],_={name:"Home"},C=_,A=n("8336"),E=n("a523"),S=n("132d"),M=Object(d["a"])(C,j,O,!1,null,null,null),T=M.exports;p()(M,{VBtn:A["a"],VContainer:E["a"],VIcon:S["a"]}),r["a"].use(x["a"]);var P=[{path:"/",name:"Home",component:T},{path:"/aufnahme",name:"Aufnahme",component:function(){return n.e("chunk-2d0e9b70").then(n.bind(null,"8f5a"))}},{path:"/galerie",name:"Galerie",component:function(){return n.e("chunk-8f0c8848").then(n.bind(null,"89dc"))}},{path:"/camera",name:"Camera",component:function(){return n.e("chunk-2d221831").then(n.bind(null,"cb51"))}},{path:"/bildmittext/:id",name:"BildText",props:!0,component:function(){return n.e("chunk-2d0b37ec").then(n.bind(null,"292a"))}}],R=new x["a"]({mode:"history",base:"/",routes:P}),B=R,N=n("f309");r["a"].use(N["a"]);var D=new N["a"]({}),V=n("98f5"),L=n("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:B,EasyCamera:V["a"],vuetify:D,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.72a0e36f.js.map