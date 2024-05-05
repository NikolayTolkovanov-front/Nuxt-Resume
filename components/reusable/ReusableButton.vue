<template>
  <button>{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String
  }
})

</script>

<style lang="scss" scoped></style>
