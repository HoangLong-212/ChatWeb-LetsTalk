import * as api from "../../api/index";
import { takeLatest, call, put, fork } from "redux-saga/effects";
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
} from "../slice/userSlice";
import { avatarServerActions } from "../slice/avatarServerSlice";

function* fetchUserSaga(action) {
  try {
    const user = yield call(api.getUser, action.payload);
    yield put(getUserSuccess(user.data));
    // console.log("asdasd", user.data.user.guilds);
    // yield fork(
    //   avatarServerActions.getAvatarServerRequest,
    //   user.data.data.guilds.id
    // );
  } catch (err) {
    yield put(getUserFailure(err));
  }
}

export default function* userSaga() {
  yield takeLatest(getUserRequest.type, fetchUserSaga);
}
