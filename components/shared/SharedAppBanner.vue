<script setup>

const colorMode = useColorMode();
const currentColor = computed(() =>  colorMode.value);

onMounted(() => {});
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-roboto-bold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I`m Nikolay Tolkovanov
      </h1>
      <p
        class="font-roboto-light mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Full-Stack Developer & Web master
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="/NT-Resume.pdf"
          download=""
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <span>
            <Icon
              name="fa6-solid:download"
              class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
            />
          </span>
          <p class="text-sm sm:text-lg font-roboto-medium duration-100">
            Скачать CV
          </p>
        </a>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-show="currentColor === 'dark'"
        src="~/public/developer-dark.svg"
        alt=""
      />
      <img
        v-show="currentColor === 'light'"
        src="~/public/developer.svg"
        alt=""
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
