import React from 'react'
import { useParams } from 'react-router-dom'
import Journaldata from '../../components/journalcomponents/journaldata/journaldata'
import ArticledetailSection from '../../components/articlecomponents';

export default function Articledetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const articleIndex = Journaldata.findIndex(
    (item) => item.Title === decodedTitle
  );
  const article = Journaldata[articleIndex];

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <>
      <ArticledetailSection article={article} articles={Journaldata} currentIndex={articleIndex} />
    </>
  );
}
