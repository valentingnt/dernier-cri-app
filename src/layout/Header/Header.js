/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Menu from "../../components/Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainSection}>
      <div className={styles.mainTitle}>
        <Link href='/Fashion'>
          <a>
            <img src="/logo/trendLogo.svg" alt="Logo" className={styles.logo} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
