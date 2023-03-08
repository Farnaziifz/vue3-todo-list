<script lang="ts" setup>
import { RegisterForm } from '../../../core/types/auth.type'
import { ref, Ref, defineAsyncComponent } from 'vue'
import { submitRegisterHandler } from '../../../logics/specific/auth.handler'

const baseInput = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseInput.vue')
)
const baseButton = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseButton.vue')
)

const registerData: Ref<RegisterForm> = ref({
  email: '',
  password: '',
})

const updateUsername = (val: string) => {
  registerData.value.email = val
}

const updatePassword = (val: string) => {
  registerData.value.password = val
}

const onSubmitRegister = async () => {
  return await submitRegisterHandler(registerData.value)
}
</script>
<template>
  <div class="container">
    <div
      class="register-container flex justify-center items-center h-full flex-col"
    >
      <h3 class="mb-4">Resgiter Form</h3>
      <div class="register-form py-14 px-8 rounded-2xl border w-80">
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
        <baseButton
          title="Register"
          @click="onSubmitRegister"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.register-container {
  height: calc(100vh - 64px);
}

.register-form {
  border-color: var(--primary-color);
}
</style>
