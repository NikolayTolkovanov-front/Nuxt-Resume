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
      "transition-colors transition-duration-500 text-primary-dark hover:text-indigo-500 dark:text-primary-light dark:hover:text-indigo-500",
  };

  let tagcloud = new TagCloud(
    tagCloudContainer,
    tagCloudTexts,
    tagCloudOptions
  );

  window.addEventListener("resize", () => {
    tagCloudRadius = document.body.clientWidth >= 600 ? 300 : 160
    console.log("resize");
    console.log("tagCloudOptions", tagCloudOptions);
    console.log("tagCloudRadius", tagCloudRadius);
    tagcloud.destroy();
    tagCloudOptions.radius = tagCloudRadius
    tagcloud = new TagCloud(tagCloudContainer, tagCloudTexts, tagCloudOptions);
  });
});
</script>

<template>
  <!-- About clients section -->
  <div class="mt-20 xl:mt-0">
    <p
      class="font-roboto-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ store.clientsHeading }}
    </p>

    <div class="about-technologies"></div>
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
