(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{265:function(t,n,e){var a=e(275);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(25).default)("adbda3fa",a,!0,{sourceMap:!1})},274:function(t,n,e){"use strict";var a=e(265);e.n(a).a},275:function(t,n,e){(t.exports=e(24)(!1)).push([t.i,"\n#home[data-v-65679012]{text-align:center\n}\n.content[data-v-65679012]{text-align:left;padding:0 1rem\n}",""])},279:function(t,n,e){"use strict";e.r(n);var a={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/home",{version:"published"}).then(function(t){return{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}})},mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}},o=(e(274),e(13)),s=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"home"}},[e("v-parallax",{staticClass:"mb-4",attrs:{height:"300",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[e("h1",[e("b",[t._v("DISARIYA GITMESIN."),e("br"),e("br"),t._v("KENDIN YAP TEMIZ TEMIZ.")])])]),t._v(" "),e("h1",{domProps:{innerHTML:t._s(t.title)}}),e("br"),t._v(" "),e("p",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.content))}})],1)},[],!1,null,"65679012",null);s.options.__file="index.vue";n.default=s.exports}}]);