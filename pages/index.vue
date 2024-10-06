<script setup>

// definePageMeta({
//   scrollToTop: true,
// })

</script>

<template>
  <div class="container mx-auto">
    <SharedAppBanner />

    <ProjectsGrid :countProjects="6" />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-roboto-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="Больше проектов"
      >
        <ReusableButton title="Больше проектов" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
