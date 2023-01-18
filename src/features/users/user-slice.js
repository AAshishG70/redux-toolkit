import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dude Lebowski" },
  { id: "2", name: "Neil Young" },
  { id: "3", name: "Dave Gray" },
  { id: "4", name: "David Gray" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;