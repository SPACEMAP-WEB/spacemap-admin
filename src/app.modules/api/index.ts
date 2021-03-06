import axios, { AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { notification } from 'antd'
import { API_GET_ACCESSTOKEN, API_LOGIN, API_LOGIN_CHECK } from 'app.modules/keyFactory'

axios.defaults.withCredentials = true

type ApiMethods = 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'POST'

type ApiData = {
  headers?: AxiosRequestHeaders
  url: string
  method?: ApiMethods
}

class API {
  // eslint-disable-next-line prettier/prettier
  private readonly requestApi: AxiosInstance

  constructor() {
    this.requestApi = axios.create({ baseURL: process.env.SPACEMAP_ADMIN_API_URI })
  }

  async Fetch<T>({ headers = {}, url = '', method, data = null }: ApiData & { data?: T | null }) {
    return await this.requestApi({
      method,
      data,
      url,
      headers: {
        ...headers,
      },
    })
  }

  async CALL<T, D>({ headers = {}, url = '', method, data = null }: ApiData & { data?: T | null }) {
    const config = { headers, url, method, data }
    try {
      const response: AxiosResponse<D> = await this.Fetch<T>(config)

      return response
    } catch (error) {
      const axiosError = error as AxiosError
      const response = axiosError.response?.data

      if (
        url !== API_LOGIN &&
        url !== API_LOGIN_CHECK &&
        response?.message !== 'TokenExpiredError'
      ) {
        notification.error({
          message: 'error',
          description: response?.message.length > 0 ? response?.message : axiosError.toString(),
        })
      }

      if (response?.status === 401 && response?.message === 'TokenExpiredError') {
        await this.Fetch({ ...config, method: 'GET', url: API_GET_ACCESSTOKEN })
        const response = await this.Fetch({ headers, url, method, data })
        return response
      }
      throw error
    }
  }

  GET<T, D>(urlData: string) {
    console.log(urlData)
    return this.CALL<T, D>({
      method: 'GET',
      url: urlData,
    })
  }

  POST<T, D>(params: ApiData & { data?: T | null }) {
    return this.CALL<T, D>({
      ...params,
      method: 'POST',
      url: params.url,
    })
  }

  PUT<T, D>(params: ApiData & { data?: T | null }) {
    return this.CALL<T, D>({
      ...params,
      method: 'PUT',
      url: params.url,
    })
  }

  DELETE<T, D>(params: ApiData & { data?: T | null }) {
    return this.CALL<T, D>({
      ...params,
      method: 'DELETE',
      url: params.url,
    })
  }
}

export default new API()
