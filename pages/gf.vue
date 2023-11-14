<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- Home section start -->
			<Requirements />
			<!-- Home section finish -->

			<!-- Footer section start -->
			<footer class="body-font">
				<div class="container mx-auto flex flex-col items-center px-5 py-8">
					<p class="mt-4 text-sm font-medium text-black opacity-70 drop-shadow-xl sm:mt-0 sm:py-2">
						Made with ❤️ by <a class="hover:underline" href="https://github.com/lucialv">@lucialv</a>
					</p>
				</div>
			</footer>
			<!-- Footer section finish -->
		</client-only>
	</div>
</template>

<script setup lang="ts">
defineSeo({
	title: 'Girlfriend Requirements | Lucía Álvarez',
	description: "Lucía Álvarez's gf's requirements. 💕",
	image: {
		url: '/images/majority.png',
		alt: 'ReqImage',
		width: 1200,
		height: 630
	}
});
</script>
