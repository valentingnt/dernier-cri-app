import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Menu.module.scss";

const Menu = () => {
  const router = useRouter();

  const searchBox = () => {
    let searched = document.getElementById("search").value;

    searched === ""
      ? ""
      : router.push(`/themes/${searched}`, undefined, { shallow: false });
  };

  return (
    <>
      <menu className={styles.menuGrid}>
          <Link href="/themes/fashion">
            <a>
              <div><p>Fashion</p></div>
            </a>
          </Link>
          <Link href="/themes/technology">
            <a>
              <div><p>Technology</p></div>
            </a>
          </Link>
          <Link href="/themes/environment">
            <a>
              <div><p>Environment</p></div>
            </a>
          </Link>
          <Link href="/themes/politics">
            <a>
              <div><p>Politics</p></div>
            </a>
          </Link>
          <Link href="/themes/finance">
            <a>
              <div><p>Finance</p></div>
            </a>
          </Link>
          <Link href="/themes/society">
            <a>
              <div><p>Society</p></div>
            </a>
          </Link>
          <Link href="/themes/sport">
            <a>
              <div><p>Sport</p></div>
            </a>
          </Link>
          <Link href="/themes/art%20culture">
            <a>
              <div><p>Culture</p></div>
            </a>
          </Link>
      </menu>
      <div className={styles.searchArea}>
        <input placeholder="Rechercher une actualité..." type="text" id="search" className={styles.searchBox}/>
        <input type="button" value="Search" onClick={searchBox} className={styles.searchBtn} />
      </div>
    </>
  );
};

export default Menu;
