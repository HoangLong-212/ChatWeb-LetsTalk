import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";
import { guildsActions } from "../slice/guildsSlice";

function* fetchGuildsSaga(action) {
  try {
    // console.log("listGuild");
    const listGuild = yield call(api.getGuilds, action.payload);
    // console.log("lasdlasldl", listGuild);
    yield put(guildsActions.getGuildsSuccess(listGuild.data));
  } catch (err) {
    yield put(guildsActions.getGuildsRequest(err));
  }
}

function* fetchCreateGuildsSaga(action) {
  try {
    // console.log("listGuild");
    const newGuild = yield call(api.createGuild, action.payload);
    console.log("newGuild", newGuild);
    yield put(guildsActions.createGuildsSuccess(newGuild.data));
  } catch (err) {
    yield put(guildsActions.createGuildsFailure(err));
  }
}

export default function* guildsSaga() {
  yield takeLatest(guildsActions.getGuildsRequest.type, fetchGuildsSaga);
  yield takeLatest(
    guildsActions.createGuildsRequest.type,
    fetchCreateGuildsSaga
  );
}
