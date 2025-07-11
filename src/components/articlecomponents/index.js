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
      <div className='article-detail-section-grd-main'>
        <div className='article-detail-section-content-left-main blend-mode'>
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
            <h1 className='blend-mode'>{article.Title}</h1>
            {article.Data.map((topic, idx) => (
              <div key={idx}>
                {topic.TopicPara && <h2 className='blend-mode'><strong>{topic.TopicPara}</strong></h2>}
                {topic.Topiccontent && topic.Topiccontent.map((content, cidx) => (
                  <p className='blend-mode' key={cidx} dangerouslySetInnerHTML={{ __html: content }} />
                ))}
                {topic.OpeningsTitle && <h3>{topic.OpeningsTitle}</h3>}
                {Array.isArray(topic.OpeningData) && topic.OpeningData.length > 0 && (
                  <div className='article-detail-links blend-mode'>
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
                        {list.listTitle && <h2 className='blend-mode'><strong>{list.listTitle}</strong></h2>}
                        {Array.isArray(list.listing) && list.listing.map((item, iidx) => (
                          <div key={iidx}>
                            {(item.listingTitle || item.listingPara) && (
                              <p className='blend-mode'>
                                {item.listingTitle && <span>{item.listingTitle}</span>}
                                {item.listingPara && <div className='inline-text' dangerouslySetInnerHTML={{ __html: item.listingPara }} />}
                              </p>
                            )}
                            {item.listingDate && (
                              <p className='blend-mode'>{item.listingDate}</p>
                            )}
                            {Array.isArray(item.listimgcontent) && item.listimgcontent.length > 0 && (
                              <div className='article-listing-listimgcontent'>
                                {item.listimgcontent.map((imgContent, imgIdx) => (
                                  <div key={imgIdx}>
                                    {imgContent.Listimg && (
                                      <>
                                        <img src={imgContent.Listimg} alt={imgContent.Listimg} />
                                        {imgContent.Listimgtitle && (
                                          <i className='blend-mode' dangerouslySetInnerHTML={{ __html: imgContent.Listimgtitle.replace(/<bold>(.*?)<\/bold>/g, '<strong>$1</strong>') }} />
                                        )}
                                      </>
                                    )}
                                    {Array.isArray(imgContent.Listimgcontent) && imgContent.Listimgcontent.map((content, contentIdx) => (
                                      <p className='blend-mode' key={contentIdx} dangerouslySetInnerHTML={{ __html: content }} />
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {topic.Note && topic.Notedata && (
                  <div className='aticle-note blend-mode'>
                    <p><span>{topic.Note}</span> {topic.Notedata}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='article-detail-section-content-right-main blend-mode'>
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
