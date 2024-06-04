<script setup>
import { useMainStore } from "~/store";

const props = defineProps({
  showResult: {
    type: Boolean,
    default: false,
  },
  messageStatus: {
    type: Boolean,
    default: false,
  },
});

const store = useMainStore();

const phone = store.contacts.filter((item) => item.name === "phone")[0].data;
const showMessage = ref(false);

watch(() => props.showResult, (value) => {
  showMessage.value = value
})
</script>

<template>
  <transition name="fade">
    <section
      v-if="showMessage"
      class="max-w-full p-3 fixed top-0 right-0 sm:max-w-sm bg-white dark:bg-ternary-dark dark:text-primary-light rounded-none sm:rounded-bl-lg z-40"
    >
      <p
        v-if="messageStatus"
        class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
      >
        {{ store.successMessage }}
      </p>
      <p
        v-else
        class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
      >
        {{ store.failMessage }}
        <a class="block underline" :href="`tel:${phone}`">{{ phone }}</a>
      </p>
      <ReusableButton
        title="Закрыть"
        class="mt-2 px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
        @click="showMessage = false"
        aria-label="Close Message"
      />
    </section>
  </transition>
</template>

<style scoped></style>
