<template>
	<!-- avatar -->
	<div aria-hidden="true" class="relative h-[92px] w-[92px] rounded-full border-[6px] border-slate-50 dark:border-zinc-900">
		<!-- mask -->
		<svg width="92" height="80" viewBox="0 0 92 80" class="absolute">
			<defs>
				<mask id="avatar-mask">
					<circle cx="40" cy="40" r="40" fill="white" />
					<circle cx="68" cy="68" r="14" fill="black" />
				</mask>
			</defs>

			<foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
				<!-- avatarStack -->
				<div class="grid h-full w-full">
					<picture>
						<source
							type="image/gif"
							srcset="https://cdn.discordapp.com/avatars/300969054649450496/a_cdc522e76939c27c237031d01739115a.gif?size=128 1x, https://cdn.discordapp.com/avatars/300969054649450496/a_cdc522e76939c27c237031d01739115a.gif?size=256 2x, https://cdn.discordapp.com/avatars/300969054649450496/a_cdc522e76939c27c237031d01739115a.gif?size=384 3x, https://cdn.discordapp.com/avatars/300969054649450496/a_cdc522e76939c27c237031d01739115a.gif?size=512 4x"
						/>
						<img
							src="https://cdn.discordapp.com/avatars/300969054649450496/a_cdc522e76939c27c237031d01739115a.gif?size=128"
							alt="avatar"
							width="80"
							height="80"
							aria-hidden="true"
							draggable="false"
							class="block"
						/>
					</picture>
				</div>
			</foreignObject>
			<circle cx="68" cy="68" r="8" :class="statusClasses[status]"></circle>
		</svg>
	</div>
</template>

<script setup lang="ts">
import { Status } from '~~/composables/use-user';

defineProps<{ status: Status }>();

const statusClasses = {
	online: 'fill-green-600',
	idle: 'fill-amber-400',
	dnd: 'fill-red-700',
	offline: 'fill-slate-500'
} as const;
</script>
