<template>
	<div class="mb-3">
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">Playing a game</h2>

		<!-- bodyNormal -->
		<div class="flex items-center">
			<!-- assets -->
			<div class="relative self-start">
				<img
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.large_image}.png`"
					:alt="data.assets!.large_text"
					width="60"
					height="60"
					draggable="false"
					class="block rounded-lg object-cover"
					:class="{ 'large-mask': data.assets!.small_text }"
				/>
				<img
					v-if="data.assets!.small_text"
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.small_image}.png`"
					:alt="data.assets!.small_text"
					width="20"
					height="20"
					draggable="false"
					class="absolute -bottom-1 -right-1 rounded-full"
				/>
				<img
					v-if="!data.assets"
					:src="`https://dcdn.dstn.to/app-icons/${data.application_id}.png`"
					:alt="data.application_id"
					width="20"
					height="20"
					draggable="false"
					class="absolute -bottom-1 -right-1 rounded-full"
				/>
			</div>

			<!-- content -->
			<div class="ml-2.5 flex-auto overflow-hidden">
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
					{{ data.name }}
				</div>
				<div v-if="data.details" class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ data.details }}
				</div>
				<div v-if="data.state" class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ data.state }}
				</div>
				<div v-if="elapsed" class="block overflow-hidden text-ellipsis whitespace-nowrap">{{ elapsed }} elapsed</div>
			</div>
		</div>

		<!-- buttons -->
		<div v-if="data.buttons?.length" class="mt-3 flex flex-initial flex-col flex-wrap items-stretch justify-start">
			<button
				v-for="button in data.buttons"
				:key="typeof button === 'string' ? button : button.label"
				class="relative flex h-8 w-auto items-center justify-center rounded bg-zinc-500 text-sm text-white transition-colors hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500"
			>
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ button }}
				</div>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { GatewayActivity } from 'discord-api-types/payloads/v10';

const secondAsMilliseconds = 1000;
const minuteAsMilliseconds = secondAsMilliseconds * 60;
const hourAsMilliseconds = minuteAsMilliseconds * 60;

const props = defineProps<{ data: GatewayActivity }>();
const elapsed = useState<string | null>('user-card-activity-elapsed', computeElapsed);
window.setInterval(() => (elapsed.value = computeElapsed()), 1000);

function computeElapsed() {
	if (!props.data.timestamps?.start) return null;

	const distance = Date.now() - props.data.timestamps.start;
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
