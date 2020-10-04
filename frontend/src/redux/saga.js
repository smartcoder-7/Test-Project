import { all, fork } from 'redux-saga/effects';

import articlesSaga from '../modules/articles/redux/saga';

export default function* root() {
  yield all([fork(articlesSaga)]);
}
