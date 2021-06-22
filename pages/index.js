/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import styles from "./themes/index.module.scss";
import Link from "next/link";

const Home = (data) => {
  let articles = data.articles;
  console.log(articles);

  return (
    <HomeLayout className={styles.container}>
      <Head>
        <title>Dernier Cri News App</title>
        <meta name="Application news pour Dernier Cri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainGrid}>
        <div className={styles.dailyArticle}>
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
            <h3 className={styles.dailyArticleSubtitle}>Dernier article</h3>
            <Link href={"/themes/fashion/" + articles[0].id}>
              <a>
                <h2 className={styles.dailyArticleTitle}>
                  {articles[0].title}
                </h2>
              </a>
            </Link>
            <p className={styles.dailyArticleDescription}>
              <i>{articles[0].description}</i>
            </p>
            <p className={styles.dailyArticleContent}>{articles[0].content}</p>
            <p className={styles.dailyArticleLink}>
              <Link href={articles[0].url}>
                <a>
                  <u>
                    <i>Lien vers l'article</i>
                  </u>
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.articleList}>
          {articles.map((article) => {
            let dateBefore = article.publishedAt;
            let date = dateBefore.slice(0, 10);

            if (article.id > 0) {
              return (
                <div key={article.id}>
                  <Link href={"/themes/fashion/" + article.id}>
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
                  <hr />
                </div>
              );
            }
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps = async () => {
  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    `qInTitle=+fashion&` +
    "language=en&" +
    "from=2021-06-18&" +
    "sortBy=publishedAt&" +
    "pageSize=4&" +
    `apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  data.articles.map((article, index) => {
    article.id = index;
  });

  if (!data) {
    return {
      props: null,
    };
  } else
    return {
      props: data,
    };
};

export default Home;
