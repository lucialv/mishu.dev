<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- Home section start -->
			<cats />
			<!-- Home section finish -->

			<!-- Footer section start -->
			<Footerpage />
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Random Cat | Lucía Álvarez',
	description: 'Generate a Photo Of a Cat Randomnly. 💕.',
	image: {
		url: '/images/cats.png',
		alt: 'CatImage',
		width: 1200,
		height: 630
	}
});
</script>
