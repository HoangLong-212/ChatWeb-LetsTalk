import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  getChannelsFailure,
  getChannelsRequest,
  getChannelsSuccess,
} from "../slice/channelsSlice";

function* fetchChannelsSaga(action) {
  try {
    const channels = yield call(api.getChannelsByGuildId, action.payload);
    yield put(getChannelsSuccess(channels.data));
  } catch (err) {
    yield put(getChannelsFailure(err));
  }
}

export default function* channelsSaga() {
  yield takeLatest(getChannelsRequest.type, fetchChannelsSaga);
}
