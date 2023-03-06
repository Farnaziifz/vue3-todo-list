import { authApi } from '../../resources/api/auth'
import { LoginForm, RegisterForm } from '../../core/types/auth.type'

const api = authApi()

export const submitLoginHandler = async (loginData: LoginForm) => {
  const res = await api.submitLogin(loginData)
}

export const submitRegisterHandler = async (registerData: RegisterForm) => {
  const res = await api.submitRegister(registerData)
}
