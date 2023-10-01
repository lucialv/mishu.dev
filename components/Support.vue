<template>
	<div id="support" class="mx-auto mb-64 flex px-5 py-12 md:py-32">
		<div class="mb-16 items-center font-['Whitney'] drop-shadow-xl md:mb-0 md:flex">
			<div class="pt-8 md:mr-8">
				<div class="text-center md:text-start lg:pl-32 lg:pr-10 xl:pl-60">
					<div>
						<h1
							class="w-[125px] bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-justify"
						>
							Support
						</h1>
						<div class="mt-1 h-1 w-[125px] rounded-md bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400"></div>
					</div>
					<div class="">
						<div class="mt-4 md:max-w-md">
							<p class="text-xl text-black dark:text-white">
								You can support me via
								<a
									href="https://ko-fi.com/"
									class="font-bold text-pink-600 underline decoration-pink-600 decoration-wavy dark:text-pink-400 dark:decoration-pink-400"
									>Ko-fi</a
								>!
							</p>
						</div>
						<div class="mb-6 mt-6 md:mb-0">
							<nuxt-link href="https://ko-fi.com/lucialv">
								<button
									class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-400 p-0.5 text-2xl font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
								>
									<span
										class="relative flex items-center rounded-md bg-white px-5 py-2 font-semibold transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-800"
									>
										Send me a coffe!
									</span>
								</button>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div class="">
				<img src="/images/Support.webp" loading="lazy" alt="support photo" class="h-[100%] w-[100%] max-w-2xl rounded-3xl" />
			</div>
		</div>
	</div>
</template>
