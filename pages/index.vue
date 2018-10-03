<template>
	<section id="posts">
		<PostPreview
			v-for="post in posts"
			:key="post.id"
			:title="post.title"
			:summary="post.summary"
			:thumbnailUrl="post.thumbnailUrl"
			:id="post.id">
		</PostPreview>
	</section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"
export default {
	components: {
		PostPreview
	},
	asyncData(context) {
		return context.app.$storyapi
		.get('cdn/stories', {
			version: 'draft',
			starts_with: 'blog/'
		})
		.then(res => {	
			return {
				posts: res.data.stories.map(bp => {
					return {
						id: bp.slug,
						title: bp.content.title,
						summary: bp.content.summary,
						thumbnailUrl: bp.content.thumbnail
					};
				})
			};
		});
	},
	// data() {
	// 	return {
	// 		posts: [
	// 			{
	// 				title: 'Remote Operating Miniature Car',
	// 				previewSummary: 'How to make a remote control miniature car!',
	// 				thumbnailUrl: 'http://josephvoss.com/assets/img/Full_car.jpg',
	// 				id: 'remote-operating-miniature-car'
	// 			},
	// 			{
	// 				title: 'Wood Cabinet',
	// 				previewSummary: 'This will be awesome, don\'t miss it!',
	// 				thumbnailUrl: 'https://i.imgur.com/Go1y5sE.jpg',
	// 				id: 'wood-cabinet'
	// 			}
	// 		]
	// 	}
	// },
}
</script>

<style scoped>
	#posts {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	@media (min-width: 40rem) {
		#posts {
			flex-direction: row;
		}
}
</style>


