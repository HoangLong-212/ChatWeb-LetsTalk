import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import { avatarServerActions } from "../slice/avatarServerSlice";

function* fetchAvatarServerSaga(action) {
  try {
    const avatar = yield call(api.getImage, action.payload);
    yield put(avatarServerActions.getAvatarServerSuccess(avatar.data));
  } catch (err) {
    yield put(avatarServerActions.getChannelsRequest(err));
  }
}

export default function* AvatarServerSaga() {
  yield takeLatest(
    avatarServerActions.getAvatarServerRequest.type,
    fetchAvatarServerSaga
  );
}
