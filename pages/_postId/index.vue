<template>
	<div id="post">
		<div
			class="post-thumbnail"
			:style="{backgroundImage: 'url(' + thumbnailUrl + ')'}">
		</div>
		<div class="post-content">
			<div class="post-title">
				<h1>
					{{ title }}
				</h1>
			</div>
			<div class="post-entry">
				<p>
					{{ entry }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	asyncData(context) {
		return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
			version: 'draft'
		}).then(res => {
			console.log(res.data);
			return {
				thumbnailUrl: res.data.story.content.thumbnail,
				title: res.data.story.content.title,
				entry: res.data.story.content.entry
			};
		})
	}
}
</script>

<style scoped>
	.post-thumbnail {
		display: block;
		height: 300px;
		background-size: cover;
		background-position: center;
	}

	.post-content {
		width: 80%;
		max-width: 500px;
		margin: auto;
	}

	.post-entry p {
		white-space: pre-line;
	}
</style>
