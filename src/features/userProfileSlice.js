import { createSlice } from "@reduxjs/toolkit";
import avatar from "../assets/avatar.svg";

const initialState = {
  name: "John Doe",
  bio: "Enthusiastic social media ninja. Coffee lover. Analyst.",
  users: [
    {
      id: 1,
      name: "John Doe",
      avatar: avatar,
      followed: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: avatar,
      followed: true,
    },
    {
      id: 3,
      name: "Jane Smith",
      avatar: avatar,
      followed: true,
    },
    {
      id: 4,
      name: "Jane Smith",
      avatar: avatar,
      followed: true,
    },
    {
      id: 5,
      name: "Jane Smith",
      avatar: avatar,
      followed: false,
    },
  ],
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
});

export const {} = userProfileSlice.actions;

export default userProfileSlice.reducer;
