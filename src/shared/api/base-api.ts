import axios from 'axios'

const settings = {
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': 'http:localhost:8080',
  },
}

export const instance = axios.create({ ...settings })
