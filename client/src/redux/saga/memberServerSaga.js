import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";

import { imageActions } from "../slice/imageSlice";
import { memberServerActions } from "../slice/memberServerSlice";

function* fetchmemberServerSaga(action) {
  try {
    const member = yield call(api.addMemberServer, action.payload);
    console.log("member", member);
    yield put(memberServerActions.getMemberServerSuccess(member.data));
  } catch (err) {
    yield put(memberServerActions.getMemberServerFailure(err));
  }
}

export default function* memberServerSaga() {
  yield takeLatest(
    memberServerActions.getMemberServerRequest.type,
    fetchmemberServerSaga
  );
}
