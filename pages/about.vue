<script>
import feather from "feather-icons";

// definePageMeta({
//   scrollToTop: true,
// })

export default {
  name: "About",
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />

    <AboutCounter />

    <AboutClients class="container mx-auto" />
  </div>
</template>

<style scoped></style>
