import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../slice/userLoginSlice";

function* fetchLoginSaga(action) {
  try {
    const login = yield call(api.login, action.payload);
    yield put(loginSuccess(login.data));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export default function* loginSaga() {
  yield takeLatest(loginRequest.type, fetchLoginSaga);
}
