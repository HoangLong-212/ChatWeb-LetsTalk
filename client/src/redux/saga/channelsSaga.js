import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import { channelActions } from "../slice/channelsSlice";

function* fetchChannelsSaga(action) {
  try {
    const channels = yield call(api.getChannelsByGuildId, action.payload);
    yield put(channelActions.getChannelsSuccess(channels.data));
  } catch (err) {
    yield put(channelActions.getChannelsFailure(err));
  }
}

function* fetchCreateChanelSaga(action) {
  try {
    // console.log("listGuild");
    const newChannel = yield call(api.createChannel, action.payload);
    console.log("newchannel", newChannel);
    yield put(channelActions.createChannelsSuccess(newChannel.data));
  } catch (err) {
    yield put(channelActions.createChannelsFailure(err));
  }
}

export default function* channelsSaga() {
  yield takeLatest(channelActions.getChannelsRequest.type, fetchChannelsSaga);
  yield takeLatest(
    channelActions.createChannelsRequest.type,
    fetchCreateChanelSaga
  );
}
