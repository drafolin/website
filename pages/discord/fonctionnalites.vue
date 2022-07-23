<script setup lang='ts'>
definePageMeta({
	layout: "discord"
})
</script>

<template>
	<h1>Fonctionnalités</h1>
	<p>
		Discord est un outil très polyvalent!
	</p>

	<div class="light">
		<div class="emphasis">
			Passer des appels vocaux ou vidéo.
		</div>
		<img alt="Exemple d'appel" class="appel center" src="../../assets/discord/images/Appels.png">
	</div>

	<div class="emphasis">
		Garder contact avec vos amis et écouter leur musique
	</div>
	<img alt="Un ami qui écoute de la musique" class="musique center" src="../../assets/discord/images/musique.png">

	<div class="light">
		<div class="emphasis">
			Indiquer rapidement à vos amis si vous êtes disponible
		</div>
		<div class="center status">
			<div class="offline">
				<img alt="Hors-ligne" class="status" src="../../assets/discord/images/offline.png">
				<p class="center">
					Hors-ligne
				</p>
			</div>
			<div class="online">
				<img alt="En ligne" class="status" src="../../assets/discord/images/online.png">
				<p class="center">
					En ligne
				</p>
			</div>
			<div class="idle">
				<img alt="Absent" class="status" src="../../assets/discord/images/idle.png">
				<p class="center">
					Absent
				</p>
			</div>
			<div class="dnd">
				<img alt="Ne pas déranger" class="status" src="../../assets/discord/images/dnd.png">
				<p class="center">
					Ne pas <br> déranger
				</p>
			</div>
		</div>
	</div>

	<div class="emphasis">
		Attirer l'attention
	</div>
	<img alt="Exemple de ping dans un serveur" class="server-ping" src="../../assets/discord/images/server-ping.png">
	<img alt="Exemple de ping dans un salon" class="channel-ping" src="../../assets/discord/images/channel-ping.png">

	<div class="light">
		<h2>Easter eggs</h2>
		<ul>
			<li>En appuyant plusieurs fois sur le bouton menu, vous pouvez déclencher un « Discordo ! » qui se
				jouera au
				démarrage de discord !
			</li>
			<li>En faisant ctrl + /, l’aide des raccourcis claviers apparaît. Vous pouvez jouer à Friday night
				funkin
				!
			</li>
			<li>Dans ce même menu, si vous appuyez sur h, h, →, n, k, vous pouvez fermer le menu de manière épique !
			</li>
		</ul>
	</div>

	<h2 id="nitro">Nitro</h2>
	<p>
		Grâce à l’abonnement nitro, vous obtenez les fonctionnalités suivantes :
	</p>
	<ul>
		<li>Plusieurs avatars</li>
		<li>Profil personnalisé</li>
		<li>Stickers spéciaux</li>
		<li>Emojis animés</li>
		<li>Utilisation d’émojis d’autres serveurs</li>
		<li>2 boosts gratuits</li>
		<li>Badge nitro</li>
		<li>Uploads jusqu’à 100 mb</li>
	</ul>
	<p class="small">
		Les listes présentes sur ce site ne sont pas exhaustives.
	</p>
</template>