<script setup>
import { useMainStore } from "~/store";
import { mapState } from "pinia";

const props = defineProps({
  countProjects: {
    type: Number,
    default: null
  }
});


const store = useMainStore();
const filteredCategories = store.categories.map((category) => category.name)

const filters = reactive({
  selectedProject: {
    str: "",
    cb: filterProjectsByCategory,
  },
  searchProject: {
    str: "",
    cb: filterProjectsBySearch,
  },
});

function filterProjectsByCategory(projects) {
  return projects.filter((item) => {
    let categoryId = store.categories.filter((category) => category.name === filters.selectedProject.str)[0].id
    return item.category_id === categoryId
  });
}

function filterProjectsBySearch(projects) {
  let project = new RegExp(filters.searchProject.str, "i");
  return projects.filter((el) => el.title.match(project));
}

const filteredProjects = computed(() => {
  let projectsToFilter = store.projects;

  for (let filter in filters) {
    if (filters[filter].str) {
      projectsToFilter = filters[filter].cb(projectsToFilter);
    }
  }

  if (props.countProjects) {
    return projectsToFilter.slice(0, props.countProjects)
  }

  return projectsToFilter;
});

watch(filteredProjects, () => {
  const layoutDefault = document.querySelector(".layout-default");

  if (layoutDefault) {
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (filteredProjects.value.length === 0 && !isMobileDevice) {
      const lockPaddingValue =
        window.innerWidth - layoutDefault.offsetWidth + "px";
      layoutDefault.style.paddingRight = lockPaddingValue;
      return;
    }

    layoutDefault.style.paddingRight = "0px";
  }
});
</script>

<template>
  <section class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <h1
      class="font-roboto-bold text-center text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
    >
      {{ store.projectsHeading }}
    </h1>

    <!-- Filter and search projects -->
    <section class="mt-8 sm:mt-10">
      <h3
        class="font-roboto-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        {{ store.projectsFilterHeading }}
      </h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <Icon
              name="fa-solid:search"
              class="ml-0 sm:ml-1 mr-1 text-black dark:text-white duration-100"
            />
          </span>
          <input
            v-model="filters.searchProject.str"
            class="font-roboto-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Поиск проектов"
            aria-label="Имя проекта"
          />
        </div>
        <ProjectsFilter
          :select="filters.searchProject.str"
          :selectOptions="filteredCategories"
          @change="filters.selectedProject.str = $event"
        />
      </div>
    </section>

    <!-- Projects grid -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
    >
      <p
        v-if="!filteredProjects.length"
        class="font-roboto-bold text-xl text-ternary-dark dark:text-ternary-light font-semibold"
      >
        {{ store.noProjectsText }}
      </p>
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.id}`" class="flex flex-col h-full">
          <img
              :src="project.img"
              :alt="project.title"
              class="rounded-t-xl border-none"
            />
          <div class="flex flex-col grow justify-end text-center px-4 py-6">
            <strong
              class="font-roboto-bold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ project.title }}
            </strong>
            <b
              class="font-roboto-medium text-lg text-ternary-dark dark:text-ternary-light"
              >{{ store.getCategoryById(project.category_id) }}</b
            >
          </div>
        </NuxtLink>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
