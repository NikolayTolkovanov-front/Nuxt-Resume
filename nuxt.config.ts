import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  vite: {
    server: {
      host: true,
      // port: 3002,
      watch: {
        usePolling: true,
      },
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "NT",
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', sizes: '16x16', href: '/favicons/16x16.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', sizes: '32x32', href: '/favicons/32x32.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', sizes: '48x48', href: '/favicons/48x48.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', sizes: '192x192', href: '/favicons/192x192.png' },
        { rel: 'shortcut icon', type: 'image/svg+xml', sizes: '16x16', href: '/favicons/16x16.svg' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/favicons/180x180.png' },
      ],
      meta: [
        { name: "keywords", content: "сайт, создание, разработка, услуга, NT, проект" },
        { name: "description", content: "Создание сайтов, интернет-магазинов, разработка Landing Page в России" }
      ]
    }
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
