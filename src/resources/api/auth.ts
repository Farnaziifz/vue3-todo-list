import { api } from './index'
import { makeARequest } from '../../logics/shared/apiResponse.handler'
import { LoginForm, RegisterForm } from '../../core/types/auth.type'

const controller = 'auth'

const submitLogin = async (loginData: LoginForm) => {
  return await makeARequest<LoginForm>(
    api.post,
    `${controller}/login`,
    loginData
  )
}

const submitRegister = async (registerForm: RegisterForm) => {
  return await makeARequest<RegisterForm>(
    api.post,
    `${controller}/register`,
    registerForm
  )
}

export const authApi = () => {
  return {
    submitLogin,
    submitRegister,
  }
}
