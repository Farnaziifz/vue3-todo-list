import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 5000,
  headers: {},
})
