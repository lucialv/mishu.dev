<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<div class="z-50">
				<NavBar />
			</div>
			<div class="absolute bottom-0 right-0 z-50">
				<Scrollup />
			</div>

			<!-- Home section start -->
			<Home />
			<!-- Home section finish -->

			<!-- About me section start -->
			<Aboutme />
			<!-- About Me section finish -->

			<!-- Valorant Rank section start -->
			<ValorantRank />
			<!-- Valorant Rank section finish -->

			<!-- Support section start -->
			<Support />
			<!-- Support section finish -->

			<!-- Contact section start -->
			<Contact />
			<!-- Contact section finish -->

			<!-- Footer section start -->
			<Footerpage />
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Home | Lucía Álvarez',
	description: "Lucía Álvarez's personal website and portfolio. 🐬",
	image: {
		url: '/images/metaimage.png',
		alt: 'HomeImage',
		width: 1200,
		height: 630
	}
});
</script>
