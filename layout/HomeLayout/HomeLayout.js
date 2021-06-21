import Menu from "../../components/Menu/Menu";
import styles from "./HomeLayout.module.scss";

const HomeLayout = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <Menu />

      <h1 className={styles.mainTitle}>trend.</h1>

      {children}
    </main>
  );
};

export default HomeLayout;
