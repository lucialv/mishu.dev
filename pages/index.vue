<template>
	<div class="... flex min-h-screen flex-col justify-between">
		<client-only>
			<div class="container right-0 mx-auto flex flex-col items-center px-5 py-12 md:flex-row md:py-32">
				<div
					class="mb-16 flex flex-col items-center text-center font-['RockoUltraFLF'] text-white drop-shadow-xl md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
				>
					<strong>
						<div class="text-5xl leading-relaxed text-white hover:text-cyan-100 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
							<h1>
								Hi! I'm
								<span class="text-cyan-200">Lucía </span>
								<img
									src="https://cdn.discordapp.com/emojis/1112300498888958043.gif?size=1024&quality=lossless"
									alt="bird "
									class="inline-block h-10 w-10 md:h-20 md:w-20"
									draggable="false"
								/>
							</h1>
						</div>
						<div>
							<h2 class="text-4xl leading-relaxed text-white hover:text-cyan-100 lg:text-5xl xl:text-6xl 2xl:text-6xl">
								And I'm
								<Transition name="fade" mode="out-in">
									<span class="text-cyan-200" v-if="lista[counter % lista.length] == `a girl`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-cyan-200" v-else-if="lista[counter % lista.length] == `a gamer`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-cyan-200" v-else-if="lista[counter % lista.length] == `a developer`" id="words">{{
										lista[counter % lista.length]
									}}</span>
									<span class="text-cyan-200" v-else-if="lista[counter % lista.length] == `an anime fan`" id="words">{{
										lista[counter % lista.length]
									}}</span>
								</Transition>
							</h2>
						</div>
					</strong>
					<div class="flex justify-center pt-10">
						<button-link href="https://github.com/lucialv" text="GitHub" />
						<button
							class="black:text-neutral-50 ml-2 inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 drop-shadow-xl transition duration-150 ease-in-out hover:scale-105 dark:bg-zinc-800 dark:text-zinc-100"
							@click="toggleDark()"
						>
							{{ isDark ? 'Light' : 'Dark' }}
						</button>
					</div>
				</div>
				<div class="lg:scale-110">
					<user-card />
				</div>
			</div>
			<footer class="body-font">
				<div class="container mx-auto flex flex-col items-center px-5 py-8">
					<p class="mt-4 font-['RockoUltraFLF'] text-sm text-white opacity-70 drop-shadow-xl sm:mt-0 sm:py-2">© 2023 Lucía Álvarez</p>
				</div>
			</footer>
		</client-only>
	</div>
	<!--
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡶⠾⠛⠛⠋⠉⠉⠉⠉⠉⠛⠛⠻⠶⣦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡶⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣄⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠈⠙⢿⣄⠀⠀⠀⠉⠙⠻⣦⡀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⠳⣄⠀⠀⠀⠀⢸⠁⠈⢣⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠹⣧
  ⠀⠀⠀⠀⠀⠀⢠⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠸⡆⠀⠀⠀⠸⣇⠀⠈⣧⠀⠀⠀⠀⠻⣄⠀⠀⠀⠀⣿
  ⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⣀⣠⣿⠀⠀⠀⠀⢻⣷⣾⣿⡆⠀⠀⠀⠀⠹⣆⠀⠀⢰⡿
  ⠀⠀⠀⠀⢠⡿⢀⣠⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⡇⠀⠀⠀⠘⡿⠿⠟⣇⠀⠀⠀⠀⠀⢹⡆⢀⣿⠃
  ⠀⠀⠀⢠⣾⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡌⠉⠀⡇⠀⠀⠀⠀⠹⡀⠀⡏⢀⣴⣿⣿⣿⠀⢿⡿⠁⠀
  ⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣶⣶⣶⡄⠀⠳⣤⡼⠁⠀⠀⠀⠀⠀⠙⠚⠁⠈⢛⠟⠛⠉⠀⢸⣧⠀⠀
  ⢀⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠿⠿⠃⠀⠀⠀⠀⠀⣾⡄⠀⣷⡇⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⣿⠀⠀
  ⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠭⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀
  ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⢶⣿⣿⡛⠛⠛⠛⠶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠀⠀
  ⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠞⠋⠁⠐⠛⠛⠋⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀
  ⠈⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠀
  ⠀⠀⠉⠛⠷⢶⣶⠶⠶⠶⠖⠛⠋⠁⣴⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢻⣦⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⢠⣾⠃⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠹⣷⣀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⢀⣴⡿⠁⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣶⣄⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⢀⣤⣿⠏⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⣠⡴⠋⣹⡏⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣋⣠⡴⠶⠛⠁⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠟⠉⠉⠀⠀⠀⠀⠀⣴⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢷⣤⣄⣀⣀⣀⣤⡴⠞⠋⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⢀⣤⣶⠆⢀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣄⠀⠀⠀⠙⣛⣡⣶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  -->
</template>

<style>
/* we will explain what these classes do next! */
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
import { useInterval, useDark, useToggle } from '@vueuse/core'
var lista = ["a developer", "a girl", "a gamer", "an anime fan"];
const counter = useInterval(5000, () => {
  // Incrementa el valor para cambiar el texto
});
const colorMode = useColorMode()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
