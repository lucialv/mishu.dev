<template>
	<div id="home" class="container right-0 mx-auto mb-72 flex flex-col items-center px-5 py-20 md:flex-row md:py-32">
		<div
			data-aos="fade-down"
			data-aos-delay="300"
			class="mb-16 flex flex-col items-center text-center text-black drop-shadow-xl md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
		>
			<strong>
				<div class="pt-16 text-4xl md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					<h1 class="mb-4 font-[Poppins-Bold] text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
						Requisitos para ser mi
						<span
							class="animate-text bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_0.6rem_#3269eb70]"
							>Novia</span
						>
					</h1>
				</div>
			</strong>
			<div class="mt-8 flex max-w-lg flex-col font-[Poppins] text-gray-900">
				<h3 class="mb-4 text-2xl font-semibold">Requisitos <span class="text-red-400">Obligatorios</span></h3>
				<p class="mb-4 font-light text-gray-500 sm:text-lg">Si no cumples alguno de estos requisitos no puedes ser mi Novia.</p>
				<!-- List -->
				<ul role="list" class="mb-8 space-y-4 text-left">
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser mujer</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser del 2008 o antes</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Vivir en <span class="font-semibold">España</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser <span class="font-semibold">lesbiana/bisexual/pansexual </span>(lesbiana mejor)</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Tener <span class="font-semibold">respeto</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Tener <span class="font-semibold">personalidad</span></span>
					</li>
				</ul>
			</div>
			<div class="mt-8 flex max-w-lg flex-col font-[Poppins] text-gray-900">
				<h3 class="mb-4 text-2xl font-semibold">Requisitos <span class="text-yellow-400">Semi-Obligatorios</span></h3>
				<p class="mb-4 font-light text-gray-500 sm:text-lg">
					Si no cumples alguno de estos requisitos no pasa nada pero es mejor cumplirlos.
				</p>
				<!-- List -->
				<ul role="list" class="mb-8 space-y-4 text-left">
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser de <span class="font-semibold">Cataluña</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Jugar <span class="font-semibold">Valorant</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser <span class="font-semibold">Dominante</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Contestar <span class="font-semibold">rápido</span> a los mensajes</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Que te guste el <span class="font-semibold">Anime</span> </span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Que te guste el <span class="font-semibold">K-Pop</span> </span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Que te gusten los <span class="font-semibold">K-Dramas</span> </span>
					</li>
				</ul>
			</div>
			<div class="mt-8 flex max-w-lg flex-col font-[Poppins] text-gray-900">
				<h3 class="mb-4 text-2xl font-semibold">Requisitos <span class="text-green-400">Extras</span></h3>
				<p class="mb-4 font-light text-gray-500 sm:text-lg">
					Si no los cumples no pasa nada, pero si los cumples tienas más puntos de gustarme.
				</p>
				<!-- List -->
				<ul role="list" class="mb-8 space-y-4 text-left">
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span><span class="text-fuchsia-600">Diamante</span> en <span class="font-semibold">Valorant</span> o superior</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Que te guste la <span class="font-semibold">programación</span> o la estudies</span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Ser <span class="font-semibold">Asiática</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Tener <span class="font-semibold">dinero</span></span>
					</li>
					<li class="flex items-center space-x-3">
						<!-- Icon -->
						<Checkmark />
						<span>Saber <span class="font-semibold">maquillar</span></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup lang="js">
// poner siempre en blanco la pagina
document.body.style.backgroundColor = "white";
</script>
