import { todoApi } from '../../resources/api/todo'

const api = todoApi()

export const getTodoListHandler = async () => {
  const res = await api.getTodoList()
  if (res) return res
}

// add another api call handler for pagination becuase the model does not return total page, this not suitable for projects in real just for create pagination component

export const getTodoWithPaginationHandler = async (page: string | number) => {
  const res = await api.getTodoWithPagination(page)
  if (res) return res
}
