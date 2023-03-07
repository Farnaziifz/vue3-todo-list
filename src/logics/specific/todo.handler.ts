import { todoApi } from '../../resources/api/todo'
import { todoList } from '../../core/types/todo.type'

const api = todoApi()

export const getTodoListHandler = async () => {
  const res = await api.getTodoList()
  if (res) return res
}
