<script>
import { useMainStore } from '~/store'
import { mapState } from "pinia";

export default {
  data: () => {
    return {
      projectName: "Nuxt.js & Tailwind CSS Portfolio",
      author: "Stoman",
    };
  },
  computed: {
    ...mapState(useMainStore, ["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-roboto-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
        target="__blank"
        class="
          font-roboto-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ projectName }}</a
      >
      . Developed by
      <a
        href="https://stoman.me"
        target="__blank"
        class="
          font-roboto-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
