<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from 'src/logic/dark'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <q-tabs class="text-h5 q-mt-xl">
    <router-link class="q-btn no-shadow q-mx-xs" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <button class="q-btn no-shadow q-mx-xs outline-none" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a class="q-btn no-shadow q-mx-xs" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <router-link class="q-btn no-shadow q-mx-xs" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="q-btn no-shadow q-mx-xs" rel="noreferrer" href="https://github.com/waelio/vite-quasar" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </q-tabs>
</template>
