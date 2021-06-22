/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./[id].module.scss";

export const getServerSideProps = async (context) => {
  let params = context.params.theme;

  console.log(params);

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

const Details = (data) => {
  const router = useRouter();
  let idURLstring = router.query.id;
  let idURL = parseInt(idURLstring);

  let article = data.articles.map((article) => {
    if (idURL === article.id) {
      return article;
    }
  });

  article = article[idURL];

  let dateBefore = article.publishedAt;
  let date = dateBefore.slice(0, 10);

  return (
    <main className={styles.container}>
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
          <Link href={article.url}>
            <a>
              <u>
                <i>Link to full article</i>
              </u>
            </a>
          </Link>
        </div>


        <p>From : {article.source.name}</p>

        <p className={styles.publishedAt}>Published at : {date}</p>

        <Link href={"/"}>
          <a>
            <p>
              <i><u>Go back</u></i>
            </p>
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Details;
