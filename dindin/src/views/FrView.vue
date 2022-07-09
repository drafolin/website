<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<main>
		<div id="page" class="page  ">
			<div class="container">
				<h1>Odin Beuchat</h1>
				<h2>Mes sites</h2>
				<nav class="content">
					<ul>
						<li>
							<RouterLink to="fr/cv">Mon CV</RouterLink>
						</li>
						<li>
							<a href="/fr/Discord">Ma présentation de discord</a>
						</li>
					</ul>
				</nav>
				<div class="social-links">
				</div>
				<div class="hosting-info">
					<p>
						©2021 - Odin Beuchat | <a href="mailto:odinbeuchat.ob@icloud.com">odinbeuchat.ob@icloud.com</a>
					</p>
				</div>
			</div>
		</div>
	</main>
</template>