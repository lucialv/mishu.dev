<template>
	<div>
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">Playing a game</h2>

		<!-- bodyNormal -->
		<div class="flex">
			<ul>
				<li v-for="(activity, index) in testactivities" :key="activity.id">
					<template v-if="index !== 0">
						<!-- assets -->
						<div class="flex flex-col gap-y-8">
							<div class="mb-4 flex items-center gap-x-2">
								<div>
									<!-- non-spotify applicationn with assets-->
									<img
										v-if="activity.name != 'Spotify' && activity.assets"
										:src="`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets!.large_image}.webp`"
										:alt="activity.assets!.large_text"
										draggable="false"
										class="h-[60px] w-[60px] rounded-lg object-cover"
									/>
									<!-- non-spotify applications and no assets-->
									<img
										v-if="activity.name != 'Spotify' && !activity.assets"
										:src="`https://dcdn.dstn.to/app-icons/${activity.application_id}.png`"
										:alt="activity.name"
										draggable="false"
										class="h-[60px] w-[60px] rounded-lg object-cover"
									/>
									<!-- spotify -->
									<img
										v-if="activity.name == 'Spotify'"
										:src="spotdata.album_art_url"
										alt="spotify song"
										draggable="false"
										class="h-[60px] max-h-[60px] min-h-[60px] w-[60px] min-w-[60px] max-w-[60px] rounded-lg object-cover"
									/>
								</div>
								<div>
									<!-- content -->
									<div class="ml-2.5 flex-auto overflow-hidden">
										<div class="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
											{{ activity.name }}
										</div>
										<div v-if="activity.details" class="overflow-hidden text-ellipsis whitespace-nowrap">
											{{ activity.details }}
										</div>
										<div v-if="activity.state" class="overflow-hidden text-ellipsis whitespace-nowrap">
											{{ activity.state }}
										</div>
										<div v-if="elapsed" class="overflow-hidden text-ellipsis whitespace-nowrap">
											{{ computeElapsed(activity.timestamps?.start) }} elapsed
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</li>
			</ul>
		</div>

		<!-- buttons -->
		<!-- <div v-if="data.buttons?.length" class="mt-3 flex flex-initial flex-col flex-wrap items-stretch justify-start">
			<button
				v-for="button in data.buttons"
				:key="typeof button === 'string' ? button : button.label"
				class="relative flex h-8 w-auto items-center justify-center rounded bg-zinc-500 text-sm text-white transition-colors hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500"
			>
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ button }}
				</div>
			</button>
		</div> -->
	</div>
</template>

<script setup lang="ts">
import type { GatewayActivity } from 'discord-api-types/payloads/v10';
import { spotifyStatus } from '~~/composables/use-user';

const secondAsMilliseconds = 1000;
const minuteAsMilliseconds = secondAsMilliseconds * 60;
const hourAsMilliseconds = minuteAsMilliseconds * 60;

const fun = defineProps<{ spotdata: spotifyStatus; testactivities: GatewayActivity[]; singleactivity: GatewayActivity }>();

const elapsed = useState<string | null>('user-card-activity-elapsed');

window.setInterval(() => {
	elapsed.value = computeElapsed(fun.singleactivity.timestamps?.start);
}, 1000);

function computeElapsed(startTimestamp?: number) {
	if (!startTimestamp) return null;

	const distance = Date.now() - startTimestamp;
	const seconds = (Math.floor(distance / secondAsMilliseconds) % 60).toString().padStart(2, '0');
	const minutes = (Math.floor(distance / minuteAsMilliseconds) % 60).toString().padStart(2, '0');
	if (distance < hourAsMilliseconds) return `${minutes}:${seconds}`;
	const hours = Math.floor(distance / hourAsMilliseconds)
		.toString()
		.padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped>
.large-mask {
	mask: url(/assets/masks/card-activity-large.svg);
}
</style>
