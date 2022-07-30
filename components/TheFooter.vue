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
	<footer class="flex flex-col pt-4 px-4 items-center">
		<span>{{ t("footer.find") }}</span>
		<nav class="max-w-xl w-full self-center">
			<ul class="social flex justify-evenly list-none m-2 p-0 w-full">
				<li class="inline m-2 github"><a href="https://github.com/dindin-nibnib">
						<nuxt-img format="avif" src="/assets/icons/github-icon.png"
							class="max-w-xs max-h-xs w-full grayscale hover:grayscale-0 transition-all"
							alt="My github page"/>
					</a></li>
				<li class="inline m-2 twitter"><a href="https://twitter.com/dindin_nibnib">
						<nuxt-img format="avif" src="/assets/icons/twitter-icon.png"
							class="max-w-xs max-h-xs w-full grayscale hover:grayscale-0 transition-all"
							alt="My twitter page"/>
					</a></li>
				<li class="inline m-2 telegram"><a href="https://t.me/dindin_nibnib">
						<nuxt-img format="avif" src="/assets/icons/telegram-icon.png"
							class="max-w-xs max-h-xs w-full grayscale hover:grayscale-0 transition-all"
							alt="My telegram account"/>
					</a></li>
				<li class="inline m-2 discord"><a href="https://discordapp.com/users/373515998000840714">
						<nuxt-img format="avif" src="/assets/icons/discord-icon.png"
							class="max-w-xs max-h-xs w-full grayscale hover:grayscale-0 transition-all"
							alt="My discord profile"/>
					</a></li>
				<li class="inline m-2 mail"><a href="mailto:odinbeuchat.ob@ikmail.com">
						<nuxt-img format="avif" src="/assets/icons/mail-icon.png"
							class="max-w-xs max-h-xs w-full grayscale hover:grayscale-0 transition-all" alt="Email me!"/>
					</a></li>
			</ul>
		</nav>
		<span class="dark:text-gray-400 text-xs lg:text-sm self-center mt-4">This site is a work in progress! Some pages
			might not be existing for now...</span><br />
		<span class="dark:text-gray-400 text-xs lg:text-sm self-center mt-4">
			©2021-2022 - Odin Beuchat | <a href="mailto:odinbeuchat.ob@icloud.com">odinbeuchat.ob@icloud.com</a>
		</span>
	</footer>
</template>