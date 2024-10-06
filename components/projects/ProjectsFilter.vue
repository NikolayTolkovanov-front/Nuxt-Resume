<script setup>
defineProps({
  select: {
    type: String,
    default: "projects",
  },

  selectOptions: {
    type: Array,
    default: () => [
      {
        id: 1,
        value: "all",
        name: "Все проекты",
      },
      {
        id: 2,
        value: "landing",
        name: "Лендинг",
      },
      {
        id: 3,
        value: "multipage",
        name: "Многостраничный сайт",
      },
    ],
  },
});

const emit = defineEmits(["change"]);

function sendOption(option) {
  emit('change', option)
}
</script>

<template>
  <select
    @change="sendOption($event.target.value)"
    :name="select"
    :id="select"
    class="font-roboto-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  >
    <option value class="text-sm sm:text-md">Все проекты</option>
    <option
      v-for="option in selectOptions"
      :key="option.id"
      :value="option.name"
      :id="option.id"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
