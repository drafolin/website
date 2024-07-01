<script setup lang="ts">
const emit = defineEmits<{
  setMenu: [newVal: boolean]

}>()  
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/" @click="emit('setMenu', false)">
        Home
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/about" @click="emit('setMenu', false)">
        About
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "@/assets/consts";

li {
  margin: 0 1em;

  a {
    font-size: 1.2em;
    font-weight: 600;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: black;

      @media (prefers-color-scheme: dark) {
        color: consts.$dark-text;
      }
    }
  }
}
</style>
