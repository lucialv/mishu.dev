<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- Home section start -->
			<cardmenu />
			<!-- Home section finish -->

			<!-- Footer section start -->
			<Footerpage />
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Kitten Menu | Lucía Álvarez',
	description: "Lucía Álvarez's Kitten Menu. 💕.",
	image: {
		url: '/images/menuimage.png',
		alt: 'MenuImage',
		width: 1200,
		height: 630
	}
});
</script>
