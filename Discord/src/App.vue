<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
let animation = ref("");

animation.value = 'disappear'

</script>

<template>
  <div class="loading-screen" :style="{ 'animation-name': animation }">
    <img alt="Chargement" class="loading-icon" src="./assets/images/discord_icon_mono.png">
    <div class="loading-anim-wrapper">
      <div class="loading-anim">
        <div class="gradient"></div>
        <div class="gradient"></div>
      </div>
    </div>
  </div>
  <header class="mobile">
    <input id="menu-open" type="checkbox">
    <label class="menu-open" for="menu-open">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <RouterLink class="main-title" to="/">
      <h1 class="main-title">Discord</h1>
    </RouterLink>
    <img alt="icône discord" class="header-icon" src="./assets/images/discord_icon.png">

    <div class="menu-content">
      <RouterLink class="choix-menu" to="/">
        <div class="choix-menu actif">
          Accueil
        </div>
      </RouterLink>
      <RouterLink class="choix-menu" to="/interface">
        <div class="choix-menu">
          Interface
        </div>
      </RouterLink>>
      <RouterLink class="choix-menu" to="/fonctionnalites">
        <div class="choix-menu">
          Fonctionnalités
        </div>
      </RouterLink>
      <RouterLink class="choix-menu" to="/bots">
        <div class="choix-menu">
          Bots
        </div>
      </RouterLink>
      <RouterLink class="choix-menu" to="/statistiques">
        <div class="choix-menu">
          Statistiques
        </div>
      </RouterLink>
    </div>
  </header>
  <header class="desktop">
    <RouterLink class="main-title" to="/">
      <img alt="icône discord" class="header-icon" src="./assets/images/discord_icon.png">
      <h1 class="main-title">Discord</h1>
    </RouterLink>

    <div class="links">
      <RouterLink to="/interface">Interface</RouterLink>>
      <RouterLink to="/fonctionnalites">Fonctionnalités</RouterLink>
      <RouterLink to="/bots">Bots</RouterLink>
      <RouterLink to="/statistiques">Statistiques</RouterLink>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <img alt="icône discord" class="footer-image" src="./assets/images/discord_icon.png">

    <div class="middle">
      <div class="copyright">
        ©2021 - <a href="../..">Odin Beuchat</a> | <a href="mailto:odinbeuchat.ob@icloud.com"
          target="_blank">odinbeuchat.ob@icloud.com</a>
      </div>

      <div class="networks">
        <a href="https://www.facebook.com/discord/" target="_blank">
          <img alt="page facebook" class="network-icon" src="./assets/images/facebook.png">
        </a>

        <a href="https://www.instagram.com/discord/" target="_blank">
          <img alt="Compte instagram" class="network-icon" src="./assets/images/insta.png">
        </a>

        <a href="https://www.youtube.com/discord/" target="_blank">
          <img alt="Chaîne youtube" class="network-icon" src="./assets/images/yt.png">
        </a>

        <a href="https://twitter.com/discord" target="_blank">
          <img alt="Compte twitter" class="network-icon" src="./assets/images/twitter.png">
        </a>
      </div>
    </div>

    <a href="https://www.discord.com" target="_blank">
      <div class="lien-off">Site officiel</div>
    </a>
  </footer>
</template>

<style>
@import url("https://necolas.github.io/normalize.css/latest/normalize.css");

@font-face {
  font-family: "Whitney";
  src: local(Whitney),
    url("../assets/fonts/whitneymedium.woff") format("woff2");
}

@font-face {
  font-family: "Ginto";
  src: local(Ginto),
    url("../assets/fonts/ginto.woff2") format("woff2");
}

@font-face {
  font-family: "Ginto Nord";
  src: local("Ginto Nord"),
    url("../assets/fonts/Ginto Nord.woff2") format("woff2");
}

@font-face {
  font-family: "Open Sans";
  src: url("https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0B4gaVI.woff2") format("woff2");
}

@keyframes slide {
  from {
    left: calc(50% - 100% + 100px / 2)
  }

  to {
    left: calc(50% - 100px / 2)
  }
}

@keyframes enter-from-top {
  from {
    bottom: 120%;
  }

  to {
    top: 0;
  }
}

@keyframes disappear {
  from {
    opacity: 100%;
    z-index: 999
  }

  to {
    opacity: 0;
    z-index: -1
  }
}

* {
  --dark-grey: #23272a;
  --light-grey: #2e3438;
  --blurple: #828cf6;
  --font-boldest: "Ginto Nord", Whitney, Arial, sans-serif;
  --default-shadow: 0 2px 4px black;
  color: white;
  background-color: var(--dark-grey);
  font-family: Whitney, "Open Sans", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.3em;
  letter-spacing: 2px;
  box-sizing: border-box;
}

div {
  background-color: inherit;
}

img {
  height: auto;
  margin: 10px 0;
}

body {
  overflow-x: hidden;
  z-index: -999;
}

header,
.modified-header,
main,
footer {
  min-width: 100vw;
  padding: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Ginto, Whitney, Arial, sans-serif;
  font-weight: bold;
  width: fit-content;
}

