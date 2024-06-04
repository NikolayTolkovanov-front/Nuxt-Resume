<script setup>
import { useMainStore } from "~/store";
import { mapState } from "pinia";

const store = useMainStore();
</script>

<template>
  <section class="flex justify-center items-center text-center">
    <div
      class="font-roboto-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ store.copyrightDate }}. Developed by
      <a
        href="https://stoman.me"
        target="__blank"
        class="font-roboto-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ store.siteAuthor }}</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
