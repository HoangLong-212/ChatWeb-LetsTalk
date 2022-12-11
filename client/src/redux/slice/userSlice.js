import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: "",
  success: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserRequest: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.data = action.payload.user;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getUserFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const userState$ = (state) => state.user;
export const { getUserRequest, getUserSuccess, getUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
