<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { useMainStore } from '../../resources/store/main.store'

const appHeader = defineAsyncComponent(
  () => import('../../presentation/components/shared/Header.vue')
)

const mainStore = useMainStore()
</script>
<template>
  <div>
    <appHeader />
    <!-- TODO: create message handler component -->
    <p class="message-handler">{{ mainStore.message.content }}</p>
    <router-view />
  </div>
</template>
