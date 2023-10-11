<template>
	<div class="h-full">
		<div class="mt-16 flex items-center justify-center">
			<div class="w-full">
				<div class="flex justify-center">
					<h1 class="mb-4 whitespace-nowrap text-center text-3xl font-bold text-white lg:text-5xl">
						<span class="align-bottom"
							><span class="bg-gradient-to-r from-sky-400 via-indigo-700 to-indigo-500 bg-clip-text text-transparent">Random </span>
							<span class="bg-gradient-to-r from-sky-400 via-indigo-700 to-indigo-500 bg-clip-text text-transparent">Cat</span>
						</span>
					</h1>
				</div>
				<div class="flex h-[500px] items-center">
					<img class="mx-auto mt-16 max-w-[350px] rounded-lg" :src="catImageUrl" alt="Random cat image" />
				</div>

				<div class="mx-auto mt-16 flex w-[100%]">
					<button
						@click="fetchRandomCatImage()"
						class="group mx-auto mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-sky-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
					>
						<span
							class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
						>
							Generate a New Cat
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	<FooterPage />
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const catImageUrl = ref('');
const lastUpdated = ref(null);

const fetchRandomCatImage = async () => {
	try {
		const response = await axios.get('https://api.thecatapi.com/v1/images/search');
		catImageUrl.value = response.data[0].url;
		lastUpdated.value = Date.now();
	} catch (error) {
		console.error(error);
	}
};

if (!lastUpdated.value || Date.now() - lastUpdated.value > 24 * 60 * 60 * 1000) {
	fetchRandomCatImage();
}
</script>
