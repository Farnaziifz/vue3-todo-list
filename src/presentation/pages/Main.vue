<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const appHeader = defineAsyncComponent(
  () => import('../../presentation/components/shared/Header.vue')
)
</script>

<template>
  <div class="relative h-100">
    <appHeader />
    <router-view />
  </div>
</template>
