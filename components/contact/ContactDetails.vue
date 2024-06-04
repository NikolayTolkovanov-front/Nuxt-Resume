<script setup>
import { useMainStore } from '~/store'

const store = useMainStore()

</script>

<template>
  <!-- Contact details -->
  <section class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2
        class="
          font-roboto-medium
          text-2xl text-primary-dark
          dark:text-primary-light
          mt-8
          mb-8
        "
      >
        Contact details
      </h2>
      <ul class="font-roboto-regular">
        <li class="flex items-start" v-for="contact in store.contacts" :key="contact.id">
          <span class="flex mt-1.5">
            <Icon :name="contact.icon" size="20" class="text-gray-500 dark:text-gray-400 mr-4" />
          </span>
          <a
            href="#"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
            :class="
              contact.icon === 'envelope' || contact.icon === 'phone'
                ? 'hover:underline cursor-pointer'
                : ''
            "
            aria-label="Website and Phone"
          >
            {{ contact.data }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
