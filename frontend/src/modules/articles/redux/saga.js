import { put, takeLatest, call } from 'redux-saga/effects';

import request from '../../../utils/apiRequest';
import * as CONSTANTS from './constants';

import {
  listArticlesSuccess,
  listArticlesError,
  saveArticleSuccess,
  saveArticleError,
} from './actions';

function* listArticles() {
  try {
    const data = yield call(request, '/articles');
    console.log(data);
    yield put(listArticlesSuccess(data.articles));
  } catch (error) {
    yield put(listArticlesError(error));
  }
}

function* saveArticle(action) {
  try {
    console.log('I am calling');
    const data = yield call(request, '/articles', 'POST', action.payload);
    yield put(saveArticleSuccess(data));
  } catch (error) {
    yield put(saveArticleError(error));
  }
}

export default function* articlesSaga() {
  yield takeLatest(CONSTANTS.LIST_ARTICLES_REQUEST, listArticles);
  yield takeLatest(CONSTANTS.SAVE_ARTICLE_REQUEST, saveArticle);
}
