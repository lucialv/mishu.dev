<template>
  <nuxt-link
    :to="href"
    target="_blank"
    class="text-white py-2 px-6 focus:outline-none rounded-lg"
    :class="types[type ?? 'none']"
  >
    {{ text ?? href }}
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
  none: "bg-sky-400 hover:bg-white hover:text-sky-500",
  info: "bg-indigo-500 hover:bg-indigo-600",
};
</script>
