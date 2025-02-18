<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  link: [
    { rel: 'canonical', href: 'https://derg.ch' }
  ],
  title: 'Drafolin - Tech Derg!'
})
</script>

<template>
  <main>
    <div class="hero">
      <h1>Your local tech derg <strong>Dråfølin</strong> here!</h1>
      <p>Hi and welcome to my website! Have a look around!</p>
      <RouterLink to="/about">About me</RouterLink>
    </div>
  </main>
</template>
