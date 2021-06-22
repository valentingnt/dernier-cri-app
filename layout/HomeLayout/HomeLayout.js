import Menu from "../../components/Menu/Menu";
import styles from "./HomeLayout.module.scss";

const HomeLayout = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <h1 className={styles.mainTitle}>TREND.</h1>

      <Menu />

      {children}
    </main>
  );
};

export default HomeLayout;
