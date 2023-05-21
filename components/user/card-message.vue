<template>
  <div
    class="relative w-full flex flex-wrap items-stretch p-3 bg-slate-200 dark:bg-zinc-800 rounded"
  >
    <textarea
      class="rounded-r-none flex-auto outline-0 bg-transparent overflow-hidden resize-none"
      placeholder="Message @mishhuu"
      aria-label="Send an email to Lucía"
      v-model.trim="input"
      @input="handleInput"
      @keyup.ctrl.enter="submit"
    ></textarea>
    <button class="flex-none self-start" aria-label="Send" @click="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-6 ml-2 top-3 right-3 rounded-l-none fill-zinc-700 dark:fill-zinc-300"
        :class="{ 'opacity-20': !input.length }"
      >
        <path
          d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
        />
      </svg>
    </button>
  </div>
  <div v-if="input" class="text-right text-xs">
    <label for="email-form"
      ><span class="font-bold text-indigo-500">Tip:</span> You can press Ctrl +
      Enter to send</label
    >
  </div>

  <a
    href="#"
    ref="anchor"
    class="hidden"
    aria-hidden="false"
    rel="nofollow"
    target="_top"
  ></a>
</template>

<script setup lang="ts">
const input = ref("");
const anchor = ref<HTMLAnchorElement>();

function submit() {
  anchor.value.href = `mailto:mishudiscord@gmail.com?body=${encodeURIComponent(
    input.value
  )}`;
  anchor.value.click();
  input.value = "";
}

function handleInput(event: KeyboardEvent) {
  const target = event.target as HTMLTextAreaElement;
  target.style.removeProperty("height");
  target.style.height = `${target.scrollHeight + 2}px`;
}
</script>
