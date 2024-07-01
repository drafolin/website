<script setup lang="ts">
import MD5 from "crypto-js/md5";

const { size } = defineProps<{
  size: number
}>()

const mailHash = MD5("derg@drafolin.ch".trim().toLowerCase()).toString();
</script>

<template>
  <img :src="`https://www.gravatar.com/avatar/${mailHash}?s=${size}`" alt="My pfp." />
</template>
