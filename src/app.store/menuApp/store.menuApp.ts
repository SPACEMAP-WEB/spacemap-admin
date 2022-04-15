import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menuOpen',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    setMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen
    },
  },
})

export const { setMenuOpen } = menuSlice.actions

export default menuSlice.reducer
