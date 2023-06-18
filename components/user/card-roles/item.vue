<template>
	<div class="mb-1 mr-1 flex items-center rounded bg-slate-200 p-1 text-xs font-medium dark:bg-zinc-800" :aria-label="role" role="listitem">
		<!-- roleButton -->
		<div class="relative items-center">
			<span class="mx-1 flex h-3 w-3 shrink-0 rounded-full" :class="classColor"></span>
		</div>

		<!-- roleName -->
		<div class="mr-1 max-w-[200px] text-ellipsis whitespace-nowrap">
			{{ role }}
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps(['role', 'classColor']);
</script>
