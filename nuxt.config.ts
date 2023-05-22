// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  runtimeConfig: {
    public: {
      DISCORD_USER_ID: "997571433280577656",
    },
  },
  colorMode: {
    preference: "dark", // default value of the color mode
    fallback: "dark", // fallback value if the preference can't be detected
    classSuffix: "", // optional, default value: ''
    storageKey: "nuxt-color-mode", // optional, default value: 'color-mode'
  },
  app: {
    head: {
      title: "Lucía Álvarez",
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "canonical", href: "https://mishu.dev" },
        { rel: "icon", href: "/owo.png" },
        // <link rel="preload" as="image" href="img.png" />
        { rel: "preload", as: "image", href: "/images/banner.webp" },
      ],
      meta: [
        {
          "http-equiv": "Cache-Control",
          content: "no-cache, no-store, must-revalidate",
        },
        { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" },
        { "http-equiv": "Expires", content: "0" },
        { "http-equiv": "Pragma", content: "no-cache" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-title", content: "Lucía Álvarez" },
        { name: "application-name", content: "Lucía Álvarez" },
        { name: "audience", content: "all" },
        { name: "author", content: "Lucía Álvarez, mishudiscord@gmail.com" },
        { name: "coverage", content: "Worldwide" },
        { name: "theme-color", content: "#C4EEFF" },
        {
          name: "description",
          content: "Lucía Álvarez's personal website and portfolio",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
        { name: "designer", content: "Lucía Álvarez, mishudiscord@gmail.com" },
        { name: "distribution", content: "Global" },
        { name: "googlebot", content: "index,follow" },
        { name: "HandheldFriendly", content: "True" },
        { name: "identifier-URL", content: "https://mishu.dev" },
        {
          name: "keywords",
          content: "mishu, mishudev, discord, programming, portfolio",
        },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        { name: "msapplication-TileColor", content: "#C4EEFF" },
        { name: "owner", content: "Lucía Álvarez, mishudiscord@gmail.com" },
        { name: "rating", content: "safe for kids" },
        { name: "reply-to", content: "mishudiscord@gmail.com" },
        { name: "revisit-after", content: "7 days" },
        {
          name: "robots",
          content: "archive,follow,imageindex,index,odp,snippet,translate",
        },
        { name: "shortlink", content: "https://mishu.dev" },
        {
          name: "subject",
          content: "Lucía Álvarez's personal website and portfolio",
        },
        {
          name: "summary",
          content: "Lucía Álvarez's personal website and portfolio.",
        },
        { name: "url", content: "https://mishu.dev" },
        {
          property: "og:description",
          content: "Lucía Álvarez's personal website and portfolio",
        },
        { property: "og:email", content: "mishudiscord@gmail.com" },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: "Lucía Álvarez" },
        { property: "og:title", content: "Home | Lucía Álvarez" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mishu.dev" },
        { property: "og:image", content: "/owo.png" },
      ],
    },
  },
});
