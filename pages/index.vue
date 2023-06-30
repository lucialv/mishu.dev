<template>
	<div class="flex min-h-screen flex-col justify-between">
		<client-only>
			<div class="z-10">
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
