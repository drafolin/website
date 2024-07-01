<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import MenuLinks from './MenuLinks.vue';
import Pfp from './ThePfp.vue';
import { useWindowScroll } from '@vueuse/core';

const menu = ref(false);

const scroll = useWindowScroll()
const scrolled = computed(() => scroll.y.value > 10);
</script>

<template>
  <header :class="scrolled ? 'scrolled' : ''">
    <div class="header-wrapper">
      <nav>
        <div class="mobile-spacer"></div>
        <RouterLink class="logo" to="/">
          <Pfp :size="64" />
          <span class="ml-4">Dråfølin</span>
        </RouterLink>

        <MenuLinks @setMenu="(v: boolean) => menu = v" />

        <Teleport to="#app">
          <div :class="`wrap-menu ${menu ? ' active' : ''}`">
            <button @click="menu = !menu" aria-label="Menu" className="close">
              <svg version="1.1" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <line :x1="2" :y1="2" :x2="28" y2="28" strokeWidth="2" />
                <line :x1="28" :y1="2" :x2="2" y2="28" strokeWidth="2" />
              </svg>
            </button>
            <MenuLinks @setMenu="(v: boolean) => menu = v" />
          </div>
        </Teleport>

        <button @click="menu = true" aria-label="Menu" class="hamburger">
          <svg version="1.1" width="30" height="18" xmlns="http://www.w3.org/2000/svg">
            <line :x1="5" :y1="1" :x2="25" :y2="1" :strokeWidth="2" />
            <line :x1="5" :y1="9" :x2="25" :y2="9" :strokeWidth="2" />
            <line :x1="5" :y1="17" :x2="25" :y2="17" :strokeWidth="2" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/consts";

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;

  &.scrolled {
    box-shadow: 0 0.5rem 1rem opacify(consts.$accent, 0.8);
    height: 5rem;
    background-color: consts.$dark-background;

    @media (prefers-color-scheme: light) {
      background-color: consts.$light-background;
    }

    .header-wrapper nav {
      padding: 0 1rem;
    }
  }

  transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;

  div.header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    nav {
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 4rem;
      width: 100%;
      transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;

      @media (max-width: 1024px) {
        padding: 1em 1rem;
      }

      div.mobile-spacer {
        display: none;

        @media (max-width: 1024px) {
          display: block;
        }
      }

      a.logo {
        display: flex;

        img {
          max-height: 2em;
          border-radius: 100%;
          align-self: center;
          margin: 0 0.5em;

          &+span {
            align-self: center;
            font-size: 2em;
            font-weight: 800;
          }
        }
      }

      &>ul {
        display: flex;
        list-style: none;
        align-items: center;

        @media (max-width: 1024px) {
          display: none;
        }
      }

      button.hamburger {
        display: none;
        border: none;
        background: none;
        cursor: pointer;

        @media screen and (max-width: 1024px) {
          display: block;
        }

        line {
          stroke: black;

          @media screen and (prefers-color-scheme: dark) {
            stroke: white;
          }
        }
      }
    }
  }
}
</style>
