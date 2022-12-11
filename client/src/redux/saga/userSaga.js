import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
} from "../slice/userSlice";

function* fetchUserSaga(action) {
  try {
    const user = yield call(api.getUser, action.payload);
    yield put(getUserSuccess(user.data));
  } catch (err) {
    yield put(getUserFailure(err));
  }
}

export default function* userSaga() {
  yield takeLatest(getUserRequest.type, fetchUserSaga);
}
