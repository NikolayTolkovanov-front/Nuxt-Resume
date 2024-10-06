<script setup>
import { useMainStore } from "~/store";

const props = defineProps({
  currentProjectId: {
    type: String,
  },
});

const store = useMainStore();

const relatedProjects = computed(() => {
  return store.projects.filter((project) => project.id !== props.currentProjectId).slice(0, 4);
});
</script>

<template>
  <section
    class="
      mt-10
      pt-10
      sm:pt-14 sm:mt-20
      border-t-2 border-primary-light
      dark:border-secondary-dark
    "
  >
    <p
      class="
        font-roboto-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      {{ store.relatedProjectsHeading }}
    </p>

    <article class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <NuxtLink :to="`/projects/${project.id}`" v-for="project in relatedProjects" :key="project.id">
        <img
          :src="`/${project.img}`"
          class="rounded-xl cursor-pointer"
          :alt="project.title"
        />
      </NuxtLink>
    </article>
  </section>
</template>
