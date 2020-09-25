import { put, call, takeLatest } from 'redux-saga/effects';
import getBooks from '../api';
import * as Actions from "../actions";

function* fetchData(action) {
  try {
    // 로딩 중
    yield put({ type: Actions.FETCH_LOADING });

    // api 호출
    const response = yield call(getBooks, action.payload);

    // api 성공시
    yield put({ type: Actions.FETCH_SUCCESS, payload: response.data});

  } catch(err) {
    // api 실패시
    yield put({ type: Actions.FETCH_FAILTURE, payload: err});
  }
}

export default function* () {
  yield takeLatest(Actions.GET_DATA, fetchData);
}