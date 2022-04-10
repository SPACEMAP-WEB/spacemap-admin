import { createSlice } from '@reduxjs/toolkit';

interface menuData {
  menuOpen: boolean;
}

const menuSlice = createSlice({
  name: 'menuOpen',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    setMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { setMenuOpen } = menuSlice.actions;

export default menuSlice.reducer;
