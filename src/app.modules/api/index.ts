import axios, { AxiosError, AxiosInstance } from 'axios'
import { notification } from 'antd'
import { API_GET_ACCESSTOKEN, API_GET_TOKENS, API_LOGIN } from 'app.modules/keyFactory'

axios.defaults.withCredentials = true

type ApiData = {
  headers?: object
  url: string
  method: 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'POST'
  data?: object | null
}

class API {
  // eslint-disable-next-line prettier/prettier
  private readonly requestApi: AxiosInstance

  constructor() {
    this.requestApi = axios.create({ baseURL: process.env.SPACEMAP_ADMIN_API_URI })
  }

  async Fetch({ headers = {}, url = '', method, data = null }: ApiData) {
    return await this.requestApi({
      method,
      data,
      url,
      headers: {
        ...headers,
      },
    })
  }

  async CALL({ headers = {}, url = '', method, data = null }: ApiData) {
    const config = { headers, url, method, data }
    try {
      const response = this.Fetch(config)

      return response
    } catch (error) {
      const axiosError = error as AxiosError
      const { message, status } = axiosError.response?.data

      if (url !== API_LOGIN && url !== API_GET_TOKENS && message !== 'TokenExpiredError') {
        notification.error({
          message: 'error',
          description: message.length > 0 ? message : axiosError.toString(),
        })
      }

      if (status === 401 && message === 'TokenExpiredError') {
        this.Fetch({ ...config, method: 'GET', url: API_GET_ACCESSTOKEN })

        const response = this.Fetch({ headers, url, method, data })
        return response
      }
      throw error
    }
  }

  GET(urlData: string) {
    return this.CALL({
      method: 'GET',
      url: urlData,
    })
  }

  POST(params: ApiData) {
    return this.CALL({
      ...params,
      method: 'POST',
      url: params.url,
    })
  }

  PUT(params: ApiData) {
    return this.CALL({
      ...params,
      method: 'PUT',
      url: params.url,
    })
  }

  DELETE(params: ApiData) {
    return this.CALL({
      ...params,
      method: 'DELETE',
      url: params.url,
    })
  }
}

export default new API()
