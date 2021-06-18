import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

const Home = ({ data }) => {
  let articles = data.articles;
  console.log(data);

  return (
    <MainLayout className={styles.container}>
      <Head>
        <title>Dernier Cri News App</title>
        <meta name="Application news pour Dernier Cri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {articles.map((article, index) => {
          return (
            <Link href={'/articles/' + encodeURIComponent(article.title)} key={index}>
              <a>
                <h1>
                  <li>{article.title}</li>
                </h1>
                <h2>{article.publishedAt}</h2>
              </a>
            </Link>
          );
        })}
      </ul>
    </MainLayout>
  );
};

export const getStaticProps = async ({}) => {
  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    "qInTitle=+fashion&" +
    "language=en&" +
    "from=2021-06-01&" +
    "sortBy=popularity&" +
    `apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      props: null,
    };
  } else
    return {
      props: { data },
    };
};

export default Home;
