import styles from "./Main.module.scss";
import Header from "../../layout/Header/Header";
import TriggerMenuButton from "../../components/TriggerMenuButton/TriggerMenuButton";

const HomeLayout = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <TriggerMenuButton />
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
