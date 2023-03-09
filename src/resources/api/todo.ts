import { api } from './index'
import _ from 'lodash'
const controller = 'todos'

const getTodoList = async () => {
  try {
    const res = await api.get(`${controller}`, {
      headers: { Authorization: _.toString(localStorage.getItem('token')) },
    })
    return res.data
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return e.response.data
  }
}

const getTodoWithPagination = async (page: string | number) => {
  try {
    const res = await api.get(`${controller}?_page=${page}&_limit=5`, {
      headers: { Authorization: _.toString(localStorage.getItem('token')) },
    })
    return res.data
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return e.response.data
  }
}

export const todoApi = () => {
  return {
    getTodoList,
    getTodoWithPagination,
  }
}
