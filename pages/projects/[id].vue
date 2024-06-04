<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store';

const store = useMainStore()
const { getProjectById } = storeToRefs(store)

const route = useRoute()

const url = useRequestURL()
const linkToProject = ref(url.href)
// definePageMeta({
//   scrollToTop: true,
// })

function getSharedLink(url) {
  return `${url}${linkToProject.value}`
}

const currentProject = computed(() => getProjectById.value(route.params.id))
const currentURL = computed(() => route.fullPath)

</script>

<template>
  <section class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <section v-if="currentProject">
      <!-- Project heading and meta info -->
      <section>
        <p
          class="font-roboto-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {{ currentProject.title }}
        </p>
        <div class="flex">
          <section class="flex items-center mr-10">
            <Icon name="fa6-solid:clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <date
              class="font-roboto-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ currentProject.publishDate }}</date
            >
          </section>
          <section class="flex items-center">
            <Icon name="fa6-solid:tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <b
              class="font-roboto-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ currentProject.tag }}</b
            >
          </section>
        </div>
      </section>

      <!-- Project gallery -->
      <section class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <article
          class="mb-10 sm:mb-0"
          v-for="projectImage in currentProject.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </article>
      </section>

      <!-- Project info -->
      <section class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <section class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <section class="mb-7">
            <p
              class="font-roboto-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
            >
              {{ currentProject.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li
                v-for="info in currentProject.companyInfos"
                :key="info.id"
                class="font-roboto-regular text-ternary-dark dark:text-ternary-light"
              >
                <b>{{ info.title }}: </b>
                <a
                  :href="info.title == 'Phone' ? `tel:${info.details}`: info.details"
                  :class="
                    info.title == 'Website' || info.title == 'Phone'
                      ? 'hover:underline cursor-pointer'
                      : ''
                  "
                  aria-label="Project website and phone"
                  >{{ info.details }}</a
                >
              </li>
            </ul>
          </section>

          <!-- Single project objectives -->
          <section class="mb-7">
            <p
              class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ currentProject.objectivesTitle }}
            </p>
            <p
              class="font-roboto-regular text-primary-dark dark:text-ternary-light"
            >
              {{ currentProject.objectivesDetails }}
            </p>
          </section>

          <!-- Single project technologies -->
          <section class="mb-7">
            <p
              class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ currentProject.techTitle }}
            </p>
            <p
              class="font-roboto-regular text-primary-dark dark:text-ternary-light"
            >
              {{ currentProject.technologies.join(", ") }}
            </p>
          </section>

          <!-- Single project social sharing -->
          <section>
            <p
              class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ currentProject.socialTitle }}
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a
                v-for="social in store.socialSharings"
                :key="social.id"
                :href="getSharedLink(social.url)"
                target="__blank"
                aria-label="Share Project"
                class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
              >
                <Icon :name="social.icon" size="30" />
              </a>
            </div>
          </section>
        </section>

        <!-- Single project right section details -->
        <section class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="font-roboto-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
          >
            {{ currentProject.detailsTitle }}
          </p>
          <p
            v-for="projectDetail in currentProject.projectDetails"
            :key="projectDetail.id"
            class="font-roboto-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ projectDetail.details }}
          </p>
        </section>
      </section>

      <!-- Project related projects -->
      <ProjectsRelated :currentProjectId="currentProject.id" />
    </section>

    <!-- Load not found components if no project found -->
    <div v-else class="font-roboto-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
