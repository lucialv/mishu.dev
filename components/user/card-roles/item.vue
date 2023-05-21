<template>
	<div
		class="mb-1 mr-1 p-1 font-medium text-xs flex items-center bg-slate-200 dark:bg-zinc-800 rounded"
		:aria-label="role"
		tabindex="-1"
		role="listitem"
	>
		<!-- roleButton -->
		<div class="relative items-center">
			<span class="w-3 h-3 rounded-full mx-1 shrink-0 flex" :class="classColor"></span>
		</div>

		<!-- roleName -->
		<div class="max-w-[200px] whitespace-nowrap text-ellipsis mr-1">
			{{ role }}
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps(['role', 'classColor']);
</script>
