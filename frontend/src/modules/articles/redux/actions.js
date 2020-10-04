import * as CONSTANTS from './constants';

export const listArticlesRequest = () => ({
  type: CONSTANTS.LIST_ARTICLES_REQUEST,
});

export const listArticlesSuccess = (list) => ({
  type: CONSTANTS.LIST_ARTICLES_SUCCESS,
  payload: list,
});

export const listArticlesError = (error) => ({
  type: CONSTANTS.LIST_ARTICLES_ERROR,
  payload: error,
});
