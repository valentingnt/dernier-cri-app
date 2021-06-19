import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
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

  console.log(data.articles[19].id);

  return (
    <div>
      <h1>Details page</h1>
      <h2>At title :</h2>
      {/* <h2>At title : {article}</h2> */}
      <Link href={"/"}>
        <a>
          <p>Go back home</p>
        </a>
      </Link>
    </div>
  );
};

export default details;
