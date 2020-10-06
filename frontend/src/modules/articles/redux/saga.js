import { put, takeLatest, call } from 'redux-saga/effects';

import request from '../../../utils/apiRequest';
import * as CONSTANTS from './constants';

import {
  listArticlesSuccess,
  listArticlesError,
  saveArticleSuccess,
  saveArticleError,
} from './actions';
import notifier from 'utils/notifier';

function* listArticles() {
  try {
    const data = yield call(request, '/articles');
    yield put(listArticlesSuccess(data.articles));
  } catch (error) {
    yield put(listArticlesError(error));
    notifier.error(error.message || 'Something went wrong!');
  }
}

function* saveArticle(action) {
  try {
    const data = yield call(request, '/articles', 'POST', action.payload);
    yield put(saveArticleSuccess(data));
    notifier.success('Successfully saved!');
  } catch (error) {
    yield put(saveArticleError(error));
    notifier.error(error.message || 'Something went wrong!');
  }
}

export default function* articlesSaga() {
  yield takeLatest(CONSTANTS.LIST_ARTICLES_REQUEST, listArticles);
  yield takeLatest(CONSTANTS.SAVE_ARTICLE_REQUEST, saveArticle);
}
