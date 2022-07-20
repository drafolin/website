<script setup lang='ts'>
definePageMeta({
	layout: "discord"
})
</script>

<template>
	<h1>Interface</h1>
	<p>
		L’interface graphique de discord est très ergonomique.
		Elle offre différentes options de navigation et permet d’avoir tous les éléments importants à l’écran, sans
		jamais surcharger la fenêtre.
		Discord réussit l’exploit d’être à la fois minimaliste, ergonomique, complet et intuitif pour tout le monde
		!
	</p>

	<div class="light">
		<h2>Disposition</h2>
		<p>L'interface de discord est très simple à comprendre :</p>
		<img alt="Schéma de disposition de l'interface" src="../assets/images/disposition-interface.png">

	</div>
	<h3>Liste de serveurs</h3>
	<p>
		La liste de serveurs contient tous les serveurs dont l’utilisateur fait partie.
		Une navigation entre serveurs consiste simplement à cliquer sur l’icône du serveur voulu.
		<br>
		<br>
		L’icône discord en haut de la liste représente le menu principal.
		Cette catégorie n’est pas un serveur, mais un menu spécial où l’on peut accéder aux amis, aux messages
		privés
		(appelés aussi DMs), et à la librairie, si des jeux discords sont installés.
		<br>
		Dans cette catégorie, la liste de gauche n’est plus la liste de salons, mais la liste de menus.
	</p>

	<div class="light">
		<h3>Liste de salons</h3>
		<p>La liste de salons contient tous les salons du serveur sélectionné. On peut y sélectionner un salon,
			vocal ou
			textuel, ce qui permet de le rejoindre.
			<br> <br>
			Un salon vocal est comme un appel de groupe vocal, n’importe qui ayant accès au salon vocal peut le
			rejoindre.
			<br>
			Un salon textuel est simplement une zone où l’on s’envoie des messages. À nouveau, n’importe qui ayant
			accès
			au
			salon peut en voir les messages.
		</p>
	</div>

	<h3>Liste de menus</h3>
	<p>
		La liste de menus a une présentation similaire à la liste de salons. Cependant, chaque élément pointe vers
		un
		utilisateur et représente un salon DM.
		Personne d’autre que l’utilisateur et le destinataire ne peuvent y accéder. <br>
		La liste contient aussi les éléments « Amis », « Librairie », et « Nitro ».
	</p>

	<div class="menus light">
		<div class="amis">
			<h4>Amis</h4>
			<p>
				Affiche les amis en ligne, leur statut et leur activité, s'ils jouent à un jeu.
			</p>
		</div>

		<div class="librairie">
			<h4>Librairie</h4>
			<p>
				Affiche les jeux Discord, si l’utilisateur en a installé.
			</p>
		</div>
	</div>

	<div class="nitro">
		<h4>Nitro</h4>
		<p>
			Affiche un menu permettant d’acheter <NuxtLink to="/fonctionnalites#nitro">Discord Nitro</NuxtLink>,
			un
			abonnement
			qui
			offre plusieurs fonctionnalités supplémentaires à l’utilisateur.
		</p>
	</div>


	<div class="light">
		<h3>Contenu</h3>
		<p>
			L’espace de contenu est la plus grande des zones.
			Cette zone affiche le contenu du menu sélectionné, par exemple les messages d’un salon, les amis en
			ligne,
			etc…
		</p>
		<img alt="Schéma de la zone de contenu" src="../assets/images/contenu.png">
	</div>

	<h3>Liste d'amis ou de membres</h3>
	<p>
		Si l’utilisateur a sélectionné un serveur, cette liste affiche tous les membres du serveur en ligne. <br>
		Si l’utilisateur a sélectionné le menu principal, cette liste affiche les amis en jeu. <br>
		Cette liste peut être masquée à tout moment. <br>
	</p>
</template>