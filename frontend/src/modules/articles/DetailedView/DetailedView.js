import React from 'react';

import CardPage from 'containers/layout/CardPage';
import ArticleCard from 'components/ArticleCard';

const DetailedView = () => {
  console.log('I am on Detailed view');
  return (
    <CardPage title="Article Detailed View" elevation={0}>
      <ArticleCard />
    </CardPage>
  );
};

export default DetailedView;
