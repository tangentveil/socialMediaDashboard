import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followers: 1200,
  likes: 800,
  posts: 230,
};

export const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
});

export const {} = metricsSlice.actions;

export default metricsSlice.reducer;
