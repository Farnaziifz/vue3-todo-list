<script lang="ts" setup>
import baseInput from '/src/presentation/components/shared/baseInput.vue'
</script>
<template>
  <div class="container">
    <div class="login-container flex justify-center items-center h-full">
      <div class="login-form p-8 rounded-2xl border">
        <baseInput />
      </div>
    </div>
  </div>
</template>
<style scoped>
.login-container {
  height: calc(100vh - 64px);
}

.login-form {
  border-color: var(--primary-color);
}
</style>
