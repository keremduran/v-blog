const pkg = require('./package');
const axios = require ('axios');

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700'},
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { 
		color: '#33337F',
		height: '1.3px'
	 },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/style/app.styl'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/vuetify'
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		['storyblok-nuxt', {
			accessToken: process.env.NODE_ENV == 'production' ? 
				'grimBw3Eo4zNojpYXtQY6Att' : 
				'by1P1Vq5zbTYAdiynhEaowtt',
			cacheProvider: 'memory'}],
		'@nuxtjs/markdownit',
	],
	/*
	** Axios module configuration
	*/

	// [optional] markdownit options
	// See https://github.com/markdown-it/markdown-it
	markdownit: {
		preset: 'default',
		linkify: true,
		breaks: true,
		injected: true,
		html: true,
		typographer: true,
	},

	generate: {
		routes: function () {
			return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=grimBw3Eo4zNojpYXtQY6Att&cv=' + Math.floor(Date.now / 1e3))
			.then(res => {
				const blogPosts = res.data.stories.map(bp => {
					if(bp.full_slug === "home"){
						return '/';
					}
					return bp.full_slug;
				});
				console.log(blogPosts);				
				return [
					'posts',
					'about',
					...blogPosts
				]
			});
		}
	},

	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		transpile: [/^vuetify/],
		babel: {
		  plugins: [
			['transform-imports', {
			  'vuetify': {
				'transform': 'vuetify/es5/components/${member}',
				'preventFullImport': true
			  }
			}]
		  ]
		},
		extractCSS: true,
		extend(config, ctx) {
		// Run ESLint on save
		// if (ctx.isDev && ctx.isClient) {
		//   config.module.rules.push({
		//     enforce: 'pre',
		//     test: /\.(js|vue)$/,
		//     loader: 'eslint-loader',
		//     exclude: /(node_modules)/
		//   })
		// }
			if (process.server) {
				config.externals = [
					nodeExternals({
						whitelist: [/^vuetify/]
					})
				]
			}
		}
	}
}
