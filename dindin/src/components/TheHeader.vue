import { RouterLink } from 'vue-router';
<template>
	<header class="shadow-lg shadow-neutral-800 w-full p-4 py-8">
		<nav class="flex content-center items-center justify-between h-10">
			<img src="../assets/dindin-lightweight.png" class="rounded-full h-10" alt="Image of my sona, eyesopener.">
			<ul class="flex list-none h-fit">
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" to="/">Home
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700"
						to="/projects">Projects
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" to="/cv">
						Resume
					</RouterLink>
				</li>
				<li class="align-middle h-fit">
					<RouterLink class="py-3 m-1 px-2 rounded-3xl bg-transparent-violet hover:bg-violet-700" to="/fr">
						Switch to fr
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>