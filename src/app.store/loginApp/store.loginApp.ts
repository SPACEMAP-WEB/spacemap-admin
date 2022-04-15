import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logoutUser, requestUser } from './loginUser'

type UserDataType = {
  login: boolean
  isLoading: boolean
  error: boolean
}

const initialState: UserDataType = {
  login: false,
  error: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      return { ...state, login: true, isLoading: true, error: false }
    })
    builder.addCase(loginUser.rejected, (state) => {
      return { ...state, login: false, isLoading: true, error: true }
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      return { ...state, login: false, isLoading: true, error: false }
    })
    builder.addCase(logoutUser.rejected, (state) => {
      return { ...state, login: false, isLoading: true, error: true }
    })
    builder.addCase(requestUser.fulfilled, (state) => {
      return { ...state, login: true, isLoading: true, error: false }
    })
    builder.addCase(requestUser.rejected, (state, action) => {
      const {
        error: { message },
      } = action
      return {
        ...state,
        login: message == 'TokenExpiredError' ? true : false,
        isLoading: true,
        error: false,
      }
    })
  },
})

export default userSlice.reducer
