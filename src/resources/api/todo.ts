import { api } from './index'
import { makeARequest } from '../../logics/shared/apiResponse.handler'
import { todoList, todoItem } from '../../core/types/todo.type'

const controller = 'todos'

const getTodoList = async () => {
  return await makeARequest<todoList>(api.get, controller)
}

export const todoApi = () => {
  return {
    getTodoList,
  }
}
