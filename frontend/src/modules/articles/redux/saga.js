import { put, takeLatest, call } from 'redux-saga/effects';

import request from '../../../utils/apiRequest';
import * as CONSTANTS from './constants';

import {
  listArticlesRequest,
  listArticlesSuccess,
  listArticlesError,
} from './actions';

function* listArticles(action) {
  try {
    const data = yield call(request, '/articles');
    yield put(listArticlesSuccess(data));
  } catch (error) {
    yield put(listArticlesError(error));
  }
}

export default function* articlesSaga() {
  yield takeLatest(CONSTANTS.LIST_ARTICLES_REQUEST, listArticlesRequest);
}
