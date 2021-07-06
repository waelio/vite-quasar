<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-h2">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <div>
      <q-btn
        class="q-ma-md text-sm q-mt-sm"
        :label="t('button.back')"
        color="primary"
        @click="router.back()"
      />
    </div>
  </div>
</template>
