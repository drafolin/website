<script setup lang="ts">
useHead({
  title: "dindin|nibnib",
  link: [
    { rel: "icon", href: "/favicon.ico" }
  ]
})
</script>

<template>
  <div class="font-sans bg-fixed bg-center bg-cover bg-dragon-bg dark:text-white">
    <TheHeader />
    <div class="p-0 pt-24 bg-white/60 dark:bg-slate-800/85">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>