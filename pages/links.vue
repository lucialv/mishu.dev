<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- Home section start -->
			<links />
			<!-- Home section finish -->

			<!-- Footer section start -->
			<Footerpage />
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Links | Lucía Álvarez',
	description: "Lucía Álvarez's links. 💕.",
	image: {
		url: '/images/metaimage.png',
		alt: 'LinksImage',
		width: 1200,
		height: 630
	}
});
</script>
