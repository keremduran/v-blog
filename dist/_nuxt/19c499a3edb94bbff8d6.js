(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{366:function(t,e,n){},367:function(t,e,n){},371:function(t,e,n){"use strict";var i=n(366);n.n(i).a},373:function(t,e,n){"use strict";var i=n(367);n.n(i).a},381:function(t,e,n){"use strict";n.r(e);var i=n(26),s=n.n(i),r={props:{title:{type:String,required:!0},summary:{type:String,required:!0},thumbnailUrl:{type:String,required:!0},id:{type:String,required:!0}}},o=(n(371),n(16)),a=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"posts/"+t.id}},[n("article",{staticClass:"post-preview"},[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailUrl+")"}}),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("div",{staticClass:"post-preview-title"},[n("h1",{domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),n("div",{staticClass:"post-preview-summary"},[n("p",{domProps:{innerHTML:t._s(t.summary)}})])])])])},[],!1,null,"24737246",null);a.options.__file="PostPreview.vue";var l={components:{PostPreview:a.exports},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"posts/"}).then(function(t){var e,n=[];return t.data.stories.map(function(t){"post"===t.content.component?n.push({id:t.slug,title:t.content.title,summary:t.content.summary,thumbnailUrl:t.content.thumbnail}):t.is_startpage&&(e={blok:t.content,id:t.slug,title:t.content.title,content:t.content.content})}),s()({posts:n},e)})},mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}},u=(n(373),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"posts-page"}},[n("h1",{domProps:{innerHTML:t._s(t.title)}}),n("br"),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("div",{attrs:{id:"posts"}},t._l(t.posts,function(t){return n("PostPreview",{key:t.id,attrs:{title:t.title,summary:t.summary,thumbnailUrl:t.thumbnailUrl,id:t.id}})}))])},[],!1,null,"340a5fa3",null));u.options.__file="index.vue";e.default=u.exports}}]);