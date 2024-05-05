<script setup>
const userScrollPosition = ref(0);

const isScrolled = computed(() => userScrollPosition.value > 100);

function updateScrollPosition() {
  userScrollPosition.value = window.scrollY;
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => window.addEventListener("scroll", updateScrollPosition))

onBeforeUnmount(() => window.removeEventListener("scroll", updateScrollPosition))
</script>

<template>
  <!-- Scroll to top -->
  <transition name="fade">
    <div
      v-show="isScrolled"
      class="transition duration-500 transform hover:scale-110 rounded-full cursor-pointer flex p-2 bg-indigo-500 hover:bg-indigo-600 text-white items-center hover:shadow-sm border-none ring-none outline-none"
      @click="backToTop"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" size="xl" />
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
