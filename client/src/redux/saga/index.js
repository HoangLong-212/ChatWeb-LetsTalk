import { all } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";

function* mySaga() {
  yield all([loginSaga(), registerSaga()]);
}

export default mySaga;
