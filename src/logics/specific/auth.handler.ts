import { authApi } from '../../resources/api/auth'
import { LoginForm, RegisterForm } from '../../core/types/auth.type'
const api = authApi()

export const submitLoginHandler = async (loginData: LoginForm) => {
  const res = await api.submitLogin(loginData)
  // TODO: fix lint error
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (res?.data?.access_token)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.localStorage.setItem('token', 'Bearer ' + res?.data?.access_token)
}

export const submitRegisterHandler = async (registerData: RegisterForm) => {
  const res = await api.submitRegister(registerData)
}
