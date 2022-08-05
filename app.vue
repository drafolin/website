<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {watch} from "vue";

const { locale } = useI18n({ useScope: 'global' });

useHead({
  meta: [
    {name: "description", content: "dindin|nibnib's presentation website."},
    {name: "charset", content: "utf-8"}
  ],
  htmlAttrs: {
    lang: locale.value,
  }
})

watch(locale, (lang) => {
  useHead({
    htmlAttrs: {
      lang
    }
  })
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>