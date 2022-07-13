import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import router from "./router";

import App from "./App.vue";
import "./index.css";

const pinia = createPinia();

const I18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "en",
});

const app = createApp(App).use(pinia).use(router).use(I18n).mount("#app");
