<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="bg-dragon-bg bg-fixed bg-cover bg-center dark:text-white font-sans">
    <div class="bg-white/60 dark:bg-dark-transparent p-0">
      <TheHeader />
      <RouterView />
      <TheFooter />
    </div>
  </div>
</template>

<style>
footer img {
  max-width: 70px;
  max-height: 70px;
  width: 100%;
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
