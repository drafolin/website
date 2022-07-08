<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<header>
		<a href="/src/assets/dindin.png"><img src="../assets/dindin-lightweight.png" style="height: 20vw; width:20vw"
				alt="Image of my sona, eyesopener."></a>
	</header>

	<main>
		<h1>dindin|nibnib</h1>
		<section class="introduction">
			<h2>Introduction</h2>
			<p>Hey there! My name's <strong>dindin|nibnib</strong>.
				Though you can call me dindin, the "|nibnib" part is silent!
				I am an IT guy that programs loads of random things!
				My main language is ts (please don't hurt me), though I also know python and c++ <br><br>
				On my irl life, the name's Odin, and I am a dragon lover.
				I am a furry, and my sona, of course, is a dragon.
				To be more precise, it's a nigthwing, and the name's Eyesopener!<br><br>
				My pronouns are he/him, birthday's on the 5th of October.
				Don't hesitate to dm me by the way!</p>
		</section>

		<section class="websites">
			<h2>My websites</h2>
			<nav>
				<ul>
					<li>
						<RouterLink to="/fr">French page (français)</RouterLink>
					</li>
					<li>
						<RouterLink to="/cv">Curriculum vitae</RouterLink>
					</li>
				</ul>
			</nav>
		</section>
	</main>

	<footer>
		<span>Find me on:</span>
		<nav>
			<ul class="social">
				<li class="github"><a href="https://github.com/dindin-nibnib">
						<img src="../assets/icons/github-icon.png" alt="My github page">
					</a></li>
				<li class="twitter"><a href="https://twitter.com/dindin_nibnib">
						<img src="../assets/icons/twitter-icon.png" alt="My twitter page">
					</a></li>
				<li class="telegram"><a href="https://t.me/dindin_nibnib">
						<img src="../assets/icons/telegram-icon.svg-4063778145" alt="My telegram account">
					</a></li>
				<li class="discord"><a href="https://discordapp.com/users/373515998000840714">
						<img src="../assets/icons/discord-icon.png" alt="My discord profile">
					</a></li>
				<li class="mail"><a href="mailto:odinbeuchat.ob@ikmail.com">
						<img src="../assets/icons/mail-icon.png" alt="Email me!">
					</a></li>
			</ul>
		</nav>
	</footer>
</template>