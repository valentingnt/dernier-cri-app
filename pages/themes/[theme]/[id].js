/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './[id].module.scss'

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

const details = (data) => {
  const router = useRouter();
  let idURLstring = router.query.id;
  let idURL = parseInt(idURLstring);

  let article = data.articles.map((article) => {
    if (idURL === article.id) {
      return article;
    }
  });

  article = article[idURL];
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <img
        src={
          article.urlToImage == null
            ? "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            : article.urlToImage
        }
        alt="Image d'article"
      />
      <Link href={"/"}>
        <a>
          <p>Go back home</p>
        </a>
      </Link>
    </div>
  );
};

export default details;
