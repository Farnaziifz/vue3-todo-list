<script lang="ts" setup>
import baseInput from '/src/presentation/components/shared/baseInput.vue'
import { ref } from 'vue'

const username = ref()
const password = ref()

const updateUsername = (val: string | number) => {
  username.value = val
}

const updatePassword = (val: string | number) => {
  password.value = val
}
</script>
<template>
  <div class="container">
    <div class="login-container flex justify-center items-center h-full">
      <div class="login-form py-14 px-8 rounded-2xl border w-80">
        <baseInput
          @update="updateUsername"
          label="username"
          type="text"
          class="mb-10"
        />
        <baseInput
          @update="updatePassword"
          label="password"
          type="password"
          class="mb-10"
        />
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
