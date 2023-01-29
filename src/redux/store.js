import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './Users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
