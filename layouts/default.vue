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
		font-size: 12px;
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

	.color-1 {
		color: rgb(85, 101, 149);
	}

	.color-2 {
		color: #557A95;
	}

	.color-3 {
		color: #7395AE;
	}

	.color-error {
		color: red;
	}

	.color-error-1 {
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
		padding-right: 1.2rem;
		margin: .35rem 0;
	}

	.float-right {
		float: right;
		padding-right: 0;
		padding-left: 1.2rem;
	}

	.img-frame.small {
		max-height: 15rem;
		max-width: 15rem;
	}

	.img-frame.large {
		max-height: 35rem;
		max-width: 35rem;
	}

	@media only screen and (min-width: 550px) {
		html {
			font-size: 13px;
		}
	}

	@media only screen and (min-width: 800px) {
		html {
			font-size: 14px;
		}
	}

	@media only screen and (min-width: 1000px) {
		html {
			font-size: 16px;
		}
	}
</style>

