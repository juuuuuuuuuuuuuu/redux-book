import { fork, all, take, race, delay, put, takeEvery, call } from "redux-saga/effects";
import getBooks from '../api';
import * as Actions from "../actions";

function* fetchData(action) {
  try {
    const response = yield call(getBooks, action.payload);
    console.log(response)
    yield put({ type: Actions.FETCH_SUCCESS, payload: response.data});

  } catch(err) {
    yield put({ type: Actions.FETCH_FAILTURE, payload: err});
  }
}

export default function* () {
  yield takeEvery(Actions.GET_DATA, fetchData);
}