h2,
h3,
h4,
h5,
h6 {
  margin: 50px 0 10px 0;
}

h1 {
  text-align: center;
  align-self: center;
  font-family: var(--font-boldest);
  font-weight: bolder;
  font-size: min(7vw, 48px);
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
  font-weight: bold;
}

p,
ul,
ol {
  font-size: 18px;
  font-family: "Open Sans", Bahnschrift, Arial, sans-serif;
  margin: 0;
  letter-spacing: inherit;
}

ul,
ol {
  margin: 10px 0;
}

p.center {
  text-align: center;
  margin: 15px 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  background-color: inherit;
}

.wumpus {
  background-color: var(--light-grey);
}

.center {
  align-self: center;
}

a {
  transition: all 300ms;
  width: fit-content;
  text-decoration: underline;
  color: var(--blurple);
}

.main-title {
  color: white;
  text-decoration: none;
}

header,
.modified-header {
  position: fixed;
  height: 75px;
  left: 0;
  top: 0;
  box-shadow: var(--default-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  z-index: 50;
}

footer {
  background-color: var(--light-grey);
  display: flex;
  position: static;
  bottom: 0;
  width: 100%;
  left: 0;
}

.menu-content {
  position: fixed;
  width: 100%;
  left: 0;
  height: fit-content;
  padding: 20px;
  transition: all 300ms cubic-bezier(0.5, 0, 0.5, 1);
  top: 75px;
  box-shadow: var(--default-shadow), 0 7px 4px -5px black inset;
  z-index: -20;
}

.main-title {
  font-family: var(--font-boldest);
  font-weight: normal;
  letter-spacing: 0;
  font-size: 24px;
  width: fit-content;
}

.header-icon {
  border-radius: 50%;
  width: 45px;
}

#menu-open {
  align-self: center;
  width: 30px;
  height: 30px;
  margin: 10px;
  display: none;
  z-index: 2;
}

#menu-open~.menu-content {
  top: -200%;
  /* display: none; */
}

#menu-open:checked~.menu-content {
  top: 75px;
}

#menu-open~label span {
  margin: -4px 0;
}

#menu-open~label span:first-child {
  transform-origin: left;
  transition: all 0.4s ease-in-out;
}

#menu-open~label span:nth-child(2) {
  transform-origin: 50% 50%;
  transition: all 0.2s ease-in-out;
}

#menu-open~label span:last-child {
  transform-origin: left;
  transition: all 0.4s ease-in-out;
}

#menu-open:checked~label span:first-child {
  transform: rotate(41.185925165709645805088586367179deg);
  width: 53px;
}

#menu-open:checked~label span:nth-child(2) {
  transform: scaleY(0)
}

#menu-open:checked~label span:last-child {
  transform: rotate(-41.185925165709645805088586367179deg);
  width: 53px;
}

#menu:not(:target) {
  transform: translateY(-200%);
}

#menu:target {
  transform: translateY(0);
}

