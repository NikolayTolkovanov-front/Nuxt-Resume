<script setup>
import { useMainStore } from "~/store";
import { mapState } from "pinia";

const store = useMainStore();
const colorMode = useColorMode();

const isOpen = ref(false);
const modal = ref(false);

function themeSwitcher() {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
}

function showModal() {
  const layoutDefault = document.querySelector(".layout-default");

  if (modal.value) {
    // Stop screen scrolling
    layoutDefault.style.paddingRight = "0px";
    document
      .getElementsByTagName("html")[0]
      .classList.remove("overflow-y-hidden");
    modal.value = false;
  } else {
    const lockPaddingValue =
      window.innerWidth - layoutDefault.offsetWidth + "px";
    layoutDefault.style.paddingRight = lockPaddingValue;

    document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
    modal.value = true;
  }
}
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <NuxtLink to="/">
          <img src="~/public/logo-light.svg" class="w-30" width="126" height="62" alt="NT" />
        </NuxtLink>

        <!-- Theme switcher small screen -->
        <button
          @click="themeSwitcher"
          class="sm:hidden ml-8 bg-primary-light dark:bg-ternary-dark px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm rounded-xl cursor-pointer"
        >
          <!-- Dark mode icon -->
          <svg
            v-if="colorMode['value'] == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <!-- Light mode icon -->
          <svg
            v-if="colorMode['value'] == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-200 hover:text-gray-50 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <SharedHeaderNavigation :isOpen="isOpen" :showModal="showModal" />

      <!-- Header right section buttons -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Сотрудничать Модальное окно -->
        <div class="font-roboto-medium hidden md:block">
          <button
            class="text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5"
            @click="showModal()"
            aria-label="Сотрудничать Модальное окно"
          >
            Сотрудничать
          </button>
        </div>

        <!-- Theme switcher large screen -->
        <button
          @click="themeSwitcher"
          class="sm:ml-6 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer"
        >
          <!-- Dark mode icon -->
          <svg
            v-if="$colorMode.value == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <!-- Light mode icon -->
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-200 hover:text-gray-50 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Hire me modal -->
    <SharedHireMeModal :showModal="showModal" :modal="modal" />
  </nav>
</template>
