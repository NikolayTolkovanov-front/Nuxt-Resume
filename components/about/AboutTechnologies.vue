<script setup>
import { useMainStore } from "~/store";
import TagCloud from "TagCloud";

const store = useMainStore();

onMounted(() => {
  const tagCloudContainer = ".about-technologies";
  const tagCloudTexts = store.technologies;
  let tagCloudRadius = document.body.clientWidth >= 600 ? 300 : 160

  let tagCloudOptions = {
    radius: tagCloudRadius,
    itemClass:
      "cursor-pointer transition-colors transition-duration-500 text-primary-dark hover:text-indigo-500 dark:text-primary-light dark:hover:text-indigo-500",
  };

  let tagcloud = new TagCloud(
    tagCloudContainer,
    tagCloudTexts,
    tagCloudOptions
  );

  window.addEventListener("resize", () => {
    tagCloudRadius = document.body.clientWidth >= 600 ? 300 : 160
    tagcloud.destroy();
    tagCloudOptions.radius = tagCloudRadius
    tagcloud = new TagCloud(tagCloudContainer, tagCloudTexts, tagCloudOptions);
  });
});
</script>

<template>
  <!-- About technologies section -->
  <div class="mt-20 xl:mt-0">
    <h1
      class="font-roboto-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ store.technologiesHeading }}
    </h1>

    <section class="about-technologies"></section>
  </div>
</template>
<style lang="scss">
.tagcloud {
  &--item {
    transition: color 0.3s;

    &:nth-child(even) {
      color: white;
    }

    &:nth-child(odd) {
      color: #f7f8fc;
    }

    &:hover {
      color: red;
    }
  }
}
</style>
