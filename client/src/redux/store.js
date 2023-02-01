import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./saga";
import userLoginSlice from "./slice/userLoginSlice";
import userRegisterSlice from "./slice/userRegisterSlice";
import userSlice from "./slice/userSlice";
import channelsSlice from "./slice/channelsSlice";
import guildsSlice from "./slice/guildsSlice";
import createGuildModalSlice from "./slice/createGuildModalSlice";
import channelDataSlice from "./slice/channelDataSlice";
import createTextChannelModalSlice from "./slice/createTextChannelModalSlice";
import messageSlice from "./slice/messageSlice";
import peerSlice from "./slice/peerSlice";
import imageSlice from "./slice/imageSlice";
import InviteMemberModal from "./slice/InviteMemberModal";
import memberServerSlice from "./slice/memberServerSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    user: userSlice,
    channels: channelsSlice,
    guilds: guildsSlice,
    createGuildModal: createGuildModalSlice,
    createTextChannelModal: createTextChannelModalSlice,
    InviteMemberModal: InviteMemberModal,
    channelData: channelDataSlice,
    message: messageSlice,
    peer: peerSlice,
    image: imageSlice,
    memberServer: memberServerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
