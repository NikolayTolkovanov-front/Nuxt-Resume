<script setup>
import { useMainStore } from '~/store'
import { mapState } from "pinia";

const store = useMainStore()

</script>

<template>
  <section class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="
            font-roboto-bold
            text-3xl
            sm:text-4xl
            text-primary-dark
            dark:text-primary-light
            mb-5
          "
        >
          Меня можно найти в соц-сетях
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in store.socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
          >
            <Icon :name="social.icon" size="30" />
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <SharedFooterCopyright />
    </div>

  </section>
</template>

<style scoped></style>
