import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlices'
export const store = configureStore({
  reducer: {
    auth: authReducer  // Add other reducers here as needed.
  } 
});
