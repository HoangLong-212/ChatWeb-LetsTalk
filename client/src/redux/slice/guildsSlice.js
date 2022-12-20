import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listGuild: [],
  message: "",
  success: false,
  isLoading: false,
};

export const guildsSlice = createSlice({
  name: "guilds",
  initialState,
  reducers: {
    getGuildsRequest: (state) => {
      state.isLoading = true;
    },
    getGuildsSuccess: (state, action) => {
      state.listGuild = action.payload.listGuild;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getGuildsFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const guildsState$ = (state) => state.guilds;
export const guildsActions = guildsSlice.actions;
export default guildsSlice.reducer;
