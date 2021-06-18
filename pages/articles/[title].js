import Link from "next/link";

const details = () => {
  return (
    <div>
      <h1>Details page</h1>
      {/* <h2>{article.publishedAt}</h2> */}
      <Link href={"/"}>
        <a><p>Go back home</p></a>
      </Link>
    </div>
  );
};

export default details;

// encodeURIComponent("hey c'est moi mdr")
