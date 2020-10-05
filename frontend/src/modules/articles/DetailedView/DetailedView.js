import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { listArticlesRequest, saveArticleRequest } from '../redux/actions';
import CardPage from 'containers/layout/CardPage';
import ArticleCard from 'components/ArticleCard';
import LoadingContainer from 'components/LoadingContainer';

const DetailedView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, list, isSaving } = useSelector((state) => state.article);

  useEffect(() => {
    if (list[id]) return;
    dispatch(listArticlesRequest());
  }, [id, list, dispatch]);

  const handleSave = async (data) => {
    dispatch(saveArticleRequest(data));
  };

  return (
    <LoadingContainer loading={loading}>
      <CardPage title="Article Detailed View" elevation={0}>
        {list[id] && (
          <ArticleCard
            data={list[id]}
            onSave={handleSave}
            isSaving={isSaving}
          />
        )}
      </CardPage>
    </LoadingContainer>
  );
};

export default DetailedView;
