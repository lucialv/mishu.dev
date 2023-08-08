<template>
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
				<nuxt-link href="https://discord.com/invite/ajQpA4kszg">
					<button
						type="button"
						class="mb-2 mr-2 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-center font-sans text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-900 dark:hover:text-white"
					>
						<Discordicon />
						My Discord Server
					</button>
				</nuxt-link>
			</div>
		</div>
		<div class="md:mt-12">
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
