import Head from "next/head";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import styles from "../styles/Home.module.css";

const Home = ({ data }) => {

  let articles = data.articles
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
          return <li key={index}> {article.title}</li>;
        })}
      </ul>
    </MainLayout>
  );
};


export const getServerSideProps = async ({}) => {
  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    "qInTitle=+tesla&" +
    "from=2021-06-16&" +
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
