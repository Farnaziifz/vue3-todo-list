import { authApi } from '../../resources/api/auth'
import { LoginForm } from '../../core/types/auth.type'

const api = authApi()

export const submitLoginHandler = async (loginData: LoginForm) => {
  const res = await api.submitLogin(loginData)
}
