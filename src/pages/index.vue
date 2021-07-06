<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-h2">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/waelio/vite-quasar" target="_blank">
        vite-quasar
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="q-py-4" />

    <q-input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :label="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      class="q-px-md q-py-md q-mx-auto"
      style="width:250px;"
      outline="none active:none"
      @keydown.enter="go"
    />

    <div>
      <q-btn
        dense
        :color=" name ? 'green' : 'warning'"
        :disabled="!name"
        :label="t('button.go')"
        @click="go"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
