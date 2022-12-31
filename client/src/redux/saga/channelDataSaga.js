import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import { channelDataActions } from "../slice/channelDataSlice";

function* fetchOneChannelSaga(action) {
  try {
    const channel = yield call(api.getOneChannelById, action.payload);
    yield put(channelDataActions.getChannelDataSuccess(channel.data));
  } catch (err) {
    yield put(channelDataActions.getChannelDataFailure(err));
  }
}

export default function* channelDataSaga() {
  yield takeLatest(
    channelDataActions.getChannelDataRequest.type,
    fetchOneChannelSaga
  );
}
