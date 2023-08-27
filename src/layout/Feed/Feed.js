/* eslint-disable @next/next/no-img-element */
import styles from "./Feed.module.scss"
import Link from "next/link"

const Feed = ({ articles, theme }) => {
  if (articles != null && articles.length > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.dailyArticle}>
            <Link href={`/${theme}/0`}>
              <a>
                <div className={styles.stickyArticle}>
                  <div className={styles.img}>
                    <img
                      src={
                        articles[0].urlToImage == null
                          ? "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                          : articles[0].urlToImage
                      }
                      alt="Image de l'article le plus récent"
                    />
                  </div>
                  <h3 className={styles.dailyArticleSubtitle}>
                    Latest article
                  </h3>

                  <h2 className={styles.dailyArticleTitle}>
                    {articles[0].title}
                  </h2>

                  <p className={styles.dailyArticleDescription}>
                    <i>{articles[0].description}</i>
                  </p>
                  <p className={styles.dailyArticleContent}>
                    {articles[0].content}
                  </p>
                  <p className={styles.dailyArticleLink}>
                    <Link href={articles[0].url}>
                      <a>
                        <u>
                          <i>Link to article</i>
                        </u>
                      </a>
                    </Link>
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.articleList}>
            {articles.map((article, index) => {
              let dateBefore = article.publishedAt
              let date = dateBefore.slice(0, 10)
              if (index > 0) {
                return (
                  <div key={index} className={styles.oneArticle}>
                    <Link href={`/${theme}/` + index}>
                      <a>
                        <img
                          className={styles.articleImage}
                          src={
                            article.urlToImage == null
                              ? "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                              : article.urlToImage
                          }
                          alt="Image de l'article le plus récent"
                        />
                        <p>{date}</p>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                      </a>
                    </Link>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.noMatch}>
        <h1>The request didn't send any articles.</h1>
        <h2>Double check your research or check the API key validity.</h2>

        <Link href={"/"}>
          <a>
            <u>
              <i>
                <p>Go back home</p>
              </i>
            </u>
          </a>
        </Link>
      </div>
    )
  }
}

export default Feed 
