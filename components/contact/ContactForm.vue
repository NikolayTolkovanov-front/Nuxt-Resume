<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const showResult = ref(false);
const messageStatus = ref(false);
const isDisabledButton = ref(false);

const forms = reactive({
  userName: "",
  userEmail: "",
  userPhone: "",
  userMessage: "",
});

const rules = {
  userName: { required },
  userEmail: { required, email },
  userPhone: { required, minLength: minLength(18), maxLength: maxLength(18) },
  userMessage: {
    required,
    minLength: minLength(70),
    maxLength: maxLength(500),
  },
};

const v$ = useVuelidate(rules, forms);

async function addUserInfo(event) {
  console.log("v$", v$);
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  isDisabledButton.value = true;

  await addBid(forms.userName, forms.userEmail, forms.userMessage, (res) => {
    showResult.value = true;

    if (res?.ok) {
      messageStatus.value = true;
    } else {
      messageStatus.value = false;
    }

    setTimeout(() => {
      isDisabledButton.value = false;
      showResult.value = false;
    }, 7_000);
  });
}
</script>

<template>
  <ReusableFormResult :showResult="showResult" :messageStatus="messageStatus" />
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-roboto-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form @submit.prevent="addUserInfo" class="font-roboto-regular space-y-7">
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Full Name
            <span
              v-if="v$.userName.$dirty && v$.userName.required.$invalid"
              class="text-red-600"
              >error empty</span
            ></label
          >
          <input
            v-model="forms.userName"
            :class="{
              'border-red-600': v$.userName.$errors.length,
              'border border-gray-300 dark:border-primary-dark border-opacity-50':
                !v$.userName.$errors.length,
            }"
            class="w-full px-5 py-2 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email
            <span
              v-if="v$.userEmail.$dirty && v$.userEmail.required.$invalid"
              class="text-red-600"
              >error empty</span
            >
            <span
              v-if="v$.userEmail.$dirty && v$.userEmail.email.$invalid"
              class="text-red-600"
              >error not email</span
            ></label
          >
          <input
            v-model="forms.userEmail"
            :class="{
              'border-red-600': v$.userEmail.$errors.length,
              'border border-gray-300 dark:border-primary-dark border-opacity-50':
                !v$.userEmail.$errors.length,
            }"
            class="w-full px-5 py-2 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="email"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="phone"
            >Phone
            <span
              v-if="v$.userPhone.$dirty && v$.userPhone.required.$invalid"
              class="text-red-600"
              >error empty</span
            >
            <span
              v-if="v$.userPhone.$dirty && v$.userPhone.minLength.$invalid"
              class="text-red-600"
              >error low</span
            >
            <span
              v-if="v$.userPhone.$dirty && v$.userPhone.maxLength.$invalid"
              class="text-red-600"
              >error high</span
            >
          </label>
          <input
            v-model="forms.userPhone"
            v-maska
            data-maska="+7 (###) ###-##-##"
            :class="{
              'border-red-600': v$.userPhone.$errors.length,
              'border border-gray-300 dark:border-primary-dark border-opacity-50':
                !v$.userPhone.$errors.length,
            }"
            class="w-full px-5 py-2 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="phone"
            name="phone"
            type="text"
            required=""
            placeholder="Your Phone"
            aria-label="Phone"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Message
            <span
              v-if="v$.userMessage.$dirty && v$.userMessage.required.$invalid"
              class="text-red-600"
              >error empty</span
            >
            <span
              v-if="v$.userMessage.$dirty && v$.userMessage.minLength.$invalid"
              class="text-red-600"
              >error low</span
            >
            <span
              v-if="v$.userMessage.$dirty && v$.userMessage.maxLength.$invalid"
              class="text-red-600"
              >error high</span
            >
          </label>
          <textarea
            v-model="forms.userMessage"
            :class="{
              'border-red-600': v$.userMessage.$errors.length,
              'border border-gray-300 dark:border-primary-dark border-opacity-50':
                !v$.userMessage.$errors.length,
            }"
            class="w-full resize-none px-5 py-2 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            placeholder="Project description"
          ></textarea>
        </div>

        <div class="mt-6">
          <ReusableButton
            @click.prevent="addUserInfo"
            title="Send Message"
            :disabled="isDisabledButton"
            :class="{
              'opacity-50':
                v$.$errors.length || isDisabledButton,
              'hover:bg-indigo-600': !v$.$errors.length && !isDisabledButton,
            }"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-300"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
