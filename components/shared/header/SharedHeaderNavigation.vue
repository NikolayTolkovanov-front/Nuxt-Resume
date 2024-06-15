<script setup>
defineProps({
  isOpen: {
    type: Boolean,
  },
  showModal: {
    type: Function,
  },
});
</script>

<template>
  <!-- App header navigation links -->
  <ul
    :class="isOpen ? 'block' : 'hidden'"
    class="font-roboto-light m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <li>
      <NuxtLink
        to="/projects"
        class="block text-left text-lg text-primary-dark hover:text-indigo-700 dark:text-ternary-light dark:hover:text-indigo-400 sm:mx-4 mb-2 sm:py-2"
        aria-label="Проекты"
        >Проекты</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        to="/about"
        class="block text-left text-lg text-primary-dark hover:text-indigo-700 dark:text-ternary-light dark:hover:text-indigo-400 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        aria-label="Обо мне"
        >Обо мне</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        to="/contact"
        class="block text-left text-lg text-primary-dark hover:text-indigo-700 dark:text-ternary-light dark:hover:text-indigo-400 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        aria-label="Конткаты"
        >Контакты</NuxtLink
      >
    </li>

    <div
      class="font-roboto-regular border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <ReusableButton
        class="sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
        @click="showModal()"
        aria-label="Сотрудничать кнопка"
      >
        Сотрудничать
      </ReusableButton>
    </div>
  </ul>
</template>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}
</style>
