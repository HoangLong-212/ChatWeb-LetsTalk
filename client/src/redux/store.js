import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./saga";
import userLoginSlice from "./slice/userLoginSlice";
import userRegisterSlice from "./slice/userRegisterSlice";
import userSlice from "./slice/userSlice";
import channelsSlice from "./slice/channelsSlice";
import guildsSlice from "./slice/guildsSlice";
import createGuildModalSlice from "./slice/createGuildModalSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    user: userSlice,
    channels: channelsSlice,
    guilds: guildsSlice,
    createGuildModal: createGuildModalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
