<script setup>
import { useMainStore } from '~/store'

const store = useMainStore()

</script>

<template>
  <!-- About clients section -->
  <div class="mt-10 sm:mt-20">
    <p
      class="
        font-roboto-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      "
    >
      {{ store.clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in store.clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
