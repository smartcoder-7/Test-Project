import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articleReducer from '../modules/articles/redux/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  article: articleReducer,
});

export default rootReducer;
