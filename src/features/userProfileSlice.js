import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  bio: "Enthusiastic social media ninja. Coffee lover. Analyst.",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
});

export const {} = userProfileSlice.actions;

export default userProfileSlice.reducer;
