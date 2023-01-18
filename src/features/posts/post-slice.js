import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "initial test title" },
  { id: 2, title: "second title" },
  { id: 3, title: "Third title" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // change state
    // reducer fn 1
    updateTitle: (state, action) => {
      state.push(action.payload);
    },
    // reducer fn 2
    // reducer fn 3
  },
});

export const { updateTitle } = postSlice.actions;

export default postSlice.reducer;