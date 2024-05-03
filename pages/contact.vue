<script>
// definePageMeta({
//   scrollToTop: true,
// })

export default {
  data: () => {
    return {

    };
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails />
  </div>
</template>
