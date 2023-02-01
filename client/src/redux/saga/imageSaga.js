import * as api from "../../api/index";
import { takeLatest, call, put } from "redux-saga/effects";

import { imageActions } from "../slice/imageSlice";

function* fetchImageSaga(action) {
  try {
    const image = yield call(api.uploadImage, action.payload);
    console.log("image", image);
    yield put(imageActions.getImageSuccess(image.data));
  } catch (err) {
    yield put(imageActions.getImageFailure(err));
  }
}

export default function* imageSaga() {
  yield takeLatest(imageActions.getImageRequest.type, fetchImageSaga);
}
