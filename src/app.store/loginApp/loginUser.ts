import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'app.modules/api'
import { API_LOGIN, API_LOGIN_CHECK, API_LOGOUT } from 'app.modules/keyFactory'
import { AxiosError } from 'axios'

interface user {
  name: string
  id: string
  password: string
}

export const loginUser = createAsyncThunk('LOGIN', async (data: user) => {
  try {
    const res = await api.POST({
      url: API_LOGIN,
      data,
    })
    return res.data
  } catch (error) {
    throw error
  }
})

export const logoutUser = createAsyncThunk('LOGOUT', async () => {
  try {
    const res = await api.POST({ url: API_LOGOUT })
    return res.data
  } catch (error) {
    throw error
  }
})

export const requestUser = createAsyncThunk('AUTH_CHECK', async () => {
  try {
    const res = await api.GET(API_LOGIN_CHECK)
    return res.data
  } catch (error) {
    const responseError = error as AxiosError
    throw responseError.response?.data
  }
})
