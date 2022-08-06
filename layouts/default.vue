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
    <div class="p-0 pt-24 bg-slate-300/85 dark:bg-slate-800/85 lg:px-56">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>