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

	a {
		text-decoration: none;
	}

	.main-content {
		margin-top: 4.5rem;
	}

	.text-color-1 {
		color: #5D5C61;
	}

	.text-color-2 {
		color: #557A95;
	}

	.text-color-3 {
		color: #7395AE;
	}

	.text-color-error {
		color: #b41a1f;
	}

	.text-color-error-1 {
		color: #8d1a26;
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

	.img-frame {
		float: left;
		max-height: 25rem;
		max-width: 25rem;
		padding: 0;
		margin: .35rem;
		margin-left: 0;
	}

	.float-right {
		float: right;
	}

	.img-frame.small {
		max-height: 15rem;
		max-width: 15rem;
	}

	.img-frame.large {
		max-height: 35rem;
		max-width: 35rem;
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

