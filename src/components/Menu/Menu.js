import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Menu.module.scss";

const Menu = () => {
  const router = useRouter();

  const searchBox = () => {
    let searched = document.getElementById("search").value;

    searched === ""
      ? ""
      : router.push(`/${searched}`, undefined, { shallow: false });
  };
  const menuItems = [
    "fashion",
    "technology",
    "environment",
    "politics",
    "finance",
    "society",
    "sport",
    "culture",
  ];

  return (
    <>
      <menu className={styles.menuGrid}>
        {menuItems.map((item, index) => {
          return (
            <Link scroll={false} href={`/${item}`} key={index}>
              <a>
                <div
                  className={router.query.theme === item ? styles.active : ""}
                >
                  <p>{item}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </menu>
      <div className={styles.searchArea}>
        <input
          placeholder="Search a news..."
          type="text"
          id="search"
          className={styles.searchBox}
        />
        <input
          type="button"
          value="Search"
          onClick={searchBox}
          className={styles.searchBtn}
        />
      </div>
    </>
  );
};

export default Menu;
