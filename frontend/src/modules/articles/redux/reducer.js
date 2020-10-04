import produce from 'immer';

import * as CONSTANTS from './constants';

const initialState = {
  loading: false,
  list: [],
  error: null,
};

const articleReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONSTANTS.LIST_ARTICLES_REQUEST:
        draft.loading = true;
        break;
      case CONSTANTS.LIST_ARTICLES_SUCCESS:
        draft.list = action.payload;
        draft.loading = false;
        break;
      case CONSTANTS.LIST_ARTICLES_ERROR:
        draft.error = action.payload;
        draft.loading = false;
        break;
      default:
        break;
    }
  });

export default articleReducer;
