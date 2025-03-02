<script setup lang="ts">
import GitHubIcon from '@/assets/icons/github-icon.svg'
import TelegramIcon from '@/assets/icons/telegram-icon.svg'
import DiscordIcon from '@/assets/icons/discord-icon.svg'
import MailIcon from '@/assets/icons/mail-icon.svg'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <span>Find me here:</span>
    <nav class="my-4">
      <ul>
        <li>
          <a href="https://github.com/drafolin" target="_blank">
            <img width="70" :src="GitHubIcon" alt="My github page" />
          </a>
        </li>
        <li>
          <a href="https://t.me/drafolin" target="_blank">
            <img width="70" :src="TelegramIcon" alt="My telegram account" />
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/373515998000840714" target="_blank">
            <img width="70" :src="DiscordIcon" alt="My discord profile" />
          </a>
        </li>
        <li>
          <a href="mailto:derg@drafolin.ch">
            <img width="70" :src="MailIcon" alt="Email me!" />
          </a>
        </li>
      </ul>
    </nav>
    <span> This site is a work in progress! Some pages might not exist for now... </span>
    <br />
    <span>
      <a href="mailto:derg@drafolin.ch"> &copy;2021-{{ currentYear }} - Dråfølin </a>
    </span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 1em;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 2em 1em;
  }

  nav {
    ul {
      display: flex;
      padding: 0;
      list-style: none;

      @media screen and (min-width: 500px) {
        grid-template-columns: repeat(6, 1fr);
      }

      li {
        margin: 0 1.25em;

        @media screen and (max-width: 1024px) {
          margin: 0 0.5em;
        }

        img {
          max-height: 5em;
          transition: filter 0.2s ease-in-out;

          @media screen and (max-width: 1024px) {
            max-height: 3em;
            width: auto;
          }

          @media screen and (pointer: fine) {
            filter: grayscale(1);

            &:hover {
              filter: grayscale(0);
            }
          }
        }
      }
    }
  }
}
</style>
