/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import styles from "../styles/Home.module.scss";
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
        <div className={styles.dailyImg}>
          <img
            src={articles[0].urlToImage}
            alt="Image de l'article le plus récent"
          />
        </div>

        <div className={styles.dailyArticle}>
          <h3 className={styles.dailyArticleSubtitle}>Article du jour</h3>
          <Link href={"/articles/" + articles[0].id}>
            <a>
              <h2 className={styles.dailyArticleTitle}>{articles[0].title}</h2>
            </a>
          </Link>
          <p className={styles.dailyArticleDescription}>{articles[0].title}</p>
          <p className={styles.dailyArticleLink}>
            <Link href={articles[0].url}>
              <a>
                <i>Lien vers l'article</i>
              </a>
            </Link>
          </p>
        </div>

        <div className={styles.articleList}>
          <ul>
            {articles.map((article, index) => {
              return (
                <>
                  <Link href={"/articles/" + article.id} key={index}>
                    <a>
                      <h2>{article.title}</h2>
                    </a>
                  </Link>

                  <hr />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps = async () => {
  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    "qInTitle=+fashion&" +
    "language=en&" +
    "from=2021-06-18&" +
    "sortBy=relevancy&" +
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
