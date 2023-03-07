<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// import { useMainStore } from '../../resources/store/main.store'

const appHeader = defineAsyncComponent(
  () => import('../../presentation/components/shared/Header.vue')
)
// const notify = defineAsyncComponent(
//   () => import('../../presentation/components/shared/notify.vue')
// )
// const mainStore = useMainStore()
</script>

<template>
  <div>
    <appHeader />
    <!-- <notify
      :type="mainStore.message.type"
      :content="mainStore.message.content"
      v-if="mainStore.message.show"
    /> -->
    <router-view />
  </div>
</template>
