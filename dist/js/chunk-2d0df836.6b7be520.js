(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df836"],{"89dc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("h1",[t._v("Hier finden Sie alle Tafelbilder")]),i("v-btn",{attrs:{to:"/",outlined:""}},[t._v("Home")]),i("v-container",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.mitschriften,(function(e){return i("div",{key:e.id},[i("img",{attrs:{src:e.img,alt:"Bild der Mitschrift",width:"400"}}),i("h4",[t._v("Mitschrift vom "+t._s(e.date))]),i("v-btn",{staticClass:"blue--text",attrs:{text:"",to:"/bildmittext/"+e.id}},[t._v(" Ansehen")]),i("v-btn",{staticClass:"red--text",attrs:{text:""},on:{click:function(i){return t.removeMitschrift(e.id)}}},[t._v(" Entfernen")])],1)})),0)],1)},r=[],s={data:function(){return{dialogDelete:!1}},props:{mitschriften:{type:Array},id:{type:String}},created:function(){console.log(this.mitschriften)},methods:{removeMitschrift:function(t){this.$emit("removeMitschrift",t),this.$emit("delMitschrift",t),this.$emit("fetchMitschriften")}}},c=s,a=i("2877"),l=i("6544"),o=i.n(l),d=i("8336"),f=i("a523"),h=Object(a["a"])(c,n,r,!1,null,"8fd7151a",null);e["default"]=h.exports;o()(h,{VBtn:d["a"],VContainer:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0df836.6b7be520.js.map