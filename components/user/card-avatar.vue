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
			class="absolute -top-3 right-0 z-40 h-[108px] w-[108px]"
		/>
		<circle cx="68" cy="68" r="14" fill="white" class="absolute right-3 top-0 z-50 h-8 w-8" />
	</div>
	<div aria-hidden="true" class="relative h-[92px] w-[92px] rounded-full border-[6px] border-[#e0f5ff]">
		<!-- mask -->
		<div width="92" height="80" viewBox="0 0 92 80" class="absolute">
			<div>
				<div>
					<circle cx="40" cy="40" r="40" fill="white" />
					<circle cx="68" cy="68" r="14" fill="purple" />
				</div>
			</div>

			<div class="z-50 h-[80px] w-[80px]">
				<!-- avatarStack -->
				<div class="grid h-full w-full">
					<picture>
						<source
							type="image/webp"
							srcset="/images/avatar-128.webp 1x, /images/avatar-256.webp 2x, /images/avatar-384.webp 3x, /images/avatar-512.webp 4x"
						/>
						<source
							type="image/jpg"
							srcset="/images/avatar-128.jpg 1x, /images/avatar-256.jpg 2x, /images/avatar-384.jpg 3x, /images/avatar-512.jpg 4x"
						/>

						<img
							src="/images/avatar-128.jpg"
							alt="avatar"
							width="80"
							height="80"
							aria-hidden="true"
							draggable="false"
							class="block rounded-full"
						/>
					</picture>
				</div>
			</div>
			<div class="absolute bottom-1 right-1 h-4 w-4 rounded-full" :class="statusClasses[status]"></div>
			<div class="absolute bottom-0 right-0 h-6 w-6 rounded-full border-[6px] border-[#e0f5ff]"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Status } from '~~/composables/use-user';

defineProps<{ status: Status }>();

const statusClasses = {
	online: 'bg-green-600',
	idle: 'bg-amber-400',
	dnd: 'bg-red-700',
	offline: 'bg-slate-500'
} as const;
</script>
