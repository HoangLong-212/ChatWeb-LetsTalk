import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./saga";
import userLoginSlice from "./slice/userLoginSlice";
import userRegisterSlice from "./slice/userRegisterSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
