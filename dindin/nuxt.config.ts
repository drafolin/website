import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@intlify/nuxt3", "@nuxtjs/tailwindcss"],
  css: ["@/main.css"],
  intlify: {
    vueI18n: {
      fallbackLocale: "en",
    },
  },
});
