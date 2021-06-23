import Head from "next/head";
import Main from "../template/Main/Main";
import { useRouter } from "next/router";
import Feed from "../layout/Feed/Feed";

const Theme = ({ articles }) => {
  const router = useRouter();
  let themeURL = router.query.theme;

  return (
    <Main>
      <Head>
        <title>Theme {themeURL} - Dernier Cri News App</title>
      </Head>
      <Feed theme={themeURL} articles={articles} />
    </Main>
  );
};

export const getServerSideProps = async (context) => {
  let params;
  if (context.params.theme) {
    params = context.params.theme;
  }

  let apiKey = process.env.API_KEY;

  const url =
    "https://newsapi.org/v2/everything?" +
    `qInTitle=+${params}&` +
    "language=en&" +
    "from=2021-06-18&" +
    "sortBy=publishedAt&" +
    "pageSize=30&" +
    `apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: data,
  };
};

export default Theme;
