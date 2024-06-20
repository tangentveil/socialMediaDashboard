import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from './features/userProfileSlice';
import metricsReducer from './features/metricsSlice';

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    metrics: metricsReducer,
  },
});
