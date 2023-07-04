import axios from 'axios'

export const BASE_URL = 'https://gateway.marvel.com/v1/public'

export const api = axios.create({
  baseURL: BASE_URL
})
