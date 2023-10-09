<template>
	<!-- avatar -->
	<div class="relative">
		<!-- https://cdn.discordapp.com/avatar-decoration-presets/a_fe3c76cac2adf426832a7e495e8329d3.png?size=240&amp;passthrough=true -->
		<img
			src="https://cdn.discordapp.com/avatar-decoration-presets/a_8ffa2ba9bff18e96b76c2e66fd0d7fa3.png?size=240&passthrough=true"
			alt="avatar"
			width="100"
			height="100"
			aria-hidden="true"
			draggable="false"
			class="absolute -top-3 right-0 z-[900] h-[108px] w-[108px]"
		/>
	</div>
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
							type="image/webp"
							srcset="/images/avatar-128.webp 1x, /images/avatar-256.webp 2x, /images/avatar-384.webp 3x, /images/avatar-512.webp 4x"
						/>
						<source
							type="image/gif"
							srcset="/images/avatar-128.gif 1x, /images/avatar-256.gif 2x, /images/avatar-384.gif 3x, /images/avatar-512.gif 4x"
						/>

						<img src="/images/avatar-128.gif" alt="avatar" width="80" height="80" aria-hidden="true" draggable="false" class="block" />
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
