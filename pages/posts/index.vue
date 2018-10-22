<template>
	<section id="posts-page" v-editable="blok">
		<h1 v-html="title"></h1><br>
		<p v-html="content"></p>
		<div id="posts">
			<PostPreview
				v-for="post in posts"
				:key="post.id"
				:title="post.title"
				:summary="post.summary"
				:thumbnailUrl="post.thumbnailUrl"
				:id="post.id">
			</PostPreview>
		</div>
	</section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"
export default {
	components: {
		PostPreview
	},

  	asyncData(context) {
		return context.app.$storyapi.get('cdn/stories', {
			version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
			starts_with: 'posts/'
		})
		.then(res => {
			let posts = [];
			let page;
			//Separating posts from the page
			res.data.stories.map(story => {
				if(story.content.component === "post") {
					posts.push({
						id: story.slug,
						title: story.content.title,
						summary: story.content.summary,
						thumbnailUrl: story.content.thumbnail
					});
				} else if (story.is_startpage) {
					page = {
						blok: story.content,
						id: story.slug,
						title: story.content.title,
						content: story.content.content
					};			
				}
			})
			return {
				posts,
				...page
			}
		});
	},
	// async asyncData (context) {;
	// 	let res;

	// 	try {
	// 		res = await context.app.$storyapi.get('cdn/stories', {
	// 			version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
	// 			starts_with: 'posts/'
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 	}

	// 	//Separating posts from the page
	// 	res.data.stories.map(story => {
	// 		if(story.content.component === "post") {
	// 			posts.push({
	// 				id: story.slug,
	// 				title: story.content.title,
	// 				summary: story.content.summary,
	// 				thumbnailUrl: story.content.thumbnail
	// 			});
	// 		} else if (story.is_startpage) {
	// 			page = {
	// 				blok: story.content,
	// 				id: story.slug,
	// 				title: story.content.title,
	// 				content: story.content.content
	// 			};			
	// 		}
	// 	})

	// 	return {
	// 		posts,
	// 		page
	// 	}
	// },
	
	mounted() {
		this.$storyblok.init();
		this.$storyblok.on('change', () => {
			location.reload(true);
		})
	}
}
</script>

<style scoped>
	#posts-page {
		text-align: center;
	}
	
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


