import { put, takeLatest, all } from 'redux-saga/effects';

// Support for generators
import 'babel-polyfill';

import { EXAMPLE_ACTION_TYPES } from '../reducers/reducer';

export function* fetchNews() {
  const API_URL = 'https://newsapi.org/v1/sources'
  try {
    const response = yield fetch(API_URL).then(response =>
      response.json());
    yield put({ type: EXAMPLE_ACTION_TYPES.NEWS_RECEIVED, json: response.articles });
  }
  catch (e) {
    console.log("ERROR", e);
  }
}
export function* actionWatcher() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.GET_NEWS, fetchNews)
}
export default function* rootSaga() { yield all([actionWatcher()]); }