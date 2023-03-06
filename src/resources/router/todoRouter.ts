const TodoList = import('../../presentation/pages/Todo/List.vue')

export const todoRouter = {
  path: 'todo',
  name: 'todo',
  redirect: 'todo/list',
  children: [{ path: 'list', name: 'todo-list', component: TodoList }],
}
