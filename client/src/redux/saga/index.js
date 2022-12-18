import { all } from "redux-saga/effects";
import channelsSaga from "./channelsSaga";
import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import userSaga from "./userSaga";
import guildsSaga from "./guildsSaga";

function* mySaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    userSaga(),
    channelsSaga(),
    guildsSaga(),
  ]);
}

export default mySaga;
