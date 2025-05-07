import { createSlice } from '@reduxjs/toolkit';

// Auth state to store username
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = authSlice.actions;
export default authSlice.reducer;