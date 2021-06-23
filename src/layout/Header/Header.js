/* eslint-disable @next/next/no-img-element */
import Menu from "../../components/Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainSection}>
      <div className={styles.mainTitle}>
        <img src="/logo/trendLogo.svg" alt="Logo" className={styles.logo} />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
