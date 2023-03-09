<script setup lang="ts">
import { useMainStore } from './resources/store/main.store'
import { defineAsyncComponent } from 'vue'

const notify = defineAsyncComponent(
  () => import('/src/presentation/components/shared/notify.vue')
)
const mainStore = useMainStore()

</script>

<template>
  <notify
    :type="mainStore.message.type"
    :content="mainStore.message.content"
    v-if="mainStore.message.show"
  />
  <router-view />
</template>

<style scoped></style>
