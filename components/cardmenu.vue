<template>
	<div id="home" class="container right-0 mx-auto flex flex-col px-5 md:flex-row">
		<div
			class="flex flex-col text-black drop-shadow-xl dark:text-white/95 md:mt-32 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
		>
			<strong class="text-center font-['RockoUltraFLF'] md:text-start">
				<div class="pt-16 text-4xl md:mt-16 md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
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
							<span
								class="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
								v-else-if="lista[counter % lista.length] == `a kitten`"
								id="words"
								>{{ lista[counter % lista.length] }}</span
							>
						</Transition>
					</h1>
				</div>
			</strong>
			<button
				class="bg-dbackground text-dtext dark:bg-background dark:text-text mx-auto mt-8 w-[81.2px] rounded text-xs font-semibold uppercase drop-shadow-xl transition duration-150 ease-in-out hover:scale-105 md:mx-0"
				@click="toggleDark()"
			>
				<div
					class="flex rounded-md bg-gradient-to-br from-slate-200 via-neutral-100 to-slate-200 px-3 py-2 text-black transition-all duration-150 ease-out"
					v-if="isDark"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
						<path
							d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
						/>
					</svg>
					<p class="ml-2">Light</p>
				</div>
				<div
					class="flex rounded-md bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 px-3 py-2 text-white transition-all duration-150 ease-out"
					v-else-if="!isDark"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
						<path
							fill-rule="evenodd"
							d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="ml-2">Dark</p>
				</div>
			</button>
			<div class="mx-auto mb-4 mt-16 md:mx-0">
				<ul class="-mb-px flex flex-wrap text-center text-sm font-bold" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
					<li class="mr-2" role="presentation">
						<button
							class="inline-block rounded-t-lg border-b-2 p-4"
							:class="{ 'border-purple-500 text-purple-500 dark:text-purple-500': activeTab === 'profile' }"
							@click="setActiveTab('profile')"
							role="tab"
							aria-controls="profile"
							:aria-selected="activeTab === 'profile'"
						>
							About Me
						</button>
					</li>
					<li class="mr-2" role="presentation">
						<button
							class="inline-block rounded-t-lg border-b-2 p-4"
							:class="{ 'border-purple-500 text-purple-500 dark:text-purple-500': activeTab === 'dashboard' }"
							@click="setActiveTab('dashboard')"
							role="tab"
							aria-controls="dashboard"
							:aria-selected="activeTab === 'dashboard'"
						>
							Services
						</button>
					</li>
					<li role="presentation">
						<button
							class="inline-block rounded-t-lg border-b-2 p-4"
							:class="{ 'border-purple-500 text-purple-500 dark:text-purple-500': activeTab === 'contacts' }"
							@click="setActiveTab('contacts')"
							role="tab"
							aria-controls="contacts"
							:aria-selected="activeTab === 'contacts'"
						>
							Payments Methods
						</button>
					</li>
				</ul>
			</div>
			<div id="myTabContent">
				<div
					v-show="activeTab === 'profile'"
					class="rounded-lg bg-gray-50 p-4 dark:bg-zinc-900"
					id="profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					<p class="inline-block text-sm text-gray-500 dark:text-gray-400">
						Hello, Im
						<strong class="font-medium text-gray-800 dark:text-white">Lucía</strong>! I'm a
						<strong class="font-medium text-gray-800 dark:text-white">15 years old</strong> girl from
						<strong class="items-center font-medium text-gray-800 dark:text-white"
							>Spain
							<img
								src="https://www.servimaronline.com/bandera-espa%C3%B1ola-sin-corona_pic249749ni0t0.jpg"
								alt="spain-flag"
								draggable="false"
								class="ml-1 inline-block aspect-video h-3 w-5"
						/></strong>
						who
						<strong class="font-medium text-gray-800 dark:text-white">loves </strong>to
						<strong class="font-medium text-gray-800 dark:text-white">play videogames, watch anime and code!</strong>
						I am <strong class="font-medium text-gray-800 dark:text-white">1,70cm tall</strong>, weigh
						<strong class="font-medium text-gray-800 dark:text-white">65Kg</strong>. I think I'm a
						<strong class="font-medium text-gray-800 dark:text-white">pretty funny girl </strong> and
						<strong class="font-medium text-gray-800 dark:text-white">I take </strong>enough
						<strong class="font-medium text-gray-800 dark:text-white">care about other people</strong>.
						<img
							src="https://cdn.discordapp.com/emojis/1162150748285579274.webp?size=80&quality=lossless"
							alt="emoji"
							draggable="false"
							class="ml-1 inline-block aspect-video h-4 w-4"
						/>
						<br />
						I'm very <strong class="font-medium text-gray-800 dark:text-white">competitive</strong> at
						<strong class="font-medium text-gray-800 dark:text-white">videogames</strong> so maybe I can
						<strong class="font-medium text-gray-800 dark:text-white">coach you</strong> or
						<strong class="font-medium text-gray-800 dark:text-white">tell you</strong> some
						<strong class="font-medium text-gray-800 dark:text-white">tips</strong> to
						<strong class="font-medium text-gray-800 dark:text-white">improve</strong> at the
						<strong class="font-medium text-gray-800 dark:text-white">game</strong>! And lastly, I'm
						<strong class="font-medium text-gray-800 dark:text-white">24/7</strong> on
						<strong class="font-medium text-gray-800 dark:text-white">Discord</strong>, so
						<strong class="font-medium text-gray-800 dark:text-white">don't worry about time zones</strong> because I'm
						<strong class="font-medium text-gray-800 dark:text-white">always online</strong>.
						<img
							src="https://cdn.discordapp.com/emojis/1098696663666790551.gif?size=80&quality=lossless"
							alt="emoji"
							draggable="false"
							class="ml-1 inline-block aspect-video h-4 w-4"
						/>
					</p>
				</div>
				<div
					v-show="activeTab === 'dashboard'"
					class="rounded-lg bg-gray-50 p-4 dark:bg-zinc-900"
					id="dashboard"
					role="tabpanel"
					aria-labelledby="dashboard-tab"
				>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						I do <strong class="font-medium text-gray-800 dark:text-white">everything you want</strong> me to do but

						<strong class="font-medium text-blue-500">need to be SFW</strong>.
						<strong class="font-medium text-red-500">I don't do NSFW stuff</strong>. <br /><br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Fake GF</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">5€/day</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Fake GF</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">25€/week</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Fake GF</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">100€/month</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Play Games With You</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">5€/hour</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Play Games With You</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">25€/day</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">1 SFW Pic</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">3€</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">3 SFW Pics</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">5€</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">5 SFW Pics</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">7.5€</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">10 SFW Pics</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">10€</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Voice Call</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">5€/10m</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Voice Call With Cam</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">15€/10m</strong>
							</span>
						</span>
						<br />
						<span class="flex justify-between">
							<span class="text-left">
								<strong class="font-bold text-purple-500">Texting</strong>
							</span>
							<span class="text-center">
								<img
									src="https://cdn.discordapp.com/emojis/1098652614977146912.gif?size=80&quality=lossless"
									alt="emoji"
									draggable="false"
									class="ml-1 inline-block aspect-video h-3 w-5"
							/></span>
							<span class="text-right">
								<strong class="font-bold text-purple-500">10€/day</strong>
							</span>
						</span>
					</p>
				</div>
				<div
					v-show="activeTab === 'contacts'"
					class="rounded-lg bg-gray-50 p-4 dark:bg-zinc-900"
					id="contacts"
					role="tabpanel"
					aria-labelledby="contacts-tab"
				>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						My payment methods are
						<strong class="font-medium text-gray-800 dark:text-white">Paypal</strong> and
						<strong class="font-medium text-gray-800 dark:text-white">Nitro</strong>.
						<strong class="font-medium text-red-500">You must need to pay first</strong>.
					</p>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 md:mx-0" data-aos="fade-up" data-aos-delay="300">
			<user-card />
		</div>
	</div>
</template>

<script setup>
import { useInterval } from '@vueuse/core';
import { ref } from 'vue';

const lista = ['a developer', 'a girl', 'a gamer', 'an anime fan', 'a kitten'];
const activeTab = ref('profile');

const counter = useInterval(5000, () => {
	// Incrementa el valor para cambiar el texto
});

function setActiveTab(tabName) {
	activeTab.value = tabName;
}

import { useColorMode, useDark, useToggle } from '@vueuse/core';

const colorMode = useColorMode();
const isDark = useDark();
const toggleDark = useToggle(isDark);
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
