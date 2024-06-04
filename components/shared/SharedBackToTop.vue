<script setup>
const userScrollPosition = ref(0);

const isScrolled = computed(() => {
  return userScrollPosition.value > 300
});

function updateScrollPosition() {
  userScrollPosition.value = window.scrollY;
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  updateScrollPosition()
  window.addEventListener("scroll", updateScrollPosition)
})

onBeforeUnmount(() => window.removeEventListener("scroll", updateScrollPosition))
</script>

<template>
  <div
      :class="{'opacity-100': isScrolled, 'opacity-0': !isScrolled}"
      class="transition-opacity transform hover:scale-110 rounded-full cursor-pointer flex p-2 bg-indigo-500 hover:bg-indigo-600 text-white items-center hover:shadow-sm border-none ring-none outline-none"
      @click="backToTop"
    >
      <Icon name="fa6-solid:chevron-up" />
    </div>
</template>

<style lang="" scoped>

</style>
