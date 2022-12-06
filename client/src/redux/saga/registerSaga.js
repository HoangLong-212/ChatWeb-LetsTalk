import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../slice/userRegisterSlice";

function* fetchRegisterSaga(action) {
  try {
    const register = yield call(api.register, action.payload);
    yield put(registerSuccess(register.data));
  } catch (err) {
    yield put(registerFailure(err));
  }
}

export default function* registerSaga() {
  yield takeLatest(registerRequest.type, fetchRegisterSaga);
}
