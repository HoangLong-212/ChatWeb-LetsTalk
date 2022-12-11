import { all } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import userSaga from "./userSaga";

function* mySaga() {
  yield all([loginSaga(), registerSaga(), userSaga()]);
}

export default mySaga;
