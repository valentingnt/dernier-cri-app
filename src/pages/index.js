import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = ({}) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.push("/fashion");
    }
  }, [router]);

  return <></>;
};
export default Home;
