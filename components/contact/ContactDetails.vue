<script setup>
import { useMainStore } from '~/store'

const store = useMainStore()

function getFormattedLink(name, data) {
  switch (name) {
    case "email":
      return `mailto:${data}`;
      break;

    case "phone":
      return `tel:${data.replace(/\s+/g, '')}`;
      break;

    case "address":
      return null;
      break;

    default:
      return "#";
      break;
  }
}

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
        Мои контакты
      </h2>
      <ul class="font-roboto-regular">
        <li class="flex items-start" v-for="contact in store.contacts" :key="contact.id">
          <span class="flex mt-1.5">
            <Icon :name="contact.icon" size="20" class="text-gray-500 dark:text-gray-400 mr-4" />
          </span>
          <a
            :href="getFormattedLink(contact.name, contact.data)"
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
