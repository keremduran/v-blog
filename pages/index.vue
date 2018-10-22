<template>
  	<section id="home" v-editable="blok">
		<v-parallax class="mb-4" height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
		    <h1><b>DISARIYA GITMESIN.<br><br>KENDIN YAP TEMIZ TEMIZ.</b></h1>
		</v-parallax>	
		<h1 v-html="title"></h1><br>
		<p class="content" v-html="$md.render(content)"></p>
	</section>
</template>



<script>
export default {
  	asyncData(context) {
		return context.app.$storyapi.get('cdn/stories/home', {
			version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
		})
		.then(res => {
			return { 
				blok: res.data.story.content,
				title: res.data.story.content.title,
				content: res.data.story.content.content
			};
		});
	},
	
	mounted() {
		this.$storyblok.init();
		this.$storyblok.on('change', () => {
			location.reload(true);
		})
	}
}
</script>


<style scoped>
	#home {
		text-align: center;
	}
	
    .content {
        text-align: left;
		padding: 0 1rem;
    }

</style>

