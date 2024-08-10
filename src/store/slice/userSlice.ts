import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  url: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state) {},
    removeUser(state, action) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    addUsers(state, action) {
      state.url = action.payload;
    },
  },
});

export const { setUser, removeUser, addUsers } = userSlice.actions;

export default userSlice.reducer;
