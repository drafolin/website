import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export type RootState = {
  lang: String;
};

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useLanguage = defineStore({
  id: "language",
  state: () => {
    return { lang: useStorage("lang", "en") };
  },
  actions: {
    toggleLanguage() {
      this.lang = this.lang === "en" ? "fr" : "en";
    },
  },
});
