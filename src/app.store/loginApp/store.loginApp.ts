import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginUser';

interface userData {
  login: boolean;
  isLoading: true;
}

const initialState: userData = {
  login: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      return { ...state, ...action.payload, isLoading: false };
    });
  },
});

export default userSlice.reducer;
