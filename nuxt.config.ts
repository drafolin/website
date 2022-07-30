import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image-edge"
	],
	intlify: {
		vueI18n: {
			fallbackLocale: "en",
		},
	},
	image: {
		domains: ['cdn.discordapp.com']
	},
	target: "static"
});
