<template>
	<div class="flex items-center justify-center p-12">
		<!-- Author: FormBold Team -->
		<!-- Learn More: https://formbold.com -->
		<div class="mx-auto w-full max-w-[550px]">
			<form action="https://formbold.com/s/35K1E" method="POST">
				<div class="mb-5 max-w-[200px]">
					<label for="name" class="mb-3 block text-base font-medium text-black dark:text-zinc-100"> Full Name </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full Name"
						class="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
					/>
				</div>
				<div class="mb-5 max-w-[300px]">
					<label for="email" class="mb-3 block text-base font-medium text-black dark:text-zinc-100"> Email Address </label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="example@domain.com"
						class="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
					/>
				</div>
				<div class="mb-5 max-w-[400px]">
					<label for="subject" class="mb-3 block text-base font-medium text-black dark:text-zinc-100"> Subject </label>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder="Enter your subject"
						class="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
					/>
				</div>
				<div class="mb-5">
					<label for="message" class="mb-3 block text-base font-medium text-black dark:text-zinc-100"> Message </label>
					<textarea
						rows="4"
						name="message"
						id="message"
						placeholder="Type your message"
						class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
					></textarea>
				</div>
				<div>
					<button
						class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-300 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out"
					>
						<span
							class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-pink-300 text-white duration-300 group-hover:translate-x-0"
						>
							<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</span>
						<span
							class="ease absolute flex h-full w-full transform items-center justify-center text-pink-300 transition-all duration-300 group-hover:translate-x-full"
							>Submit</span
						>
						<span class="invisible relative">Submit</span>
					</button>
					<!-- <button
						class="rounded-md border-2 border-purple-300 bg-white/10 px-8 py-3 text-base font-semibold text-white ring hover:border-white hover:bg-zinc-100 hover:text-purple-300 hover:shadow-sm"
					>
						Submit
					</button> -->
				</div>
			</form>
		</div>
	</div>
</template>
