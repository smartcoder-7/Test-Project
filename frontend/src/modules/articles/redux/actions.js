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

export const saveArticleRequest = (data) => ({
  type: CONSTANTS.SAVE_ARTICLE_REQUEST,
  payload: data,
});

export const saveArticleSuccess = (data) => ({
  type: CONSTANTS.LIST_ARTICLES_SUCCESS,
  payload: data,
});

export const saveArticleError = (error) => ({
  type: CONSTANTS.SAVE_ARTICLE_ERROR,
  payload: error,
});

export const addNewArticles = (data) => ({
  type: CONSTANTS.ADD_NEW_ARTICLES,
  payload: data,
});
