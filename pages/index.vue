<template>
  <div class="flex flex-col justify-between min-h-screen ...">
    <client-only
      class="text-white grid grid-cols-1 justify-items-center pt-[25%] text-xl font-['RockoUltraFLF']"
      placeholder=" Loading..."
    >
      <div
        class="container right-0 mx-auto flex px-5 md:py-32 py-12 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-white md:text-left mb-16 md:mb-0 items-center text-center drop-shadow-xl font-['RockoUltraFLF']"
        >
          <strong>
            <div
              class="leading-relaxed text-5xl text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hover:text-cyan-100"
            >
              <h1>
                Hi! I'm
                <span class="text-cyan-200">Lucía </span>
                ♡
              </h1>
            </div>
            <div>
              <h2
                class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white hover:text-cyan-100 leading-relaxed"
              >
                And I'm
                <Transition name="fade" mode="out-in">
                  <span
                    class="text-cyan-200"
                    v-if="lista[counter % lista.length] == `a girl`"
                    id="words"
                    >{{ lista[counter % lista.length] }}</span
                  >
                  <span
                    class="text-cyan-200"
                    v-else-if="lista[counter % lista.length] == `a gamer`"
                    id="words"
                    >{{ lista[counter % lista.length] }}</span
                  >
                  <span
                    class="text-cyan-200"
                    v-else-if="lista[counter % lista.length] == `a developer`"
                    id="words"
                    >{{ lista[counter % lista.length] }}</span
                  >
                  <span
                    class="text-cyan-200"
                    v-else-if="lista[counter % lista.length] == `an anime fan`"
                    id="words"
                    >{{ lista[counter % lista.length] }}</span
                  >
                </Transition>
              </h2>
            </div>
          </strong>
          <div class="flex justify-center pt-10">
            <NuxtLink to="https://github.com/mishhuu" target="_blank">
              <button
                class="bg-sky-400 hover:bg-white hover:text-sky-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium leading-normal focus:outline-none rounded"
              >
                GitHub
              </button>
            </NuxtLink>
            <button
              class="inline-block ml-2 rounded text-neutral-800 dark:text-zinc-100 bg-neutral-100 dark:bg-zinc-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal black:text-neutral-50 drop-shadow-xl transition duration-150 ease-in-out"
              @click="toggleDark()"
            >
              {{ isDark ? "Light" : "Dark" }}
            </button>
          </div>
        </div>

        <user-card />
      </div>
      <footer class="body-font">
        <div class="container px-5 py-8 mx-auto flex items-center flex-col">
          <p
            class="text-sm opacity-70 sm:py-2 drop-shadow-xl sm:mt-0 mt-4 text-white font-['RockoUltraFLF']"
          >
            © 2023 Lucía Álvarez
          </p>
        </div>
      </footer>
    </client-only>
  </div>
  <!--
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡶⠾⠛⠛⠋⠉⠉⠉⠉⠉⠛⠛⠻⠶⣦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡶⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣄⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠈⠙⢿⣄⠀⠀⠀⠉⠙⠻⣦⡀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⠳⣄⠀⠀⠀⠀⢸⠁⠈⢣⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠹⣧
  ⠀⠀⠀⠀⠀⠀⢠⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠸⡆⠀⠀⠀⠸⣇⠀⠈⣧⠀⠀⠀⠀⠻⣄⠀⠀⠀⠀⣿
  ⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⣀⣠⣿⠀⠀⠀⠀⢻⣷⣾⣿⡆⠀⠀⠀⠀⠹⣆⠀⠀⢰⡿
  ⠀⠀⠀⠀⢠⡿⢀⣠⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⡇⠀⠀⠀⠘⡿⠿⠟⣇⠀⠀⠀⠀⠀⢹⡆⢀⣿⠃
  ⠀⠀⠀⢠⣾⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡌⠉⠀⡇⠀⠀⠀⠀⠹⡀⠀⡏⢀⣴⣿⣿⣿⠀⢿⡿⠁⠀
  ⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣶⣶⣶⡄⠀⠳⣤⡼⠁⠀⠀⠀⠀⠀⠙⠚⠁⠈⢛⠟⠛⠉⠀⢸⣧⠀⠀
  ⢀⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠿⠿⠃⠀⠀⠀⠀⠀⣾⡄⠀⣷⡇⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⣿⠀⠀
  ⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠭⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀
  ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⢶⣿⣿⡛⠛⠛⠛⠶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠀⠀
  ⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠞⠋⠁⠐⠛⠛⠋⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀
  ⠈⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠀
  ⠀⠀⠉⠛⠷⢶⣶⠶⠶⠶⠖⠛⠋⠁⣴⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢻⣦⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⢠⣾⠃⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠹⣷⣀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⢀⣴⡿⠁⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣶⣄⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⢀⣤⣿⠏⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⣠⡴⠋⣹⡏⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣋⣠⡴⠶⠛⠁⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠟⠉⠉⠀⠀⠀⠀⠀⣴⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢷⣤⣄⣀⣀⣀⣤⡴⠞⠋⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⢀⣤⣶⠆⢀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣄⠀⠀⠀⠙⣛⣡⣶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  -->
</template>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script setup lang="js">
import { useInterval, useDark, useToggle } from '@vueuse/core'
var lista = ["a developer", "a girl", "a gamer", "an anime fan"];
const counter = useInterval(5000, () => {
  // Incrementa el valor para cambiar el texto
});
const colorMode = useColorMode()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
