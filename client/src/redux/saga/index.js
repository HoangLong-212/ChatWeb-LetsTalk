import { all } from "redux-saga/effects";
import AvatarServerSaga from "./avatarServerSlice";
import channelsSaga from "./channelsSaga";
import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import userSaga from "./userSaga";

function* mySaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    userSaga(),
    channelsSaga(),
    AvatarServerSaga(),
  ]);
}

export default mySaga;
