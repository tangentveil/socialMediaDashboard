import { createSlice } from "@reduxjs/toolkit";
import avatar from "../assets/avatar.svg";
import PostImage from "../assets/postImage.jpg";

const initialState = {
  name: "John Doe",
  bio: "Enthusiastic social media ninja. Coffee lover. Analyst.",
  post: [
    {
      title: "Post Title",
      datePosted: "June 20, 2024",
      content: "This is a sample post content. It could be an image or text.",
      likes: 123,
      comments: 45,
      media: PostImage,
    },
  ],
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
