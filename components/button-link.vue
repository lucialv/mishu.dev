<template>
	<nuxt-link
		is="button"
		:to="href"
		target="_blank"
		class="rounded px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white focus:outline-none"
		:class="types[type ?? 'none']"
	>
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
	none: 'bg-fuchsia-500 hover:bg-white hover:scale-105 hover:text-fuchsia-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium leading-normal transition-all duration-300 focus:outline-none rounded',
	info: ''
};
</script>
