<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="bg-dark-transparent p-0">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
/*******************
       General
********************/



body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: Whitney, Bahnschrift, Helvetica, sans-serif;
  color: white;
  background-image: url("https://i.imgur.com/4oFKBnF.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

/******************
    Main content
*******************/

main {
  display: flex;
  flex-direction: column;
}

/*****************
      Footer
******************/

footer img {
  filter: grayscale(1);
  transition: all 300ms ease-in-out;
  max-width: 70px;
  max-height: 70px;
  width: 100%;
}

footer img:hover {
  filter: grayscale(0);
}

footer ul {
  list-style: none;
  margin: 10px;
  padding: 0;
  width: 100%;
  display: flex;
}

footer li {
  display: inline;
  margin: 10px;
}
</style>
