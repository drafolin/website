<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheCircles from './components/TheCircles.vue';
</script>

<template>
  <TheHeader />
  <TheCircles />

  <RouterView />

  <TheFooter />
</template>

<style lang="scss" scoped></style>
