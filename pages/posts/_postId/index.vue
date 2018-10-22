<template>
	<div id="post" v-editable="blok">
		<!-- <div
			class="post-thumbnail"
			:style="{backgroundImage: 'url(' + thumbnailUrl + ')'}">
		</div> -->
		<v-parallax class="mb-4" height="300" :src="thumbnailUrl"></v-parallax>	
		<div class="post-content">
			<div class="post-title">
				<h1 v-html="$md.render(title)"></h1>
			</div>
			<div class="post-entry">
				<p v-html="$md.render(entry)"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	asyncData(context) {
		return context.app.$storyapi.get('cdn/stories/posts/' + context.params.postId, {
			version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
		}).then(res => {
			return {
				blok: res.data.story.content,
				thumbnailUrl: res.data.story.content.thumbnail,
				title: res.data.story.content.title,
				entry: res.data.story.content.entry
			};
		})
	},
	// async asyncData(context) {
	// 	const res = await context.app.$storyapi.get('cdn/stories/posts/' + context.params.postId, {
	//  		version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
	// 	});
	// 	return {
	// 		blok: res.data.story.content,
	// 		thumbnailUrl: res.data.story.content.thumbnail,
	// 		title: res.data.story.content.title,
	// 		entry: res.data.story.content.entry			 
	// 	};
	// },
	mounted() {
		this.$storyblok.init();
		this.$storyblok.on("change", () => {
			location.reload(true);
		});
	}
}
</script>

<style scoped>
	.post-thumbnail {
		display: block;
		background-position: center;
		background-size: cover;
		height: 300px;
	}

	.post-content {
		width: 80%;
		max-width: 70rem;
		margin: auto;
	}

	.post-title {
		margin: 2rem 0;
	}

	.post-entry p {
		white-space: pre-line;
	}
</style>
