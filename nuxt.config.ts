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

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  plugins: ["~/plugins/maska"],

  colorMode: {
    classSuffix: "",
    preference: "dark",
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
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
