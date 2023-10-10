<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- Home section start -->
			<majority />
			<!-- Home section finish -->

			<!-- Footer section start -->
			<Footerpage />
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Age Follower | Lucía Álvarez',
	description: "Lucía Álvarez's age follower. 💕.",
	image: {
		url: '/images/majority.png',
		alt: 'MajorityImage',
		width: 1200,
		height: 630
	}
});
</script>
