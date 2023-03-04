<script setup lang="ts">
import appHeader from '../../presentation/components/shared/Header.vue'

import { useMainStore } from '../../resources/store/main.store'

const mainStore = useMainStore()
console.log(mainStore.$state.message)
</script>
<template>
  <div>
    <appHeader />
    <!-- TODO: create message handler component -->
    <p class="message-handler">{{ mainStore.message.content }}</p>
    <router-view />
  </div>
</template>
