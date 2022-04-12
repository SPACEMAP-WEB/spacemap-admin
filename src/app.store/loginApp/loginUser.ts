import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'app.modules/api';
import { API_LOGIN, API_LOGOUT } from 'app.modules/keyFactory';

interface user {
  name: string;
  id: string;
  password: string;
}

export const loginUser = createAsyncThunk('LOGIN', async (data: user) => {
  const res = await api.POST({ url: API_LOGIN, data });
  return res.data;
});

export const logoutUser = createAsyncThunk('LOGOUT', async () => {
  const res = await api.POST({ url: API_LOGOUT });
  return res.data;
});
