<template>
  	<section id="home" v-editable="blok">
		<h1 v-html="title"></h1><br>
		<p class="content" v-html="$md.render(content)"></p>
	</section>
</template>

<script>
export default {
	async asyncData (context) {
		let res;

		try {
			res = await context.app.$storyapi.get('cdn/stories/home', {
                version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
			});
		} catch (err) {
			console.log(err);
        }
        
        return {
            blok: res.data.story.content,
            title: res.data.story.content.title,
            content: res.data.story.content.content
        };
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

