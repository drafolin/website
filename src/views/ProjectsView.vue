<template>
  <main>
    <div class="hero">
      <h1>A few of my projects</h1>
    </div>

    <div class="section py-10">
      <a
        v-for="(project, i) in projects"
        :key="i"
        class="group project m-4 rounded-lg border border-drafolin/50 bg-gray-900/30 transition-all hover:shadow-lg shadow-drafolin/50 p-4 flex flex-col md:flex-row gap-4 items-center"
        :href="project.link"
        target="_blank"
      >
        <img
          :src="project.image"
          class="w-2/3 md:w-2/5 mx-auto rounded-lg my-4 md:my-0 flex-shrink-[0]"
        />

        <div class="flex flex-col flex-shrink">
          <h2 class="text-2xl font-bold">{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <span class="mt-4 text-drafolin group-hover:underline">Checkout this project &rarr;</span>
        </div>
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import FilamentCollapseImage from '@/assets/images/filament-collapse.jpg'
import FilamentInverseShield from '@/assets/images/filament-inverse-shield.jpg'

type Project = {
  link: string
  name: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    link: 'https://github.com/drafolin/filament-collapse',
    name: 'Filament Collapse Group',
    description:
      'A field group for the filament framework, that collapses the space between its inputs.',
    image: FilamentCollapseImage
  },
  {
    link: 'https://github.com/drafolin/filament-inverse-shield',
    name: 'Filament Inverse Shield',
    description:
      'A Filament Shield add-on that adds a command to dump all roles and permissions from the database into a seeder.',
    image: FilamentInverseShield
  }
]
</script>

<style scoped lang="scss">
a.project {
  color: var(--text);

  &:hover {
    text-decoration: none;
  }
}
</style>
