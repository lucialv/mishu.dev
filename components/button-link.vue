<template>
  <nuxt-link
    :to="href"
    target="_blank"
    class="text-white px-6 pb-2 pt-2.5 text-xs font-medium leading-normal focus:outline-none rounded"
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
