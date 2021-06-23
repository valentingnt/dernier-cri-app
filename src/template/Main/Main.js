import styles from "./Main.module.scss";
import Header from "../../layout/Header/Header";
import TriggerMenuButton from "../../components/TriggerMenuButton/TriggerMenuButton";

const Main = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <div className={styles.menuBtn}><TriggerMenuButton /></div>
      <Header />
      {children}
    </main>
  );
};

export default Main;
