<template>
	<div class="fixed h-[72px] w-full bg-white shadow-md dark:bg-zinc-800 md:px-16"></div>
	<nav class="fixed w-full p-4 px-6 md:pl-16 md:pr-32">
		<div class="flex items-center justify-between">
			<!-- Header logo -->
			<div>
				<a href="#home">
					<Tailwind />
				</a>
			</div>

			<!-- Mobile toggle -->
			<div class="md:hidden">
				<button id="drawer" aria-label="drawer" @click="drawer">
					<svg
						class="absolute right-9 top-4 h-10 w-10 rounded-md bg-opacity-40 fill-current text-black dark:text-white"
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
				<button
					class="bg-dbackground text-dtext dark:bg-background dark:text-text absolute right-[90px] top-3 rounded text-xs font-semibold uppercase drop-shadow-xl transition duration-150 ease-in-out"
					@click="toggleDark()"
				>
					<div class="flex rounded-md px-2 py-2 text-white" v-if="isDark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
							<path
								d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
							/>
						</svg>
					</div>
					<div class="flex rounded-md px-2 py-2 text-black" v-else-if="!isDark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
							<path
								fill-rule="evenodd"
								d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</button>
			</div>

			<!-- Navbar -->
			<div class="hidden md:inline-block">
				<ul class="flex space-x-8 font-sans text-sm dark:text-white">
					<li><a href="#home" class="hover:border-b-2 hover:border-black hover:pb-1 dark:hover:border-white">Home</a></li>
					<li><a href="#aboutme" class="hover:border-b-2 hover:border-black hover:pb-1 dark:hover:border-white">About Me</a></li>
					<li><a href="#support" class="hover:border-b-2 hover:border-black hover:pb-1 dark:hover:border-white">Support</a></li>
					<li><a href="#contact" class="hover:border-b-2 hover:border-black hover:pb-1 dark:hover:border-white">Contact</a></li>
					<!-- <li><a href="#" class="cta rounded bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">Sign Up</a></li> -->
					<li class="items-center">
						<button
							class="bg-dbackground text-dtext dark:bg-background dark:text-text absolute bottom-[18px] rounded text-xs font-semibold uppercase drop-shadow-xl transition duration-150 ease-in-out hover:scale-105"
							@click="toggleDark()"
						>
							<div class="flex rounded-md px-2 py-2 text-white hover:border-2 hover:border-white" v-if="isDark">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
									<path
										d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
									/>
								</svg>
							</div>
							<div class="flex rounded-md px-2 py-2 text-black hover:border-2 hover:border-black" v-else-if="!isDark">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
									<path
										fill-rule="evenodd"
										d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</button>
					</li>
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
					<div @click="isOpen = false" class="absolute inset-0 bg-black opacity-40" tabindex="0"></div>
				</div>
			</transition>

			<!-- Drawer Menu -->
			<aside
				class="fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-white p-5 text-black transition-all duration-300 ease-in-out dark:bg-zinc-800 dark:text-white"
				:class="isOpen ? 'translate-x-0' : '-translate-x-full'"
			>
				<span @click="isOpen = false" class="flex items-center justify-center border-b p-4">
					<Tailwind />
				</span>

				<ul class="divide-y font-sans">
					<li><a href="#home" @click="isOpen = false" class="my-4 inline-block">Home</a></li>
					<li><a href="#aboutme" @click="isOpen = false" class="my-4 inline-block">About Me</a></li>
					<li><a href="#support" @click="isOpen = false" class="my-4 inline-block">Support</a></li>
					<li><a href="#contact" @click="isOpen = false" class="my-4 inline-block">Contact</a></li>
					<li>
						<!-- <a
							href="#"
							@click="isOpen = false"
							class="cta my-8 inline-block w-full rounded bg-blue-500 px-3 py-2 text-center font-semibold text-white hover:bg-blue-600"
							>Sign Up</a
						> -->
					</li>
				</ul>
			</aside>
		</div>
	</nav>
</template>

<script lang="js">
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

<script setup lang="js">
import { useColorMode, useDark, useToggle } from '@vueuse/core'


const colorMode = useColorMode()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
