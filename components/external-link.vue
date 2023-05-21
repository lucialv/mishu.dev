<template>
	<nuxt-link :to="href" target="_blank" class="hover:underline underline-offset-2">
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string }>();
</script>
