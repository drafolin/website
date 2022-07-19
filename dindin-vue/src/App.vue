<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

</script>

<template>
  <div class="bg-dragon-bg bg-fixed bg-cover bg-center dark:text-white font-sans">
    <TheHeader />
    <div class="pt-24 bg-white/60 dark:bg-dark-transparent p-0">
      <RouterView />
      <TheFooter />
    </div>
  </div>
</template>