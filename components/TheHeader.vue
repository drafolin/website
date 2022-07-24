<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();

const messages = {
	en: {
		home: 'Home',
		projectsMenu: 'Projects',
		resume: 'Resume',
		toggleFR: 'Toggle to Fr',
	},
	fr: {
		home: 'Accueil',
		projectsMenu: 'Projet',
		resume: 'CV',
		toggleFR: 'Activer En',
	}
}

const { t, locale } = useI18n({ messages, useScope: 'global' });
const menuDivStyle = ref("fixed drop-shadow-lg bg-paper-white dark:bg-dark-gray py-10 inset-x-0 z-m1 -top-full");
const overlayDisplay = ref("opacity-0 hidden");
var menuOpened = false;

watch(() => route.query, () => {
	locale.value = `${route.query.lang || 'en'}`;
});

watch(() => route.path, () => {
	toggleMenu(false);
	console.log("peen");
})

const toggleMenu = (open?: boolean) => {
	if (open === undefined ? !menuOpened : open) {
		overlayDisplay.value = "opacity-100";
		menuDivStyle.value = "fixed shadow-sandwiched bg-paper-white dark:bg-dark-gray py-10 inset-x-0 transition-all animate-menu-close-anim";
	} else {
		overlayDisplay.value = "opacity-0";
		menuDivStyle.value = "fixed shadow-sandwiched bg-paper-white dark:bg-dark-gray py-10 inset-x-0 transition-all animate-menu-open-anim";
		setTimeout(() => {
			overlayDisplay.value = "opacity-0 hidden";
		}, 150);
	}

	if (open === undefined) menuOpened = !menuOpened;
}
</script>

<template >
	<div @click="toggleMenu()"
		:class="`fixed inset-x-0 bottom-0 top-header-height bg-dark-gray/70 transition-all ${overlayDisplay}`">
	</div>

	<header
		class="fixed hidden w-full p-4 py-8 shadow-lg bg-paper-white dark:bg-dark-gray dark:shadow-neutral-800 bg- lg:block">
		<nav class="flex items-center content-center justify-between h-10">
			<NuxtLink to="/" class="flex items-center text-white">
				<img src="../assets/dindin-lightweight.png" class="h-10 rounded-full"
					alt="Image of my sona, eyesopener." />
				<span class="ml-4">dindin|nibnib</span>
			</NuxtLink>
			<ul class="flex items-center list-none h-fit">
				<li class="align-middle h-fit">
					<NuxtLink
						class="px-2 py-3 m-1 rounded-3xl bg-transparent-violet hover:bg-violet-700/80 hover:text-white"
						to="/">
						{{ t("home") }}
					</NuxtLink>
				</li>
				<li class="align-middle h-fit">
					<NuxtLink
						class="px-2 py-3 m-1 rounded-3xl bg-transparent-violet hover:bg-violet-700/80 hover:text-white"
						to="/projects">{{ t("projectsMenu") }}
					</NuxtLink>
				</li>
				<li class="align-middle h-fit">
					<NuxtLink
						class="px-2 py-3 m-1 rounded-3xl bg-transparent-violet hover:bg-violet-700/80 hover:text-white"
						to="/cv">
						{{ t("resume") }}
					</NuxtLink>
				</li>
				<li class="align-middle h-fit">
					<button
						class="px-2 py-3 m-1 rounded-3xl bg-transparent-violet hover:bg-violet-700/80 hover:text-white"
						@click="locale = locale === 'fr' ? 'en' : 'fr'">
						{{ t("toggleFR") }}
					</button>
				</li>
			</ul>
		</nav>
	</header>

	<header
		class="fixed block w-full p-4 py-8 shadow-lg bg-paper-white dark:bg-dark-gray dark:shadow-neutral-800 lg:hidden">
		<nav class="flex items-center content-center justify-between h-10 px-5">
			<NuxtLink to="/" class="flex items-center text-white">
				<img src="../assets/dindin-lightweight.png" class="h-10 rounded-full"
					alt="Image of my sona, eyesopener.">
			</NuxtLink>

			<button @click="toggleMenu()" class="hamburger">
				<span class="block h-1 mb-2 rounded-full bg-neutral-700 dark:bg-white w-7"></span>
				<span class="block h-1 mb-2 rounded-full bg-neutral-700 dark:bg-white w-7"></span>
				<span class="block h-1 rounded-full bg-neutral-700 dark:bg-white w-7"></span>
			</button>
		</nav>

		<div :class="menuDivStyle">
			<ul class="flex flex-col items-center list-none">
				<li class="p-0 align-middle h-fit">
					<NuxtLink
						class="flex flex-col items-center w-full py-3 my-1 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/">
						<strong class="dark:text-white">{{ t("home") }}</strong>
					</NuxtLink>
				</li>
				<li class="p-0 align-middle h-fit">
					<NuxtLink
						class="flex flex-col items-center w-full py-3 my-1 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/projects"><strong class="dark:text-white">{{ t("projectsMenu") }}</strong>
					</NuxtLink>
				</li>
				<li class="p-0 align-middle h-fit">
					<NuxtLink
						class="flex flex-col items-center w-full py-3 my-1 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/cv">
						<strong class="dark:text-white">{{ t("resume") }}</strong>
					</NuxtLink>
				</li>
				<li class="p-0 align-middle h-fit">
					<button @click="() => {
						locale = locale === 'fr' ? 'en' : 'fr'
						toggleMenu()
					}" class="flex flex-col items-center w-full py-3 my-1 rounded-3xl bg-transparent-violet hover:bg-violet-700">
						<strong class="dark:text-white">{{ t("toggleFR") }}</strong>
					</button>
				</li>
			</ul>
		</div>
	</header>
</template>