<template>
	<div>
		<TheHeader />
		<main class="main-content">		
			<nuxt/>
		</main>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
	components: {
		TheHeader
	}
}
</script>


<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		font-family: "Lato", sans-serif;
	}

	.main-content {
		margin-top: 4.5rem;
	}

	.text--accent-1 {
		color: #5D5C61;
	}

	.text--accent-2 {
		color: #557A95;
	}

	.text--accent-3 {
		color: #7395AE;
	}

	.text--error {
		color: #8a1014;
	}

	.text--error-1 {
		color: #2E1114;
	}

	.mt-0 {
		margin-top: 0;
	}

	.mt-1 {
		margin-top: .5rem;
	}

	.mt-2 {
		margin-top: 1rem;
	}

	.pt-0 {
		padding-top: 0;
	}

	.pt-1 {
		padding-top: .5rem;
	}

	.pt-2 {
		padding-top: 1rem;
	}

	.entry-img-frame {
		display: inline-block;
		max-height: 35rem;
		max-width: 35rem;
		padding: 1rem 1rem 1rem 0;
		float: left;
	}

	img {
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 1000px) {
		html {
			font-size: 90%;
		}
	}

	@media only screen and (max-width: 800px) {
		html {
			font-size: 80%;
		}
	}

	@media only screen and (max-width: 550px) {
		html {
			font-size: 70%;
		}
	}
</style>

