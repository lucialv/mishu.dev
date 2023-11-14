<template>
	<div id="valorank" class="mb-64 flex items-center justify-center">
		<div data-aos="fade-down" data-aos-delay="300" class="mb-4 whitespace-nowrap text-center text-xl text-white md:text-2xl lg:text-2xl">
			<div>
				<h1
					class="bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_0_0.6rem_#3269eb70]"
				>
					Valorant Rank
					<div
						class="mt-1 h-1 rounded-md bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-400 drop-shadow-[0_0_0.6rem_#3269eb70]"
					></div>
				</h1>
			</div>
			<div class="mt-10 rounded-lg bg-gradient-to-tl from-blue-500 via-blue-400 to-blue-200 p-8 pb-24 md:pb-8 lg:pb-0 md:p-16 lg:p-32 md:items-center lg:flex">
				<div class="lg:mr-16">
					<div class="mb-4 mt-8 flex items-center">
						<a
							href="https://tracker.gg/valorant/profile/riot/Lucía%20예쁜%23love/overview"
							target="_blank"
							class="mx-auto font-bold hover:underline"
							:style="{ color: getTierColor(currentTierPatched) }"
							>{{ playerName }}#{{ tag }}</a
						>
					</div>
					<img :src="images.large" alt="Large Icon" class="mx-auto h-32 w-32 md:h-44 md:w-44" />
					<p class="my-4 font-bold" :style="{ color: getTierColor(currentTierPatched) }">
						{{ currentTierPatched.toUpperCase() }}
					</p>
					<div v-if="elo <= 2099">
						<div class="relative mb-2 h-2 w-full overflow-hidden rounded-full bg-white/60">
							<div
								class="animate-stripes absolute left-0 top-0 h-full rounded-lg bg-[#23fed7]"
								:style="{ width: `${rankingInTier}%` }"
							></div>
						</div>
						<div class="mb-10 flex">
							<p class="text-start text-sm">RANK RATING</p>
							<p class="ml-auto text-sm font-bold">
								<span class="text-[#23fed7]">{{ rankingInTier }}</span> / 100
							</p>
						</div>
					</div>
					<div v-else>
						<div class="mb-10 text-xl text-white">
							<p class="text-center font-semibold">RANK RATING</p>
							<p class="font-bold">
								{{ rankingInTier }}
							</p>
						</div>
					</div>
				</div>
				<div class="flex">
					<!-- Start Card -->
					<div class="relative lg:ml-16">
						<img src="/images/jettcard.webp" alt="jett" draggable="false" class="[clip-path:polygon(0_0,100%_0%,100%_72%,0_72%)]" />
						<img
							src="/images/jettcard.webp"
							alt="jett"
							draggable="false"
							class="absolute right-0 top-0 opacity-40 [clip-path:polygon(100%_76%,100%_88%,78%_97%,50%_86%,21%_97%,0_88%,0_76%)]"
						/>
						<img src="/images/jettcard.webp" draggable="false" alt="jett" class="absolute right-0 top-0 rounded-lg opacity-20 blur-sm" />

						<img src="/images/ActRank.webp" draggable="false" alt="triangle" class="absolute -top-12 right-[83px] h-[100px]" />
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute -top-6 right-[123.0px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute -top-[6px] right-[133.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangledownicon.png"
							alt="triangle down"
							class="absolute -top-[6px] right-[123.3px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute -top-[6px] right-[112.8px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute right-[144px] top-[12.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangledownicon.png"
							alt="triangle down"
							class="absolute right-[133.8px] top-[12.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute right-[123.3px] top-[12.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangledownicon.png"
							alt="triangle down"
							class="absolute right-[113px] top-[12.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/ranktriangleupicon.png"
							alt="triangle up"
							class="absolute right-[102.6px] top-[12.2px] h-[18.2px]"
							draggable="false"
						/>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/largeicon.png"
							alt="rank logo"
							class="absolute -top-[14px] right-[112px] h-11"
							draggable="false"
						/>

						<div class="absolute -top-3 h-[6px] w-[90px] bg-white [clip-path:polygon(0_0,100%_0%,90%_100%,0%_100%)]"></div>
						<div class="absolute -top-3 right-0 h-[6px] w-[90px] bg-white [clip-path:polygon(0_0,100%_0%,100%_100%,10%_100%)]"></div>

						<div
							class="absolute -left-[6px] bottom-[60px] z-10 h-[20px] w-[95px] rotate-[45deg] bg-[#fcfee1] [clip-path:polygon(0_0,78.5%_0%,100%_100%,21.2%_100%)]"
						></div>
						<div
							class="absolute -right-[6px] bottom-[60px] z-10 h-[20px] w-[95px] -rotate-[45deg] bg-[#fcfee1] [clip-path:polygon(20%_0,100%_0%,80%_100%,0%_100%)]"
						></div>

						<div class="absolute -right-[13px] top-0 h-[525px] w-[1px] bg-gray-200"></div>
						<div class="absolute -left-[13px] top-0 h-[525px] w-[1px] bg-gray-200"></div>
						<div class="absolute left-0 top-0 h-[40px] w-[1px] bg-gray-200"></div>
						<div class="absolute right-0 top-0 h-[40px] w-[1px] bg-gray-200"></div>

						<div class="absolute -left-[11px] top-[35px] h-[32px] w-[1px] rotate-45 bg-gray-200"></div>
						<div class="absolute -right-[11px] top-[35px] h-[32px] w-[1px] -rotate-45 bg-gray-200"></div>

						<div class="absolute -right-[22px] top-[62px] h-[440px] w-[1px] bg-gray-200"></div>
						<div class="absolute -left-[22px] top-[62px] h-[440px] w-[1px] bg-gray-200"></div>

						<div class="absolute -left-[2.9px] bottom-[92px] h-[55px] w-[1px] -rotate-[45deg] bg-gray-200"></div>
						<div class="absolute -right-[2.9px] bottom-[92.6px] h-[55px] w-[1px] rotate-[45deg] bg-gray-200"></div>

						<div class="absolute bottom-[81px] left-[1px] h-[40px] w-[1px] -rotate-[45deg] bg-gray-200"></div>
						<div class="absolute bottom-[81px] right-[1px] h-[40px] w-[1px] rotate-[45deg] bg-gray-200"></div>

						<div class="absolute bottom-[78px] left-0 h-[70px] w-[1px] bg-gray-200"></div>
						<div class="absolute bottom-[78px] right-0 h-[70px] w-[1px] bg-gray-200"></div>

						<div class="absolute bottom-[7px] left-[28.74px] h-[83px] w-[1px] -rotate-[45deg] bg-gray-200"></div>
						<div class="absolute bottom-[7px] right-[28.74px] h-[83px] w-[1px] rotate-[45deg] bg-gray-200"></div>

						<div class="absolute bottom-[3px] left-[95.74px] h-[103.5px] w-[1px] rotate-[47deg] bg-gray-200"></div>
						<div class="absolute bottom-[3px] right-[95.74px] h-[103.5px] w-[1px] -rotate-[47deg] bg-gray-200"></div>

						<div class="absolute bottom-[4px] left-[57.74px] h-[15.5px] w-[1px] bg-gray-200"></div>
						<div class="absolute bottom-[4px] right-[57.74px] h-[35.5px] w-[1px] bg-gray-200"></div>

						<div class="absolute bottom-[15px] left-[78.2px] h-[30px] w-[1px] -rotate-[47deg] bg-gray-200"></div>
						<div class="absolute bottom-[15px] right-[78.2px] h-[30px] w-[1px] rotate-[47deg] bg-gray-200"></div>

						<div class="absolute -bottom-[10px] left-[89px] h-[30px] w-[1px] bg-gray-200"></div>
						<div class="absolute -bottom-[10px] right-[89px] h-[30px] w-[1px] bg-gray-200"></div>

						<div class="absolute -bottom-[45.5px] left-[96.2px] h-[85.5px] w-[1px] -rotate-[47deg] bg-gray-200"></div>
						<div class="absolute -bottom-[45.5px] right-[96.2px] h-[85.5px] w-[1px] rotate-[47deg] bg-gray-200"></div>

						<div class="absolute -bottom-[50.5px] left-[120.2px] h-[20.5px] w-[1px] -rotate-[47deg] bg-gray-200"></div>
						<div class="absolute -bottom-[50.5px] right-[120.2px] h-[20.5px] w-[1px] rotate-[47deg] bg-gray-200"></div>

						<div class="absolute -bottom-[52.5px] left-[127.5px] h-[5.5px] w-[1px] bg-gray-200"></div>
						<div class="absolute -bottom-[52.5px] right-[127.5px] h-[5.5px] w-[1px] bg-gray-200"></div>

						<div class="absolute -bottom-[82.5px] left-[95.2px] h-[103.5px] w-[1px] -rotate-[47deg] bg-gray-200"></div>
						<div class="absolute -bottom-[82.5px] right-[95.2px] h-[103.5px] w-[1px] rotate-[47deg] bg-gray-200"></div>
						<img
							src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/largeicon.png"
							alt="rank logo"
							class="absolute -bottom-[20px] right-[35%] h-20"
							draggable="false"
						/>

						<div class="absolute -right-[13px] bottom-[168px] w-[294px] bg-[#eaefb2] text-center text-black">
							<h1>
								{{ playerName }}
							</h1>
						</div>
						<div class="absolute bottom-[148px] right-0 w-[268px] text-center text-sm font-thin text-white backdrop-blur-lg">
							<h1>UwU</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const apiUrl = 'https://api.henrikdev.xyz/valorant/v1/mmr/eu/Lucía%20예쁜/love';
const playerName = ref('');
const currentTier = ref('');
const mmr = ref(0);
const currentTierPatched = ref('');
const rankingInTier = ref(0);
const mmrChangeToLastGame = ref(0);
const elo = ref(0);
const tag = ref('');
const isFinished = ref(false);
const images = ref({
	small: '',
	large: '',
	triangle_down: '',
	triangle_up: ''
});

const tierColors = {
	'Iron 1': '#838283',
	'Iron 2': '#838283',
	'Iron 3': '#838283',
	'Bronze 1': '#a4855c',
	'Bronze 2': '#a4855c',
	'Bronze 3': '#a4855c',
	'Silver 1': '#bac3c2',
	'Silver 2': '#bac3c2',
	'Silver 3': '#bac3c2',
	'Gold 1': '#ecce57',
	'Gold 2': '#ecce57',
	'Gold 3': '#ecce57',
	'Platinum 1': '#57a7b2',
	'Platinum 2': '#57a7b2',
	'Platinum 3': '#57a7b2',
	'Diamond 1': '#b588c4',
	'Diamond 2': '#b588c4',
	'Diamond 3': '#b588c4',
	'Ascendant 1': '#6be0af',
	'Ascendant 2': '#6be0af',
	'Ascendant 3': '#6be0af',
	'Immortal 1': '#bb3c64',
	'Immortal 2': '#bb3c64',
	'Immortal 3': '#bb3c64',
	Radiant: '#ffffaa'
};

const tierTranslations = {
	'Iron 1': 'Hierro 1',
	'Iron 2': 'Hierro 2',
	'Iron 3': 'Hierro 3',
	'Bronze 1': 'Bronce 1',
	'Bronze 2': 'Bronce 2',
	'Bronze 3': 'Bronce 3',
	'Silver 1': 'Plata 1',
	'Silver 2': 'Plata 2',
	'Silver 3': 'Plata 3',
	'Gold 1': 'Oro 1',
	'Gold 2': 'Oro 2',
	'Gold 3': 'Oro 3',
	'Platinum 1': 'Platino 1',
	'Platinum 2': 'Platino 2',
	'Platinum 3': 'Platino 3',
	'Diamond 1': 'Diamante 1',
	'Diamond 2': 'Diamante 2',
	'Diamond 3': 'Diamante 3',
	'Ascendant 1': 'Ascendente 1',
	'Ascendant 2': 'Ascendente 2',
	'Ascendant 3': 'Ascendente 3',
	'Immortal 1': 'Inmortal 1',
	'Immortal 2': 'Inmortal 2',
	'Immortal 3': 'Inmortal 3',
	Radiant: 'Radiante'
};

const getTierColor = (tier) => {
	return tierColors[tier] || ''; // Si el rango no está en la lista, no se aplicará ningún color
};

const getTierTranslation = (tier) => {
	return tierTranslations[tier] || tier; // Si el rango no está en la lista, se mostrará el nombre original
};

const fetchData = async () => {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		playerName.value = data.data.name;
		currentTier.value = data.data.currenttier;
		mmr.value = data.data.elo;
		currentTierPatched.value = data.data.currenttierpatched;
		rankingInTier.value = data.data.ranking_in_tier;
		mmrChangeToLastGame.value = data.data.mmr_change_to_last_game;
		elo.value = data.data.elo;
		tag.value = data.data.tag;
		isFinished.value = data.isFinished;
		images.value = data.data.images;
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => {
	fetchData();
});
</script>
