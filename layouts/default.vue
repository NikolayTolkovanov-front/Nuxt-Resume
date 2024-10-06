<template>
  <div
    class="layout-default bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <!-- App header -->
    <SharedHeader />

    <NuxtPage />
    <!-- App footer -->
    <SharedFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    >
      <SharedBackToTop />
    </div>
  </div>
</template>

<script setup></script>

<style>

html.dark {
  scrollbar-color: #1E3851 #0D2438;
}

.bg-secondary-light {
  transition: background 0.2s, color 0.2s;
}
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
