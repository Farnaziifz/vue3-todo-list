const Login = () => import('/src/presentation/pages/Auth/Login.vue')
const Register = () => import('/src/presentation/pages/Auth/Register.vue')

export const authRouter = {
  path: 'auth',
  name: 'auth',
  redirect: 'auth/login',
  children: [
    { path: 'login', name: 'login', component: Login },
    { path: 'register', name: 'register', component: Register },
  ],
}
