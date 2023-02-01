import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";

import { messageActions } from "../slice/messageSlice";

function* fetchMessageSaga(action) {
  try {
    const message = yield call(api.getMessage, action.payload);
    yield put(messageActions.getMessageSuccess(message.data));
  } catch (err) {
    yield put(messageActions.getMessageFailure(err));
  }
}

export default function* messageSaga() {
  yield takeLatest(messageActions.getMessageRequest.type, fetchMessageSaga);
}
