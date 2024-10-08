<script setup>
const props = defineProps({
  showModal: {
    type: Function,
  },
  modal: {
    type: Boolean,
  },
});

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
  userName: { required, minLength: minLength(5), maxLength: maxLength(150) },
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
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  isDisabledButton.value = true;

  await addBid(forms, (res) => {
    showResult.value = true;

    if (res?.ok) {
      forms.userName = "";
      forms.userEmail = "";
      forms.userPhone = "";
      forms.userMessage = "";
      v$.value.$reset();

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

function closeModal() {
  forms.userName = "";
  forms.userEmail = "";
  forms.userPhone = "";
  forms.userMessage = "";

  v$.value.$reset();

  props.showModal();
}
</script>

<template>
  <ReusableFormResult :showResult="showResult" :messageStatus="messageStatus" />
  <transition name="fade">
    <section
      v-show="modal"
      class="font-roboto-regular fixed inset-0 z-30"
      aria-modal="Сотрудничать Модальное окно"
    >
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
      ></div>
      <!-- Modal contents -->
      <section class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div
            v-show="modal"
            class="modal-wrapper flex items-center w-full sm:w-max z-30"
          >
            <div
              class="modal overflow-auto w-full max-w-full mx-0 sm:mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row sm:rounded-lg relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
              >
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  Введите ваши данные и мы сможем сотрудничать с вами, решим ваши проблемы
                </h5>
                <button
                  class="px-4 flex items-center text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <Icon name="fa6-solid:xmark" size="20" />
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form
                  @submit.prevent="addUserInfo"
                  class="max-w-xl m-4 text-left"
                >
                  <div class="mt-0">
                    <label
                      class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                      for="name"
                      >Имя
                      <span
                        v-if="
                          v$.userName.$dirty && v$.userName.required.$invalid
                        "
                        class="text-red-600"
                        >Поле Имя не может быть пустым</span
                      ></label
                    >
                    <span
                      v-if="
                        v$.userName.$dirty && v$.userName.minLength.$invalid
                      "
                      class="text-red-600"
                      >Недостаточно символов ({{  forms.userName.length  }} / {{ v$.userName.minLength.$params.min }})</span
                    >
                    <span
                      v-if="
                        v$.userName.$dirty && v$.userName.maxLength.$invalid
                      "
                      class="text-red-600"
                      >Слишком много символов ({{  forms.userName.length  }} / {{ v$.userName.maxLength.$params.max }})</span
                    >
                    <input
                      v-model="forms.userName"
                      :class="{
                        'border-red-600': v$.userName.$errors.length,
                        'border-gray-200 dark:border-secondary-dark':
                          !v$.userName.$errors.length,
                      }"
                      class="w-full px-5 py-2 border-1 rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ваше Имя"
                      aria-label="Name"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                      for="email"
                      >Email
                      <span
                        v-if="
                          v$.userEmail.$dirty && v$.userEmail.required.$invalid
                        "
                        class="text-red-600"
                        >Поле Email не может быть пустым</span
                      >
                      <span
                        v-if="
                          v$.userEmail.$dirty && v$.userEmail.email.$invalid
                        "
                        class="text-red-600"
                        >Не валидный Email</span
                      ></label
                    >
                    <input
                      v-model="forms.userEmail"
                      :class="{
                        'border-red-600': v$.userEmail.$errors.length,
                        'border-gray-200 dark:border-secondary-dark':
                          !v$.userEmail.$errors.length,
                      }"
                      class="w-full px-5 py-2 border-1 rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Ваш Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                      for="phone"
                      >Телефон
                      <span
                        v-if="
                          v$.userPhone.$dirty && v$.userPhone.required.$invalid
                        "
                        class="text-red-600"
                        >Поле Телефон не может быть пустым</span
                      >
                      <span
                        v-if="
                          v$.userPhone.$dirty && v$.userPhone.minLength.$invalid
                        "
                        class="text-red-600"
                        >Недостаточно символов ({{  forms.userPhone.length  }} / {{ v$.userPhone.minLength.$params.min }})</span
                      >
                      <span
                        v-if="
                          v$.userPhone.$dirty && v$.userPhone.maxLength.$invalid
                        "
                        class="text-red-600"
                        >Слишком много символов ({{  forms.userPhone.length  }} / {{ v$.userPhone.maxLength.$params.max }})</span
                      >
                    </label>
                    <input
                      v-model="forms.userPhone"
                      :class="{
                        'border-red-600': v$.userPhone.$errors.length,
                        'border-gray-200 dark:border-secondary-dark':
                          !v$.userPhone.$errors.length,
                      }"
                      v-maska
                      data-maska="+7 (###) ###-##-##"
                      class="w-full px-5 py-2 border-1 rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Ваш телефон"
                      aria-label="Phone"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                      for="message"
                      >Сообщение
                      <span
                        v-if="
                          v$.userMessage.$dirty &&
                          v$.userMessage.required.$invalid
                        "
                        class="text-red-600"
                        >Сообщение не может быть пустым</span
                      >
                      <span
                        v-if="
                          v$.userMessage.$dirty &&
                          v$.userMessage.minLength.$invalid
                        "
                        class="text-red-600"
                        >Недостаточно символов ({{  forms.userMessage.length  }} / {{ v$.userMessage.minLength.$params.min }})</span
                      >
                      <span
                        v-if="
                          v$.userMessage.$dirty &&
                          v$.userMessage.maxLength.$invalid
                        "
                        class="text-red-600"
                        >Слишком много символов ({{  forms.userMessage.length  }} / {{ v$.userMessage.maxLength.$params.max }})</span
                      >
                    </label>
                    <textarea
                      v-model="forms.userMessage"
                      :class="{
                        'border-red-600': v$.userMessage.$errors.length,
                        'border-gray-200 dark:border-secondary-dark':
                          !v$.userMessage.$errors.length,
                      }"
                      class="w-full resize-none px-5 py-2 border-1 rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="message"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Details"
                      placeholder="Опишите задачу"
                    ></textarea>
                  </div>
                  <NuxtLink to="agreement" target="_blank" class="font-roboto-regular text-primary-dark dark:text-primary-light underline underline-offset-8">Согласие на обработку персональных данных</NuxtLink>
                  <div class="mt-6 pb-4 sm:pb-1">
                    <ReusableButton
                      title="Отправить"
                      :disabled="isDisabledButton"
                      :class="{
                        'opacity-75': v$.$errors.length || isDisabledButton,
                        'hover:bg-indigo-600':
                          !v$.$errors.length && !isDisabledButton,
                      }"
                      class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-300"
                      type="submit"
                      aria-label="Отправить"
                    />
                  </div>
                </form>
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
              >
                <ReusableButton
                  title="Закрыть"
                  class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                  @click="closeModal()"
                  aria-label="Закрыть"
                />
              </div>
            </div>
          </div>
        </transition>
      </section>
    </section>
  </transition>
</template>

<style>
/* .modal-body {
  max-height: 570px;
} */
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  /* .modal-body {
    max-height: 400px;
  } */
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
