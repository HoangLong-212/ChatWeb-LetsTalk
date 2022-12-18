import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: "",
  success: false,
  isLoading: false,
};

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.data = action.payload.newUser;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      console.log("loginFailure", action.payload);
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const userRegisterState$ = (state) => state.userRegister;
export const { registerRequest, registerSuccess, registerFailure } =
  userRegisterSlice.actions;
export default userRegisterSlice.reducer;
