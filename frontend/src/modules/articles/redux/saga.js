import { put, takeLatest, call } from 'redux-saga/effects';

import request from '../../../utils/apiRequest';
import * as CONSTANTS from './constants';

import { listArticlesSuccess, listArticlesError } from './actions';

function* listArticles() {
  try {
    const data = yield call(request, '/articles');
    console.log(data);
    yield put(listArticlesSuccess(data.articles));
  } catch (error) {
    yield put(listArticlesError(error));
  }
}

export default function* articlesSaga() {
  yield takeLatest(CONSTANTS.LIST_ARTICLES_REQUEST, listArticles);
}
