const Login = () => import('/src/presentation/pages/Auth/Login.vue')
const Register = () => import('/src/presentation/pages/Auth/Register.vue')

export const loginRouter = {
  path: 'login',
  name: 'login',
  component: Login,
}

export const registerRouter = {
  path: 'register',
  name: 'register',
  component: Register,
}
