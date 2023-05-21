<template>
	<div class="mb-3">
		<h2 class="font-bold text-xs text-zinc-700 dark:text-slate-300 leading-4 mb-2 uppercase">Playing a game</h2>

		<!-- bodyNormal -->
		<div class="items-center flex">
			<!-- assets -->
			<div class="relative self-start">
				<img
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.large_image}.png`"
					:alt="data.assets!.large_text"
					width="60"
					height="60"
					class="block object-cover rounded-lg"
					:class="{ 'large-mask': data.assets!.small_text }"
				/>
				<img
					v-if="data.assets!.small_text"
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.small_image}.png`"
					:alt="data.assets!.small_text"
					width="20"
					height="20"
					class="rounded-full absolute -bottom-1 -right-1"
				/>
			</div>

			<!-- content -->
			<div class="flex-auto overflow-hidden ml-2.5">
				<div class="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm">{{ data.name }}</div>
				<div v-if="data.details" class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ data.details }}</div>
				<div v-if="data.state" class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ data.state }}</div>
				<div v-if="elapsed" class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ elapsed }} elapsed</div>
			</div>
		</div>

		<!-- buttons -->
		<div v-if="data.buttons?.length" class="flex flex-initial mt-3 flex-col flex-wrap justify-start items-stretch">
			<button
				v-for="button in data.buttons"
				:key="typeof button === 'string' ? button : button.label"
				class="h-8 text-sm w-auto relative flex items-center justify-center text-white bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500 rounded transition-colors"
			>
				<div class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ button }}</div>
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
	if (!props.data.timestamps) return null;

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
