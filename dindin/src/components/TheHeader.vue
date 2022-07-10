<script setup lang="ts">import { ref } from 'vue';

let home = ref("Home");
let projects = ref("Projects");
let resume = ref("Resume");
let toggleFR = ref("Switch to Fr");

let root = ref("/");
let projectsPath = ref("/projects");
let resumePath = ref("/cv");
let frPath = ref("/fr");

const toggleFrench = () => {
	if (window.location.href.includes("fr")) {
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
}
</script>

<template>
	<header class="shadow-lg dark:shadow-neutral-800 w-full p-4 py-8">
		<nav class="flex content-center items-center justify-between h-10">
			<div class="flex items-center">
				<img src="../assets/dindin-lightweight.png" class="rounded-full h-10"
					alt="Image of my sona, eyesopener." />
				<span class="ml-4">dindin|nibnib</span>
			</div>
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
					<RouterLink v-on:click.passive="toggleFrench"
						class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" :to="frPath">
						{{ toggleFR }}
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>