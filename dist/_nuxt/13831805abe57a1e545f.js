(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{193:function(t,e,n){var i=n(199);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(24).default)("00208515",i,!0,{sourceMap:!1})},194:function(t,e,n){var i=n(201);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(24).default)("4bc039a0",i,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";var i=n(193);n.n(i).a},199:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\na[data-v-24737246]{text-decoration:none;color:#000\n}\n.post-preview[data-v-24737246]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);width:23rem;margin:1rem;height:26rem;overflow:hidden\n}\n.post-preview-thumbnail[data-v-24737246]{background-position:50%;background-size:cover;width:100%;height:15rem\n}\n.post-preview-content[data-v-24737246]{text-align:center;padding:0 1rem\n}\n.post-preview-title[data-v-24737246]{height:6rem\n}\n.post-preview-summary[data-v-24737246],.post-preview-title[data-v-24737246]{display:flex;align-items:center;justify-content:center\n}",""])},200:function(t,e,n){"use strict";var i=n(194);n.n(i).a},201:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n#posts-page[data-v-6f8e74e4]{text-align:center\n}\n#posts[data-v-6f8e74e4]{padding:1rem;display:flex;justify-content:center;align-items:center;flex-direction:column\n}\n@media (min-width:40rem){\n#posts[data-v-6f8e74e4]{flex-direction:row\n}\n}",""])},208:function(t,e,n){"use strict";n.r(e);n(42);var i=n(5),r=n.n(i),s={props:{title:{type:String,required:!0},summary:{type:String,required:!0},thumbnailUrl:{type:String,required:!0},id:{type:String,required:!0}}},a=(n(198),n(12)),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"posts/"+t.id}},[n("article",{staticClass:"post-preview"},[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailUrl+")"}}),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("div",{staticClass:"post-preview-title"},[n("h1",{domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),n("div",{staticClass:"post-preview-summary"},[n("p",{domProps:{innerHTML:t._s(t.summary)}})])])])])},[],!1,null,"24737246",null);o.options.__file="PostPreview.vue";var p,l={components:{PostPreview:o.exports},asyncData:(p=r()(regeneratorRuntime.mark(function t(e){var n,i,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.prev=1,t.next=4,e.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"posts/"});case 4:r=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:return r.data.stories.map(function(t){"post"===t.content.component?n.push({id:t.slug,title:t.content.title,summary:t.content.summary,thumbnailUrl:t.content.thumbnail}):t.is_startpage&&(i={blok:t.content,id:t.slug,title:t.content.title,content:t.content.content})}),t.abrupt("return",{posts:n,page:i});case 12:case"end":return t.stop()}},t,this,[[1,7]])})),function(t){return p.apply(this,arguments)}),mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}},c=(n(200),Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.page.blok,expression:"page.blok"}],attrs:{id:"posts-page"}},[n("h1",{domProps:{innerHTML:t._s(t.page.title)}}),n("br"),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.page.content)}}),t._v(" "),n("div",{attrs:{id:"posts"}},t._l(t.posts,function(t){return n("PostPreview",{key:t.id,attrs:{title:t.title,summary:t.summary,thumbnailUrl:t.thumbnailUrl,id:t.id}})}))])},[],!1,null,"6f8e74e4",null));c.options.__file="index.vue";e.default=c.exports}}]);