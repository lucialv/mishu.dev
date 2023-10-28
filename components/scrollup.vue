<template>
	<a href="#home" className="scrollup">
		<div class="h-10 w-10 rounded-lg bg-zinc-600 outline outline-2 outline-sky-300 drop-shadow-[0_0_0.6rem_#3269eb70] lg:h-14 lg:w-14">
			<img
				src="/images/up-arrow.png"
				alt="arrow"
				class="absolute right-[10.5px] top-[10px] h-5 w-5 lg:right-[16.5px] lg:top-[16px] lg:h-6 lg:w-6"
			/>
		</div>
	</a>
</template>
<style scoped>
.scrollup {
	position: fixed;
	right: 2.5rem;
	bottom: -20%;
	background-color: var(--title-color);
	opacity: 0.8;
	padding: 0.3rem 0.5rem;
	border-radius: 0.4rem;
	transition: 0.4s;
}

.show-scroll {
	bottom: 3rem;
}
</style>

<script setup lang js>
window.addEventListener('scroll', function () {
	const scrollUp = this.document.querySelector('.scrollup');
	if (this.scrollY >= 500) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
});
</script>
