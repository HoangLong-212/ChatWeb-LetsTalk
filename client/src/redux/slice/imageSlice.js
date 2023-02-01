import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: "",
  success: false,
  isLoading: false,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    getImageRequest: (state) => {
      state.isLoading = true;
      state.isLoadOldData = false;
    },
    getImageSuccess: (state, action) => {
      console.log("action.payload", action.payload);
      state.data = action.payload.image.imageUrl;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getImageFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoadOldData = false;
    },
  },
});
export const imageState$ = (state) => state.image;
export const imageActions = imageSlice.actions;
export default imageSlice.reducer;
