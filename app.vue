<script setup></script>

<template>
  <div class="hello">
    <strong
      ><h1>Hi! I'm Lucía ♡</h1>
      <u> <br /><a href="https://mishu.dev">mishu.dev</a></u>
      <p>Coming Soon! ♡</p></strong
    >
  </div>
  <img src="/owo.png" alt="mishu.dev" class="foto" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
/* * {
  border: 1px solid red;
} */
body {
  background: linear-gradient(to right bottom, #ffffff, #c4eeff);
  background-repeat: no-repeat;
  min-height: calc(109vh - 7.5rem); /* 7.5rem = altura de .hello */
}
@font-face {
    font-family: "RockoUltraFLF";
    src: url("fonts/RockoUltraFLF.ttf");
}
.hello {
  display: flex;
  font-family: "RockoUltraFLF", sans-serif;
  font-size: 5rem;
  padding: 3rem;
  color: #86c4ff;
  position: absolute;
  top: 2.5rem;
  left: 3rem;
  transform: translate(-5rem, -5rem);
}

.hello strong {
  flex-basis: 50%;
  flex-grow: 1;
}

.hello p {
  font-size: 4rem;
  flex-basis: 50%;
  flex-grow: 1;
}

.foto {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media only screen and (max-width: 1350px) {
  .hello {
    padding-right: 0px;
    font-size: 2.8rem;
    flex-wrap: wrap;
  }

  .hello,
  .hello p {
    flex-basis: 100%;
    flex-grow: 0;
  }

  .foto {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: 0rem;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: calc(
      100% - 10px
    ); /* restar el alto del margen superior e inferior */
  }
}
</style>
