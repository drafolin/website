<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const messages = {
	en: {
		footer: {
			find: "Find me on",
		}
	},
	fr: {
		footer: {
			find: "Trouve-moi sur",
		}
	}
}
const i18n = useI18n({ messages });
const { t } = i18n;

</script>

<template>
	<footer class="flex flex-col items-center px-4 pt-4">
		<span>{{ t("footer.find") }}</span>
		<nav class="self-center w-full max-w-xl">
			<ul class="flex w-full p-0 m-2 list-none social justify-evenly">
				<li class="inline m-2 github"><a href="https://github.com/dindin-nibnib">
						<nuxt-img width="70" format="avif" src="/assets/icons/github-icon.png"
							class="w-full max-w-xs transition-all max-h-xs grayscale hover:grayscale-0"
							alt="My github page" />
					</a></li>
				<li class="inline m-2 twitter"><a href="https://twitter.com/dindin_nibnib">
						<nuxt-img width="70" format="avif" src="/assets/icons/twitter-icon.png"
							class="w-full max-w-xs transition-all max-h-xs grayscale hover:grayscale-0"
							alt="My twitter page" />
					</a></li>
				<li class="inline m-2 telegram"><a href="https://t.me/dindin_nibnib">
						<nuxt-img width="70" format="avif" src="/assets/icons/telegram-icon.png"
							class="w-full max-w-xs transition-all max-h-xs grayscale hover:grayscale-0"
							alt="My telegram account" />
					</a></li>
				<li class="inline m-2 discord"><a href="https://discordapp.com/users/373515998000840714">
						<nuxt-img width="70" format="avif" src="/assets/icons/discord-icon.png"
							class="w-full max-w-xs transition-all max-h-xs grayscale hover:grayscale-0"
							alt="My discord profile" />
					</a></li>
				<li class="inline m-2 mail"><a href="mailto:odinbeuchat.ob@ikmail.com">
						<nuxt-img width="70" format="avif" src="/assets/icons/mail-icon.png"
							class="w-full max-w-xs transition-all max-h-xs grayscale hover:grayscale-0"
							alt="Email me!" />
					</a></li>
			</ul>
		</nav>
		<span class="self-center mt-4 text-xs dark:text-gray-300 lg:text-sm">This site is a work in progress! Some pages
			might not be existing for now...</span><br />
		<hr class="w-screen" />
		<span class="self-center my-4 text-xs dark:text-gray-300 lg:text-sm">
			<NuxtLink to="mailto:mail@dindin.ch">&copy;2021-2022 - dindin|nibnib</NuxtLink>
		</span>
	</footer>
</template>