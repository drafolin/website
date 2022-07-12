<script setup lang="ts">import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

let home = ref("Home");
let projects = ref("Projects");
let resume = ref("Resume");
let toggleFR = ref("Switch to Fr");

let root = ref("/");
let projectsPath = ref("/projects");
let resumePath = ref("/cv");
let frPath = ref("/fr");

const menuDivStyle = ref("fixed drop-shadow-lg bg-paper-white dark:bg-dark-gray py-10 inset-x-0 z-m1 -top-full");
const overlayDisplay = ref("opacity-0");
var menuOpened = false;

const route = useRoute()

watch(() => route.path, async (path) => {
	toggleMenu(false);
	if (path.includes("fr")) {
		home.value = "Accueil";
		projects.value = "Projets";
		resume.value = "CV";
		toggleFR.value = "Passer à en";

		root.value = "/fr";
		projectsPath.value = "/fr/projets";
		resumePath.value = "/fr/cv";
		frPath.value = "/";
	} else {
		home.value = "Home";
		projects.value = "Projects";
		resume.value = "Resume";
		toggleFR.value = "Switch to Fr";

		root.value = "/";
		projectsPath.value = "/projets";
		resumePath.value = "/cv";
		frPath.value = "/fr";
	}
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
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" :to="root">
						{{ home }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="projectsPath">{{ projects }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="resumePath">
						{{ resume }}
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="frPath">
						{{ toggleFR }}
					</RouterLink>
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
						:to="root">
						<strong class="dark:text-white">{{ home }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="projectsPath"><strong class="dark:text-white">{{ projects }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="resumePath">
						<strong class="dark:text-white">{{ resume }}</strong>
					</RouterLink>
				</li>
				<li class="align-middle h-fit p-0">
					<RouterLink
						class="flex flex-col items-center py-3 my-1 w-full rounded-3xl bg-transparent-violet hover:bg-violet-700"
						:to="frPath">
						<strong class="dark:text-white">{{ toggleFR }}</strong>
					</RouterLink>
				</li>
			</ul>
		</div>
	</header>
</template>