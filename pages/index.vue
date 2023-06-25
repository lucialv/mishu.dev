<template>
	<div class="... flex min-h-screen flex-col justify-between">
		<client-only>
			<!-- <div class="fixed h-[50%] w-[60%] opacity-20">
				<svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
							<stop id="stop1" stop-color="rgba(255, 136.858, 253.166, 1)" offset="0%"></stop>
							<stop id="stop2" stop-color="rgba(127.249, 20.204, 178.372, 1)" offset="100%"></stop>
						</linearGradient>
					</defs>
					<path
						fill="url(#sw-gradient)"
						d="M19.3,-35C24,-30.8,25.9,-23.4,28,-17.1C30,-10.7,32.1,-5.4,34.4,1.3C36.6,8,39,15.9,35.8,20.4C32.7,24.8,24.1,25.8,17.2,28.6C10.3,31.4,5.1,36.2,-0.8,37.5C-6.6,38.8,-13.3,36.7,-19.9,33.7C-26.6,30.7,-33.2,26.9,-36,21.1C-38.8,15.3,-37.7,7.7,-35.8,1.1C-33.9,-5.5,-31.2,-11,-27.6,-15.3C-24,-19.6,-19.5,-22.8,-14.7,-26.9C-10,-31,-5,-36,1.2,-38.1C7.3,-40.1,14.7,-39.1,19.3,-35Z"
						transform="translate(50 50)"
						stroke-width="0"
						style="transition: all 0.3s ease 0s"
						stroke="url(#sw-gradient)"
					></path>
				</svg>
			</div> -->
			<div class="z-10">
				<NavBar />
			</div>
			<div class="absolute bottom-0 right-0 z-50">
				<Scrollup />
			</div>

			<div id="home" class="container right-0 mx-auto mb-72 flex flex-col items-center px-5 py-20 md:flex-row md:py-32">
				<div
					class="mb-16 flex flex-col items-center text-center font-['RockoUltraFLF'] text-black drop-shadow-xl dark:text-white/95 md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
				>
					<strong>
						<div class="leading-relaxe pt-16 text-4xl md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
							<h1>
								Hi! I'm
								<span class="text-fuchsia-500">Lucía </span>
								<img
									src="https://cdn.discordapp.com/emojis/1112300498888958043.gif?size=80&quality=lossless"
									alt="bird "
									class="inline-block h-10 w-10 md:h-20 md:w-20"
									draggable="false"
								/>
							</h1>
						</div>
						<div>
							<h2 class="leading-relaxe text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
								And I'm
								<Transition name="fade" mode="out-in">
									<span class="text-fuchsia-500" v-if="lista[counter % lista.length] == `a girl`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-fuchsia-500" v-else-if="lista[counter % lista.length] == `a gamer`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-fuchsia-500" v-else-if="lista[counter % lista.length] == `a developer`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-fuchsia-500" v-else-if="lista[counter % lista.length] == `an anime fan`" id="words">{{
										lista[counter % lista.length]
									}}</span>
								</Transition>
							</h2>
						</div>
					</strong>
					<div class="flex justify-center pt-10">
						<nuxt-link href="https://github.com/lucialv">
							<button
								type="button"
								class="mb-2 mr-2 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-center font-sans text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-900 dark:hover:text-white"
							>
								<Githubicon />
								Github
							</button>
						</nuxt-link>
					</div>
				</div>
				<div class="md:mt-12">
					<user-card />
				</div>
			</div>

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

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
<script setup lang="js">
import { useInterval} from '@vueuse/core'

const lista = ["a developer", "a girl", "a gamer", "an anime fan"];

const counter = useInterval(5000, () => {
  // Incrementa el valor para cambiar el texto
});
</script>
