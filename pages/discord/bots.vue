<script setup lang='ts'>
definePageMeta({
	layout: "discord"
})
</script>

<template>
	<h1>Bots</h1>
	<p>
		Discord offre une api accessible par tous.
		<br> <br>
		L'api permet de créer des « Bots » qui prennent la forme d’utilisateurs.
		On peut ensuite programmer ces « utilisateurs » pour faire différentes actions, le tout dans un programme
		évènementiel.
		<br> <br>
		Des contributeurs bénévoles se sont rassemblés et ont créé plusieurs bibliothèques pour différents langages
		de
		programmation, afin d’accéder à cette api dans son langage préféré !
		<br> <br>
		On peut par exemple nommer :
	</p>
	<ul>
		<li>Discord.js (node.js)</li>
		<li>Discord.py (python)</li>
		<li>Discord++ (C++)</li>
		<li>Javacord (Java)</li>
	</ul>
	<img alt="Exemple de commande" src="../assets/images/command.png">
	<img alt="Réponse du bot" src="../assets/images/response.png">
	<div class="light">
		<p>
			Exemple de bot (Fait par moi-même, avec discord.js)
		</p>
		<img alt="Partie du code du bot" src="../assets/images/code.png">
	</div>
	<p class="small">
		Les listes présentes sur ce site ne sont pas exhaustives.
	</p>
</template>