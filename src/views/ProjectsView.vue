<template>
  <main>
    <div class="hero">
      <h1>A few of my projects</h1>
    </div>

    <div class="section py-10">
      <a
        v-for="(project, i) in projects"
        :key="i"
        class="group project m-4 rounded-lg border border-drafolin/50 bg-neutral-500/5 transition-all hover:shadow-lg shadow-drafolin/50 px-4 py-6 flex flex-col md:flex-row gap-4 items-center"
        :href="project.link"
        target="_blank"
      >
        <img
          :src="project.image"
          class="sm:w-2/3 md:w-2/5 mx-auto rounded-lg sm:my-4 md:my-0 flex-shrink-[0]"
        />

        <div class="flex flex-col flex-shrink justify-around self-stretch">
          <h2 class="text-2xl font-bold mt-0">{{ project.name }}</h2>
          <p class="m-0">{{ project.description }}</p>
          <span class="mt-4 text-drafolin group-hover:underline">Checkout this project &rarr;</span>
        </div>
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import FilamentCollapseImage from '@/assets/images/filament-collapse.jpg'
import FilamentInverseShield from '@/assets/images/filament-inverse-shield.jpg'
import { useHead } from '@unhead/vue'

useHead({
  link: [
    { rel: 'canonical', href: 'https://drafolin.ch/projects' }
  ],
  title: 'Drafolin - Projects'
})

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
