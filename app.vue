<template>
  <div class="flex flex-col justify-between min-h-screen ...">
    <div
      class="pl-12 md:pl-12 sm:pl-12 xl:pl-16 pt-16 mb-4 text-5xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl drop-shadow-xl flex"
    >
      <strong>
        <div class="hover:text-pink-200">
          <h1>Hi! I'm Lucía ♡</h1>
        </div>
        <div>
          <h2 class="text-4xl lg:text-6xl hover:text-pink-200">
            And I'm a <span id="words">Girl</span>
          </h2>
        </div>
      </strong>
    </div>
    <div class="lg:text-6xl xl:text-7xl 2xl:text-8xl">
      <img
        src="/owo.webp"
        alt="mishu.dev"
        class="absolute bottom-0 right-0 h-97 w-97 sm:h-98 sm:w-98 md:h-96 md:w-96 lg:h-97 lg:w-97 xl:h-98 xl:w-98 2xl:h-100 2xl:w-100"
      />
    </div>
    <footer class="body-font">
      <div
        class="container px-5 py-8 mx-auto flex items-center flex-row flex-col"
      >
        <p
          class="text-sm opacity-70 sm:py-2 sm:mt-0 mt-4 text-white hover:text-pink-200"
        >
          © 2023 Lucía Álvarez
        </p>
      </div>
    </footer>
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
--></template>

<style>
/* * {
  border: 1px solid red;
} */

@font-face {
  font-family: "RockoUltraFLF";
  src: url("fonts/RockoUltraFLF.ttf");
}
h1,
p,
h2,
h3,
strong,
u {
  font-family: "RockoUltraFLF", sans-serif;
  font-display: swap;
}
</style>

<script>
(function () {
  var words = [
      "Girl",
      "Gamer",
      "Developer",
      "Anime and Gaming Fan",
      "Happy Person",
    ],
    i = 0;
  setInterval(function () {
    $("#words").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 3000);
})();
</script>
