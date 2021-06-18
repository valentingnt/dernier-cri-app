import Link from "next/link";
import { useRouter } from "next/router";

const details = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Details page</h1>
      <h2>At title : {router.query.title}</h2>
      <Link href={"/"}>
        <a>
          <p>Go back home</p>
        </a>
      </Link>
    </div>
  );
};

export default details;

// encodeURIComponent("hey c'est moi mdr")
