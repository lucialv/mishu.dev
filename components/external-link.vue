<template>
	<nuxt-link :to="href" target="_blank" class="underline-offset-2 hover:underline">
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string }>();
</script>
