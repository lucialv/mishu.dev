<template>
	<div id="home" class="container right-0 mx-auto mb-72 flex flex-col items-center px-5 py-20 md:flex-row md:py-32">
		<div
			data-aos="fade-down"
			data-aos-delay="300"
			class="mb-16 flex flex-col items-center text-center text-black drop-shadow-xl dark:text-white/95 md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
		>
			<strong class="font-['RockoUltraFLF']">
				<div class="leading-relaxe pt-16 text-4xl md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					<h1>
						Hi! I'm
						<span class="animate-text bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
							>Lucía
						</span>
						<img
							src="https://cdn.discordapp.com/emojis/1112300498888958043.gif?size=80&quality=lossless"
							alt="bird "
							class="inline-block h-10 w-10 md:h-20 md:w-20"
							draggable="false"
						/>
					</h1>
				</div>
				<div>
					<h1 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
						And I'm
						<Transition name="fade" mode="out-in">
							<span
								class="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
								v-if="lista[counter % lista.length] == `a girl`"
								id="words"
								>{{ lista[counter % lista.length] }}</span
							>
							<span
								class="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
								v-else-if="lista[counter % lista.length] == `a gamer`"
								id="words"
								>{{ lista[counter % lista.length] }}</span
							>
							<span
								class="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
								v-else-if="lista[counter % lista.length] == `a developer`"
								id="words"
								>{{ lista[counter % lista.length] }}</span
							>
							<span
								class="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
								v-else-if="lista[counter % lista.length] == `an anime fan`"
								id="words"
								>{{ lista[counter % lista.length] }}</span
							>
						</Transition>
					</h1>
				</div>
			</strong>
			<div class="flex justify-center pt-10 font-bold">
				<nuxt-link href="https://github.com/lucialv">
					<button
						class="group relative mb-2 mr-2 inline-flex animate-text items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
					>
						<span
							class="relative flex items-center rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-800"
						>
							<Githubicon />
							Github
						</span>
					</button>
				</nuxt-link>
				<nuxt-link href="https://discord.gg/mmZBC4JKMt">
					<button
						class="group relative mb-2 mr-2 inline-flex animate-text items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
					>
						<span
							class="relative flex items-center rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-800"
						>
							<Discordicon />
							My Discord Server
						</span>
					</button>
				</nuxt-link>
			</div>
		</div>
		<div class="md:mt-12" data-aos="fade-up" data-aos-delay="300">
			<user-card />
		</div>
	</div>
</template>
<script setup lang="js">
import { useInterval} from '@vueuse/core'

const lista = ["a developer", "a girl", "a gamer", "an anime fan"];

const counter = useInterval(5000, () => {
  // Incrementa el valor para cambiar el texto
});
</script>
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
