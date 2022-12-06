import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: "",
  success: false,
  isLoading: false,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload.user;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
      if (action.payload.success) {
        localStorage.setItem("Auth_token", action.payload.user.token);
      }
    },
    loginFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const userLoginState$ = (state) => state.userLogin;
export const { loginRequest, loginSuccess, loginFailure } =
  userLoginSlice.actions;
export default userLoginSlice.reducer;
