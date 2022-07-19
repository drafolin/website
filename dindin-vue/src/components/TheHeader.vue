<script setup lang="ts">
import { onMounted, ref, toRaw, watch } from 'vue';
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
		class="bg-paper-white dark:bg-dark-gray fixed shadow-lg dark:shadow-neutral-800 bg- w-full p-4 py-8 hidden lg:block">
		<nav class="flex content-center items-center justify-between h-10">
			<RouterLink to="/" class="flex items-center text-white">
				<img src="../assets/dindin-lightweight.png" class="rounded-full h-10"
					alt="Image of my sona, eyesopener." />
				<span class="ml-4">dindin|nibnib</span>
			</RouterLink>
			<ul class="flex list-none h-fit">
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" to="/">
						{{ t("home") }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/projects">{{ t("projectsMenu") }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" to="/cv">
						{{ t("resume") }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<a href="javascript:void(0)"
						class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						@click="locale = locale === 'fr' ? 'en' : 'fr'">
						{{ t("toggleFR") }}
					</a>
				</li>
			</ul>
		</nav>
	</header>

	<header
		class="bg-paper-white dark:bg-dark-gray fixed shadow-lg dark:shadow-neutral-800 w-full p-4 py-8 block lg:hidden">
		<nav class="flex content-center items-center justify-between h-10 px-5">
			<RouterLink to="/" class="flex items-center text-white">
				<img src="../assets/dindin-lightweight.png" class="rounded-full h-10"
					alt="Image of my sona, eyesopener.">
			</RouterLink>

			<a href="javascript:void(0)" @click="toggleMenu()" class="hamburger">
				<span class="block rounded-full bg-neutral-700 dark:bg-white h-1 w-7 mb-2"></span>
				<span class="block rounded-full bg-neutral-700 dark:bg-white h-1 w-7 mb-2"></span>
				<span class="block rounded-full bg-neutral-700 dark:bg-white h-1 w-7"></span>
			</a>
		</nav>

		<div :class="menuDivStyle">
			<ul class="flex flex-col list-none mx-8">
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/">
						<strong class="dark:text-white">{{ t("home") }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/projects"><strong class="dark:text-white">{{ t("projectsMenu") }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/cv">
						<strong class="dark:text-white">{{ t("resume") }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<a href="javascript:void(0)" @click="() => {
						locale = locale === 'fr' ? 'en' : 'fr'
						toggleMenu()
					}" class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700">
						<strong class="dark:text-white">{{ t("toggleFR") }}</strong>
					</a>
				</li>
			</ul>
		</div>
	</header>
</template>