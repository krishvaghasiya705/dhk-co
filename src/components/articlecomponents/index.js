import React from 'react'
import "./articledetail.scss"
import Arrowrighticon from '../../assets/icons/arrowrighticon';
import { Link } from 'react-router-dom';

export default function ArticledetailSection({ article, articles, currentIndex }) {
  if (!article) return null;

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  // Determine next article (wrap around)
  let nextArticleLink = null;
  if (articles && typeof currentIndex === 'number' && articles.length > 1) {
    const nextIndex = (currentIndex + 1) % articles.length;
    const nextArticle = articles[nextIndex];
    nextArticleLink = (
      <Link to={`/journal/${encodeURIComponent(nextArticle.Title)}`}>next</Link>
    );
  }

  return (
    <>
      <div className='article-detail-section-banner'>
        <img src={article.BannerImage} alt={article.BannerImage} />
      </div>
      <div className='article-detail-section-grd-main blend-mode'>
        <div className='article-detail-section-content-left-main'>
          <div className='article-detail-section-content-left'>
            <button type='button' className='tag-button'>{article.Tag}</button>
            <div className='share-article-button' onClick={handleShareClick}>
              <span className='blend-mode'>Share Article</span>
              <Arrowrighticon />
            </div>
          </div>
        </div>
        <div className='article-detail-section-content-mid-main'>
          <div className='article-detail-section-content-mid'>
            <h1>{article.Title}</h1>
            {article.Data.map((topic, idx) => (
              <div key={idx}>
                {topic.TopicTitle && <h2><strong>{topic.TopicTitle}</strong></h2>}
                {topic.Topiccontent && topic.Topiccontent.map((content, cidx) => (
                  <p key={cidx} dangerouslySetInnerHTML={{ __html: content }} />
                ))}
                {topic.OpeningsTitle && <h3>{topic.OpeningsTitle}</h3>}
                {Array.isArray(topic.OpeningData) && topic.OpeningData.length > 0 && (
                  <div className='article-detail-links'>
                    {topic.OpeningData.map((opening, oidx) => (
                      <div key={oidx}>
                        <div dangerouslySetInnerHTML={{ __html: opening.OpeningLink }} />
                        {opening.LinkLocation && (
                          <span>{opening.LinkLocation}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {Array.isArray(topic.listData) && topic.listData.length > 0 && (
                  <div className='article-list-main'>
                    {topic.listData.map((list, lidx) => (
                      <div key={lidx}>
                        {list.listTitle && <h2><strong>{list.listTitle}</strong></h2>}
                        {Array.isArray(list.listing) && list.listing.map((item, iidx) => (
                          <p key={iidx}>
                            {item.listingTitle && <span>{item.listingTitle}</span>}
                            {item.listingPara}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {topic.Note && topic.Notedata && (
                  <div className='aticle-note'>
                    <p><span>{topic.Note}</span> {topic.Notedata}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='article-detail-section-content-right-main'>
          <div className='article-detail-section-content-right'>
            <span>{article.Date}</span>
          </div>
        </div>
      </div>
      <div className='article-detail-navigations-main blend-mode'>
        <div></div>
        <div className='article-detail-navigations'>
          <Link to={'/journal'}>all articles</Link>
          {nextArticleLink}
        </div>
      </div>
    </>
  )
}
