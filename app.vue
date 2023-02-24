<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  titleTemplate: '%s - Kaana: The Company Creating a Better World Through Connections and Technology',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Kaana: The Company Creating a Better World Through Connections and Technology',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-neutral text-neutral-content">
    <Header />
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>