/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Article.module.scss"

const Article = ({ article, date }) => {
  return (
    <main className={styles.container}>
      {article ? (
        <div className={styles.main}>
          <h1>{article.title}</h1>

          <img
            src={
              article.urlToImage == null
                ? "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                : article.urlToImage
            }
            alt="Image d'article"
          />

          <div className={styles.articleContent}>
            <p>{article.content}</p>
            <Link href={article.url} legacyBehavior>
              <a>
                <u>
                  <i>Link to full article</i>
                </u>
              </a>
            </Link>
          </div>

          <p>From : {article.source.name}</p>

          <p className={styles.publishedAt}>Published at : {date}</p>

          <Link href={"/"} legacyBehavior>
            <a>
              <p>
                <i>
                  <u>Go back</u>
                </i>
              </p>
            </a>
          </Link>
        </div>
      ) : (
        <h1>Article not found</h1>
      )}
    </main>
  )
}
export default Article 
