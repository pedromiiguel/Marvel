import axios from 'axios'

export const BASE_URL = 'http://gateway.marvel.com/v1/public'

export const api = axios.create({
  baseURL: BASE_URL
})
