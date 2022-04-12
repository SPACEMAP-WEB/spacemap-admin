import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './loginUser';

interface userData {
  login: boolean;
}

const initialState: userData = {
  login: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      return { ...state, login: true };
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      return { ...state, login: false };
    });
  },
});

export default userSlice.reducer;
