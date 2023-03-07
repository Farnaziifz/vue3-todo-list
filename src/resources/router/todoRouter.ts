const TodoList = import('../../presentation/pages/Todo/List.vue')

export const todoRouter = {
  path: 'todo',
  name: 'todo',
  redirect: 'todo/list',
  children: [{ path: 'list', name: 'todo-list', component: TodoList }],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async beforeEnter(to: object, from, next) {
    const token = localStorage.getItem('token')
    if (token) next()
    else next({ name: 'login' })
  },
}
