<script setup lang='ts'>
import { useI18n } from 'vue-i18n';

definePageMeta({
	layout: "default",
	title: "Home - dindin|nibnib"
})

const messages = {
	en: {
		main: {
			title: "Hello! <em>dindin{'|'}nibnib</em> here!",
		},
		introduction: {
			title: "Introduction",
			p1: "Hey there! My name\'s <strong>dindin{'|'}nibnib</strong>.\
				Though you can call me dindin, the \"{'|'}nibnib\" part is silent!\
				I am an IT guy that programs loads of random things!\
				My main language is ts (please don\'t hurt me), though I also know python and c++",

			p2: "On my irl life, the name's Odin, and I am a dragon lover.\
				I am a furry, and my sona, of course, is a dragon.\
				To be more precise, it's a nigthwing, and the name's Eyesopener!\
				Oh, btw, I have adhd.",
			p3: "My pronouns are he/ him, birthday's on the 5th of October.\
				Don't hesitate to dm me by the way!"
		},
		projects: {
			title: "Projects",
			p1: "You can find all of my projects on <a href=\"https://www.github.com/dindin-nibnib\">my GitHub page</a>!",
			p2: "However, here are a few of my personal projects:",
			pr1: {
				title: "wifi.dindin.ch",
				p: "This website is a plain-text website without ssl certificate. You can use it to get redirected to a captive wifi portal"
			},
			pr2: {
				title: "r/WingsOfFire discord bot",
				p: "I am building a discord bot for the r/WingsOfFire subreddit."
			},
			pr3: {
				title: "Cobalt",
				p: "I am working on a mod creator helper for minecraft. It will be usable for both advanced and\
							begginner mod creators, featuring a compiler allowing cross-version mod creation without\
							changing the base code."
			}
		}
	},
	fr: {
		main: {
			title: "Salut! Moi c'est <em>dindin{'|'}nibnib</em>!"
		},
		introduction: {
			title: "Introduction",
			p1: "Hello! Je m'appelle <strong>dindin{'|'}nibnib</strong>.\
				Mais tu peux m'appeler dindin, \"{'|'}nibnib\" est silencieux!\
				Je suis un informaticien qui programme des tas de choses diverses et variées.\
				Mon langage préféré est le TypeScript (ne me frappez pas), mais je code aussi en Python et C++.",
			p2: "Dans la vie, mon nom est Odin, et j'adore les dragons!\
				J'ai un sona, qui, bien sur est un dragon.\
				Une aile de nuit, plus précisément, qui s'appelle Eyesopener!\
				Ah, et je suis hyperactif.\
				Je parle anglais et français",
			p3: "Mes pronons sont il/lui, n'hésitez pas à me parler en privé!"
		},
		projects: {
			title: "Projets",
			p1: "Vous pouvez trouver tous mes projets sur <a href=\"https://www.github.com/dindin-nibnib\">mon profil GitHub</a>!",
			p2: "Mais voici quelques de mes projets personnels:",
			pr1: {
				title: "wifi.dindin.ch",
				p: "Ce site web est un site web de texte en clair sans certificat SSL. Vous pouvez l'utiliser pour vous rediriger vers un portail wifi captif"
			},
			pr2: {
				title: "Bot discord r/ Wingsoffire",
				p: "Je suis en train de créer un bot discord pour le serveur de <a\
								href=\"https://www.reddit.com/r/wingsoffire\">r/WingsOfFire</a>"
			},
			pr3: {
				title: "Cobalt",
				p: "Je travaille sur une aide à la création de mods pour Minecraft. Il sera utilisable à la fois\
							pour les créateurs de mods avancés et débutants, avec un compilateur permettant la création\
							de mods de différentes versions\
							sans changer le code de base."
			}
		}
	}
}

const { t } = useI18n({ messages, useScope: 'global' });
</script>

<template>
	<main class="p-4">
		<h1 v-html="t('main.title')"></h1>
		<section class="introduction">
			<h2 v-html="t('introduction.title')"></h2>
			<p v-html="t('introduction.p1')"></p>
			<p v-html="t('introduction.p2')"></p>
			<p v-html="t('introduction.p3')"></p>
		</section>

		<section>
			<h2 v-html="t('projects.title')"></h2>
			<p v-html="t('projects.p1')"></p>
			<p v-html="t('projects.p2')"></p>

			<ul class="m-0 list-none">
				<li class="flex flex-col items-center p-0">
					<div
						class="flex flex-col items-center p-5 m-5 border-2 border-solid border-slate-800 dark:border-white bg-slate-400/40 dark:bg-slate-800/40 lg:overflow-auto lg:w-1/2 rounded-3xl lg:block">
						<h3 class="w-full text-center">
							<NuxtLink to="http://wifi.dindin.ch" target="_blank" class="text-black dark:text-white">
								{{ t('projects.pr1.title') }}</NuxtLink>
						</h3>
						<p v-html="t('projects.pr1.p')"></p>
					</div>
				</li>
				<li class="flex flex-col items-center p-0">
					<div
						class="flex flex-col items-center p-5 m-5 border-2 border-solid border-slate-800 dark:border-white bg-slate-400/40 dark:bg-slate-800/40 lg:overflow-auto lg:w-1/2 rounded-3xl lg:block">
						<h3 class="w-full text-center">
							<NuxtLink to="https://github.com/r-wingsoffire/r-wof-bot"
								class="text-black dark:text-white">{{ t('projects.pr2.title') }}</NuxtLink>
						</h3>
						<p v-html="t('projects.pr2.p')"></p>
					</div>
				</li>
				<li class="flex flex-col items-center p-0">
					<div
						class="flex flex-col items-center p-5 m-5 border-2 border-solid border-slate-800 dark:border-white bg-slate-400/40 dark:bg-slate-800/40 lg:overflow-auto lg:w-1/2 rounded-3xl lg:block">
						<h3 class="w-full text-center">
							<NuxtLink to="https://github.com/devs-of-cobbalt/cobbalt"
								class="text-black dark:text-white">{{ t('projects.pr3.title') }}</NuxtLink>
						</h3>
						<p v-html="t('projects.pr3.p')"></p>
					</div>
				</li>
			</ul>
		</section>
	</main>
</template>