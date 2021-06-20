import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

const Home = ( data ) => {
  let articles = data.articles;
  console.log(data);

  return (
    <HomeLayout className={styles.container}>
      <Head>
        <title>Dernier Cri News App</title>
        <meta name="Application news pour Dernier Cri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {articles.map((article, index) => {
          return (
            <Link href={'/articles/' + article.id} key={index}>
              <a>
                <h1>
                  <li>{article.title}</li>
                </h1>
              </a>
            </Link>
          );
        })}
      </ul>
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
