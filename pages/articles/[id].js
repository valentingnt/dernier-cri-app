import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// export const getStaticPaths = async () => {

//   let apiKey = process.env.API_KEY;
//   const url =
//     "https://newsapi.org/v2/everything?" +
//     "qInTitle=+fashion&" +
//     "language=en&" +
//     "from=2021-06-01&" +
//     "sortBy=popularity&" +
//     `apiKey=${apiKey}`;

//   const res = await fetch(url);
//   const data = await res.json();

//   data.articles.map((article, index) => {
//     article.id = index;
//   });

//   const paths = data.articles.map(article => {
//     return {
//       params: { id: article.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

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

const details = (data) => {
  const router = useRouter();
  let idURLstring = router.query.id;
  let idURL = parseInt(idURLstring);

  let article = data.articles.map((article, index) => {
    if (idURL === article.id) {
      return article;
    }
  });

  article = article[idURL];
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={article.urlToImage} alt="Image d'article" />
      <Link href={"/"}>
        <a>
          <p>Go back home</p>
        </a>
      </Link>
    </div>
  );
};

export default details;
