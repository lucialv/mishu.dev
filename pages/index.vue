<template>
  <div class="flex flex-col justify-between min-h-screen ...">
    <div id="home"></div>
    <client-only
      class="text-white grid grid-cols-1 justify-items-center pt-[25%] text-xl font-['RockoUltraFLF']"
      placeholder=" Loading..."
    >
      <div class="sticky top-0 z-50 font-['RockoFLF']">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div
                class="absolute inset-y-0 left-0 flex items-center sm:hidden"
              >
                <!-- Mobile menu button-->
                <DisclosureButton
                  class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon
                    v-if="!open"
                    class="block h-6 w-6"
                    aria-hidden="true"
                  />
                  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
              <div
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
              >
                <!-- <div class="flex flex-shrink-0 items-center">
                  <img
                    class="block h-8 w-auto lg:hidden rounded-2xl"
                    src="/images/avatar-128.webp"
                    alt="Your Company"
                  />
                  <img
                    class="hidden h-8 w-auto lg:block rounded-2xl"
                    src="/images/avatar-128.webp"
                    alt="Your Company"
                  />
                </div> -->
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      ]"
                      :aria-current="item.current ? 'page' : undefined"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <!-- <button
                  type="button"
                  class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button> -->

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3">
                  <div>
                    <MenuButton
                      class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="/images/avatar-256.webp"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          ]"
                          >Your Profile</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          ]"
                          >Settings</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          ]"
                          >Sign out</a
                        >
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <DisclosureButton
                v-for="item in navigation"
                :key="item.name"
                as="a"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</DisclosureButton
              >
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
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
                <span class="text-cyan-200">Mishu </span>
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
      <div
        class="container right-0 mx-auto flex px-5 md:pt-16 md:pb-32 py-12 md:flex-row flex-col items-center"
      >
        <div id="about"></div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-white md:text-left mb-16 md:mb-0 items-center text-center drop-shadow-xl font-['RockoUltraFLF']"
        >
          <strong>
            <div
              class="leading-relaxed text-5xl text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hover:text-cyan-100"
            >
              <h1>
                About
                <span class="text-cyan-200">Me </span>
                ♡
              </h1>
            </div>
            <div>
              <h2
                class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white hover:text-cyan-100 leading-relaxed"
              >
                Im a really nice person
              </h2>
            </div>
          </strong>
        </div>
      </div>
      <div
        class="container right-0 mx-auto flex px-5 md:pt-16 md:pb-32 py-12 md:flex-row flex-col items-center"
      >
        <div id="projects"></div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-white md:text-left mb-16 md:mb-0 items-center text-center drop-shadow-xl font-['RockoUltraFLF']"
        >
          <strong>
            <div
              class="leading-relaxed text-5xl text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hover:text-cyan-100"
            >
              <h1>
                Projects
                <span class="text-cyan-200">Me </span>
                ♡
              </h1>
            </div>
            <div>
              <h2
                class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white hover:text-cyan-100 leading-relaxed"
              >
                I don't have any projects right now!
              </h2>
            </div>
          </strong>
        </div>
      </div>
      <div
        class="container right-0 mx-auto flex px-5 md:pt-16 md:pb-32 py-12 md:flex-row flex-col items-center"
      >
        <div id="contact"></div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-white md:text-left mb-16 md:mb-0 items-center text-center drop-shadow-xl font-['RockoUltraFLF']"
        >
          <strong>
            <div
              class="leading-relaxed text-5xl text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hover:text-cyan-100"
            >
              <h1>
                Contact
                <span class="text-cyan-200">Me </span>
                ♡
              </h1>
            </div>
            <div>
              <h2
                class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white hover:text-cyan-100 leading-relaxed"
              >
                You can conctact with me viaaaaaaaaa (ejmplo)
              </h2>
            </div>
          </strong>
        </div>
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
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#home'},
  { name: 'About Me', href: '#about'},
  { name: 'Projects', href: '#projects'},
  { name: 'Contact', href: '#contact'},
]
</script>
