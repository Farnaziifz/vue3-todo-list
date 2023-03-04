<script lang="ts" setup>
import { changeTheme } from '../../../logics/shared/theming'

import { ref } from 'vue'

const activeTheme = ref('lightTheme')

const changeThemeHandler = (theme: string) => {
  activeTheme.value = theme
  changeTheme(theme)
}
</script>

<template>
  <div class="app-header w-full h-16 flex items-center justify-between">
    <div class="container flex items-center justify-between">
      <div
        class="switch-theme flex w-20 rounded-3xl items-center justify-between px-2 py-1"
      >
        <div
          @click="changeThemeHandler('darkTheme')"
          class="w-6 h-6 rounded-full flex items-center justify-center p-1 cursor-pointer"
          :class="{ 'active-theme': activeTheme === 'darkTheme' }"
        >
          🌙
        </div>
        <div
          @click="changeThemeHandler('lightTheme')"
          class="w-6 h-6 rounded-full flex items-center justify-center p-1 cursor-pointer"
          :class="{ 'active-theme': activeTheme === 'lightTheme' }"
        >
          ☀️
        </div>
      </div>
      <p class="logo font-bold text-white">(TODO) list app</p>
    </div>
  </div>
</template>

<style scoped>
.app-header {
  background-color: var(--primary-color);
}
.switch-theme {
  background-color: var(--background-color);
}
.active-theme {
  background-color: var(--primary-color);
}
</style>
