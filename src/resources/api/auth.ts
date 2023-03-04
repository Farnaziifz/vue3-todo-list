import { api } from './index'
import { makeARequest } from '../../logics/shared/apiResponse.handler'
import { LoginForm } from '../../core/types/auth.type'

const controller = 'auth'

const submitLogin = async (loginData: LoginForm) => {
  await makeARequest<LoginForm>(api.post, `${controller}/login`, loginData)
}

export const authApi = () => {
  return {
    submitLogin,
  }
}
