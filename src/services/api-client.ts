import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4672857791dc49bcba847aad4fd734bf',
  },
})

export default apiClient
