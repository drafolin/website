import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  intlify: {
    vueI18n: {
      fallbackLocale: "en",
    },
  },
  image: {
    provider: "vercel",
    domains: ["cdn.discordapp.com"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  target: "static",
});
