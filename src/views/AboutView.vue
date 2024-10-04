<script setup lang="ts">
import Pfp from "../components/ThePfp.vue";
import moment from "moment"
import { computed, onMounted, ref } from 'vue'

const now = ref(moment())
const birth = moment("2006-10-05 00:00")

const age = computed(() => now.value.diff(birth, "years"))

const updateNow = () => {
  now.value = moment()
}

onMounted(() => {
  setInterval(updateNow, 1000)
})
</script>

<template>
  <main>
    <div class="hero">
      <div class="header">
        <div class="col">
          <Pfp :size="256" />
        </div>
        <div class="col">
          <h1>About Me</h1>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Introduction</h2>
      <p>
        Hello! I'm Dråfølin, a {{ age }} year old computer science student from Switzerland.
        I've used to be a self-taught programmer, but I then officially started studying computer science to get a
        degree.
      </p>

      <h2>Computer science</h2>
      <p>
        I'm mostly interested in web development, but I also like to dabble in other areas of programming, like
        scripting to automate annoying and repetitive tasks.
      </p>

      <p>
        For the web development part, I have some full-stack experience. For the backend, I've worked with Node.js
        and
        Express, and for the frontend, I've worked with React and Vue.js. I've also worked with databases, like
        MySQL and Postgres.
      </p>

      <p>
        For the scripting part, I've worked with Go and Bash, and made multiple scripts, such as one for filling
        my
        work log automatically, one for installing my preferred applications on a new system, and one for killing
        useless
        heavy processes when I run resource-intensive tasks.
      </p>

      <h2>Hobbies</h2>

      <p>
        My work is also kind of a hobby for me. I love making stuff that ends up either useful or nice-looking.
      </p>

      <p>
        I also like reading, playing games and watching videos. Hey, I'm still a regular guy!
      </p>
    </div>
  </main>
</template>

<style>
body #app main {
  .hero {
    .header {
      width: 100%;
      max-width: 800px;
      padding: 3em 0;
      display: flex;
      margin-bottom: 3em;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
      }

      img {
        border-radius: 2em;
      }

      h1 {
        margin: 0;
      }

      .col {
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1em;

        @media screen and (max-width: 1024px) {
          flex-direction: row;
          align-items: center;
          padding: 1em 0;
        }

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
