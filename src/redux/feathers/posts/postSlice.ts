import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPost: (state, action) => {
      state.posts = action.payload;
    },
    logout: (state) => {},
  },
});

// export const { getAllPost, logout } = postSlice.actions;
export default postSlice.reducer;
