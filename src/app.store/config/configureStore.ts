import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../loginApp/store.loginApp';
import menuReducer from '../menuApp/store.menuApp';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
