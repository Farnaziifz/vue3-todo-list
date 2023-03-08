import axios from 'axios'

console.log(localStorage.getItem('token'))
const token = localStorage.getItem('token')
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 5000,
  // headers: {
  //   Authorization: token,
  // },
})
