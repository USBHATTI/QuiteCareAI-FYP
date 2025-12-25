import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,           // Will store user data (e.g., name, email)
  token: null,          // Will store the JWT token
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action 1: Login
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    // Action 2: Logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;