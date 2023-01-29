import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    },
    deleteUsers(state, action) {
      const index = state.findIndex(task => task.id !== action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addUsers, deleteUsers } = userSlice.actions;
export const usersReducer = userSlice.reducer;
