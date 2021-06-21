/* eslint-disable @next/next/no-img-element */
// import { useRouter } from "next/router";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Link from "next/link";
import Head from "next/head";
import styles from "./[theme].module.css";
import { useRouter } from "next/router";

const Theme = (data) => {
  let articles = data.articles;
  console.log(articles);

  const router = useRouter();
  let themeURL = router.query.theme;


  return (
    <HomeLayout className={styles.container}>
      <Head>
        <title>Dernier Cri News App</title>
        <meta name="Application news pour Dernier Cri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainGrid}>
        <div className={styles.dailyImg}>
          <img
            src={articles[0].urlToImage}
            alt="Image de l'article le plus récent"
          />
        </div>

        <div className={styles.dailyArticle}>
          <h3 className={styles.dailyArticleSubtitle}>Dernier article</h3>
          <Link href={themeURL + "/" + articles[0].id.toString()}>
            <a>
              <h2 className={styles.dailyArticleTitle}>{articles[0].title}</h2>
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
                  <i>Lien vers article</i>
                </u>
              </a>
            </Link>
          </p>
        </div>

        <div className={styles.articleList}>
          {articles.map((article, index) => {
            let dateBefore = article.publishedAt;
            let date = dateBefore.slice(0, 10);

            if (article.id > 0) {
              return (
                <>
                  <Link href={themeURL + "/" + articles[0].id.toString()} key={index}>
                    <a>
                      <img
                        className={styles.articleImage}
                        src={article.urlToImage}
                        alt="Image de l'article le plus récent"
                      />
                      <p>{date}</p>
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                    </a>
                  </Link>
                  <hr />
                </>
              );
            }
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  let params = context.params.theme;

  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    `qInTitle=+${params}&` +
    "language=en&" +
    "from=2021-06-18&" +
    "sortBy=publishedAt&" +
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

export default Theme;
