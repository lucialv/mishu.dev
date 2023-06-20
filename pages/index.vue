<template>
	<div class="... flex min-h-screen flex-col justify-between">
		<client-only>
			<div class="z-10">
				<NavBar />
			</div>

			<div id="home" class="container right-0 mx-auto mb-72 flex flex-col items-center px-5 py-20 md:flex-row md:py-32">
				<div
					class="mb-16 flex flex-col items-center text-center font-['RockoUltraFLF'] text-fuchsia-400 drop-shadow-xl dark:text-white/95 md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
				>
					<strong>
						<div class="leading-relaxe pt-16 text-4xl hover:text-fuchsia-500 md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
							<h1>
								Hi! I'm
								<span class="text-fuchsia-500">Lucía </span>
								<img
									src="https://cdn.discordapp.com/emojis/1112300498888958043.gif?size=1024&quality=lossless"
									alt="bird "
									class="inline-block h-10 w-10 md:h-20 md:w-20"
									draggable="false"
								/>
							</h1>
						</div>
						<div>
							<h2 class="leading-relaxe text-4xl hover:text-fuchsia-500 lg:text-5xl xl:text-6xl 2xl:text-6xl">
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
						<button-link href="https://github.com/lucialv" text="GitHub" />
					</div>
				</div>
				<div class="md:mt-12 lg:scale-110">
					<user-card />
				</div>
			</div>
			<!-- About me section start -->
			<div id="aboutme" class="mx-auto mb-64 flex px-5 py-12 md:py-32">
				<div class="mb-16 font-['Whitney'] drop-shadow-xl md:mb-0 md:flex">
					<div class="mr-0">
						<img src="/images/Aboutme.webp" alt="about me photo" class="h-96 w-96 rounded-3xl" />
					</div>
					<div class="pt-8 md:ml-8">
						<div>
							<h1 class="text-center text-4xl font-bold text-black underline underline-offset-8 dark:text-white md:text-justify">
								About me
							</h1>
						</div>
						<div class="mt-4 md:max-w-xs">
							<p class="text-black dark:text-white">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident explicabo maiores sit ipsa sequi enim nobis dolore
								sint vitae repudiandae officiis molestiae voluptatum facilis amet, ducimus itaque, sed nisi. Asperiores?
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- About Me section finish -->

			<!-- Contact section start -->
			<!-- <div id="contact" class="mx-auto mb-52 mt-52 flex px-5 py-12 md:py-32">
				<div class="mb-16 font-['RockoUltraFLF'] text-white drop-shadow-xl md:mb-0 md:flex">
					<div class="pt-8">
						<div>
							<h1 class="text-center text-4xl md:text-justify">Contact</h1>
						</div>
						<div class="pt-2 md:max-w-lg">
							<div class="min-h-32 min-w-32 relative flex w-full flex-wrap items-stretch rounded bg-slate-200 p-3 dark:bg-zinc-800">
								<textarea
									id="message"
									class="h-28 w-80 max-w-xs flex-auto resize-none overflow-hidden rounded-r-none bg-transparent font-['Whitney'] outline-0"
									placeholder="Hey Lucía! I just want to contact you because..."
									aria-label="Send an email to Lucía"
									v-model.trim="input"
									@input="handleInput"
									@keyup.ctrl.enter="submit"
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div> -->
			<Contact />
			<!-- Contact section finish -->

			<!-- Footer section start -->
			<footer class="body-font">
				<div class="container mx-auto flex flex-col items-center px-5 py-8">
					<p class="mt-4 text-sm font-medium text-black opacity-70 drop-shadow-xl dark:text-white sm:mt-0 sm:py-2">© 2023 Lucía Álvarez</p>
				</div>
			</footer>
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
