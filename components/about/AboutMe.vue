<script setup>
import { useMainStore } from "~/store";

const store = useMainStore();
</script>

<template>
  <section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <section class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/public/me.webp" class="rounded-lg w-96" alt="Николай Толкованов" width="358" height="410" />
    </section>

    <!-- About details -->
    <section class="w-full sm:w-3/4 text-left">
      <article>
        <p
          v-for="bio in store.aboutMe"
          :key="bio.id"
          class="font-roboto-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        >
          {{ bio.bio }}
        </p>
      </article>
    </section>
  </section>
</template>
