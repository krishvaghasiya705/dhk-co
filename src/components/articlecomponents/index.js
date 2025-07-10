import React from 'react'
import "./articledetail.scss"
import Arrowrighticon from '../../assets/icons/arrowrighticon';

export default function ArticledetailSection({ article }) {
  if (!article) return null;
  return (
    <>
      <div className='article-detail-section-banner'>
        <img src={article.BannerImage} alt={article.BannerImage} />
      </div>
      <div className='article-detail-section-grd-main blend-mode'>
        <div className='article-detail-section-content-left-main'>
          <div className='article-detail-section-content-left'>
            <button type='button' className='tag-button'>{article.Tag}</button>
            <div className='share-article-button'>
              <span className='blend-mode'>Share Article</span>
              <Arrowrighticon />
            </div>
          </div>
        </div>
        <div className='article-detail-section-content-mid-main'>
          <div className='article-detail-section-content-mid'></div>
        </div>
        <div className='article-detail-section-content-right-main'>
          <div className='article-detail-section-content-right'>
            <span>{article.Date}</span>
          </div>
        </div>
      </div>
    </>
  )
}
