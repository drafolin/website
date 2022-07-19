import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