.menu-open {
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.menu-open span {
  width: 100%;
  height: 7px;
  border-radius: 5px;
  display: block;
  background-color: white;
}

div.choix-menu {
  background-color: var(--dark-grey);
  border-radius: 20px;
  padding: 15px 20px;
  text-align: left;
  font-size: 24px;
  width: 100%;
  height: fit-content;
}

RouterLink.choix-menu {
  width: 100%;
  height: fit-content;
  display: block;
  margin: 10px 0;
  padding: 0 10px;
  text-decoration: none;
  color: white;
}

div.choix-menu.actif {
  background-color: var(--blurple);
}

main {
  padding: 90px 20px 20px;
  display: flex;
  flex-direction: column;
  letter-spacing: .05rem;
  width: min(100vw, 600px);
  min-width: 0;
  margin: auto;
}

.wumpus {
  max-width: 180px;
  align-self: center;
  margin-bottom: 15px;
  margin-top: -17.6px;
}

.emphasis {
  margin: 50px auto 20px auto;
  background-color: var(--blurple);
  border-radius: 30px;
  text-align: center;
  align-self: center;
  border: solid 12px var(--blurple);
  box-shadow: 0 0 5px black;
  width: min(min(90vw, 560px), 90%);
  letter-spacing: 0;
}

.emphasis>a {
  color: white;
  text-decoration: underline;
  font: inherit;
  letter-spacing: inherit;
}

a:active {
  transform: scale(1.1);
}

footer {
  background-color: var(--light-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.footer-image {
  display: none;
}

.networks {
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-icon {
  border-radius: 50%;
  max-width: 30px;
  background-color: var(--blurple);
  margin: 2px;
}

table,
th,
td {
  border-collapse: collapse;
  text-align: center;
}

table {
  width: 100%;
  background-color: var(--light-grey);
  font-size: 15px;
}

tbody {
  font-size: inherit;
}

td {
  background-color: var(--light-grey)
}

th,
td {
  padding: 10px 5px;
  font-size: 16px;
}

th {
  background-color: var(--blurple);
}

col.nom {
  width: 43%;
}

.lien-off {
  background-color: var(--blurple);
  border-radius: 25rem;
  border: solid 15px var(--blurple);
  width: 80vw;
  text-align: center;
  margin: 10px;
}

.appel {
  width: 75%;
}

img.status {
  width: 110px;
  height: 110px;
  margin: 0;
  align-self: center;
}

img.center {
  transition: all 0ms;
  transform: scale(0.7) translateY(12px);
}

div.status {
  display: grid;
  grid-row-gap: 15px;
  grid-column-gap: 35px;
}

.online,
.offline,
.idle,
.dnd {
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
}

.offline {
  grid-row: 1;
  grid-column: 1;
}

.online {
  grid-column: 2;
  grid-row: 1;
}

.idle {
  grid-row: 2;
  grid-column: 1;
}

.dnd {
  grid-row: 2;
  grid-column: 2;
}

.status>div>p {
  font-size: 16px;
  margin-top: 5px;
}

.server-ping {
  width: 72px;
  height: 72px;
  align-self: center;
}

.channel-ping {
  height: auto;
  width: 100%;
}

.musique {
  width: 100%;
}

.loading-screen {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  background-color: var(--dark-grey);
  opacity: 1;
}

.gradient {
  background-image: linear-gradient(to right, rgba(35, 39, 42, 0.6) 60%, rgba(35, 39, 42, 0) 80%);
  height: 100px;
  width: 100%;
  position: relative;
  margin: 1px;
}

.gradient:nth-child(2) {
  transform: rotate(180deg);
}

.loading-icon {
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 100px / 2);
  top: calc(50% - 100px / 2);
  background-color: transparent;
  margin: 0;
}

.loading-anim-wrapper {
  background-color: rgba(35, 39, 42, 0.2);
  width: fit-content;
  height: fit-content;
}

.loading-anim {
  background-color: transparent;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: calc(50% - 100px / 2);
  display: flex;
  justify-content: flex-start;
  animation-name: slide;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


img[src="./assets/images/disposition-interface.png"],
img[src="./assets/images/contenu.png"] {
  max-width: 500px;
}

.desktop {
  display: none;
}

.middle {
  display: flex;
  flex-direction: column;
}

.copyright {
  width: 300px;
  text-align: center;
  margin: 0 20px 20px;
}

.light {
  display: inherit;
  justify-content: inherit;
  align-content: inherit;
  flex-direction: inherit;
  background-color: var(--light-grey);
  padding: 20px 20px;
  border-radius: 5px;
  margin: 50px 0;
}

h2,
h3,
h4 {
  margin: 0;
}

.banane {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.err404 p,
.err404 figcaption {
  text-align: center;
}

@media screen and (max-width: 590px) {
  .wumpus {
    background-color: var(--dark-grey);
  }

  .light {
    padding-left: 10px;
    padding-right: 10px;
  }

  .menus {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-direction: row;
  }

  .nitro>h4,
  .menus>div>h4 {
    margin: auto;
    text-align: center;
  }

  .nitro {
    margin: auto;
  }

  .nitro>p {
    text-align: center;
    margin: 10px;
  }

  .amis

  /*, .nitro*/
  ,
  .librairie {
    display: inline;
    width: 40%;
    margin: 10px;
  }

  .amis>*,
  .librairie>*,
  .nitro>* {
    margin-top: 10px;
    letter-spacing: 1px;
    line-height: 1em;
    text-align: center;
  }

  .amis>h4,
  .librairie>h4,
  .nitro>h4 {
    text-align: center;
  }

  #menu {
    z-index: 50;
  }

  #menu:target {
    animation-name: enter-from-top;
    animation-fill-mode: both;
  }
}

@media screen and (max-width: 910px) and (min-width: 590px) {
  header {
    flex-direction: column;
    height: fit-content;
  }

  footer {
    flex-direction: column;
    height: fit-content;
  }
}

@media screen and (min-width: 910px) {
  header {
    flex-direction: row;
  }

  footer {
    flex-direction: row;
  }

  .lien-off,
  footer>a {
    max-width: min(500px, 20vw);
  }
}

@media screen and (min-width: 590px) {
  .footer-image {
    display: block;
    width: 120px;
    border-radius: 25%;
    margin: 0 90px;
  }

  .menu-content {
    display: none;
  }

  footer {
    display: flex;
    width: 100vw;
    padding: 30px 50px 30px 60px;
  }

  .network-icon {
    margin: 5px;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
  }

  .main-title {
    display: flex;
  }

  .header-icon {
    margin-right: 5px
  }

  .links>a {
    /* Interface */


    width: 150px;

    font-style: normal;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 1em;

    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;

    order: 0;
    flex-grow: 0;
    margin: 0 20px;
  }

  .links {
    display: flex;
    width: 60%;
    justify-content: space-around;
    justify-self: auto;
  }

  a:hover {
    transform: scale(1.1);
  }

  .wumpus {
    position: absolute;
    right: calc(50% - 265px);
    top: 350px;
    width: 500px;
  }
}
</style>
