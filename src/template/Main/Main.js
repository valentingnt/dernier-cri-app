import styles from "./Main.module.scss";
import Header from "../../layout/Header/Header";

const HomeLayout = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
