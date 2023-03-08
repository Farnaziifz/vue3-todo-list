<script lang="ts" setup>
import { LoginForm } from '../../../core/types/auth.type'
import { ref, Ref, defineAsyncComponent } from 'vue'
import { submitLoginHandler } from '../../../logics/specific/auth.handler'
import { useRouter } from 'vue-router'

const router = useRouter()

const baseInput = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseInput.vue')
)
const baseButton = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseButton.vue')
)

const loginData: Ref<LoginForm> = ref({
  email: '',
  password: '',
})

const updateUsername = (val: string) => {
  loginData.value.email = val
}

const updatePassword = (val: string) => {
  loginData.value.password = val
}

const onSubmitLogin = async () => {
  await submitLoginHandler(loginData.value)
  router.push({ name: 'todo-list' })
}
</script>
<template>
  <div class="container">
    <div
      class="login-container flex justify-center items-center h-full flex-col"
    >
      <h3 class="mb-4">Login Form</h3>
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
        <baseButton title="Login" @click="onSubmitLogin" />
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
