import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],

  plugins: ["~/plugins/maska"],

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/main.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
