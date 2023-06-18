<template>
	<nav class="fixed w-full bg-white p-4">
		<div class="flex items-center justify-between">
			<!-- Header logo -->
			<div>
				<Tailwind />
			</div>

			<!-- Mobile toggle -->
			<div class="md:hidden">
				<button @click="drawer">
					<svg
						class="h-8 w-8 fill-current text-black"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			<!-- Navbar -->
			<div class="hidden md:block">
				<ul class="flex space-x-8 font-sans text-sm">
					<li><a href="#home" class="border-b-2 border-blue-500 pb-1">Home</a></li>
					<li><a href="#aboutme" class="">About Me</a></li>
					<!-- <li><a href="#" class="">Features</a></li>
					<li><a href="#" class="">FAQ</a></li> -->
					<li><a href="#" class="">Contact</a></li>
					<li><a href="#" class="cta rounded bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">Sign Up</a></li>
				</ul>
			</div>

			<!-- Dark Background Transition -->
			<transition
				enter-class="opacity-0"
				enter-active-class="ease-out transition-medium"
				enter-to-class="opacity-100"
				leave-class="opacity-100"
				leave-active-class="ease-out transition-medium"
				leave-to-class="opacity-0"
			>
				<div @keydown.esc="isOpen = false" v-show="isOpen" class="fixed inset-0 z-10 transition-opacity">
					<div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
				</div>
			</transition>

			<!-- Drawer Menu -->
			<aside
				class="fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-white p-5 transition-all duration-300 ease-in-out"
				:class="isOpen ? 'translate-x-0' : '-translate-x-full'"
			>
				<div class="close">
					<button class="absolute right-0 top-0 mr-4 mt-4" @click="isOpen = false">
						<svg
							class="h-6 w-6"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>

				<span @click="isOpen = false" class="flex w-full items-center border-b p-4">
					<Tailwind />
				</span>

				<ul class="divide-y font-sans">
					<li><a href="#home" @click="isOpen = false" class="my-4 inline-block">Home</a></li>
					<li><a href="#aboutme" @click="isOpen = false" class="my-4 inline-block">About Me</a></li>
					<!-- <li><a href="#" @click="isOpen = false" class="my-4 inline-block">Features</a></li>
					<li><a href="#" @click="isOpen = false" class="my-4 inline-block">FAQ</a></li> -->
					<li><a href="#" @click="isOpen = false" class="my-4 inline-block">Contact</a></li>
					<li>
						<a
							href="#"
							@click="isOpen = false"
							class="cta my-8 inline-block w-full rounded bg-blue-500 px-3 py-2 text-center font-semibold text-white hover:bg-blue-600"
							>Sign Up</a
						>
					</li>
				</ul>
			</aside>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen;
		}
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty('overflow', 'hidden');
					else document.body.style.removeProperty('overflow');
				}
			}
		}
	},
	mounted() {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
		});
	}
};
</script>
