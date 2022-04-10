import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface user {
  name: string;
  id: string;
  password: string;
}

export const loginUser = createAsyncThunk('LOGIN', async () => {
  const session = await axios.get('/api/sign/session');
  return session.data;
});
