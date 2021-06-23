import styles from "./Main.module.scss";
import Header from "../../layout/Header/Header";
import TriggerMenuButton from "../../components/TriggerMenuButton/TriggerMenuButton";
import Menu from "../../components/Menu/Menu";

const Main = ({ children }) => {
  return (
    <main className={styles.mainSection}>
      <div className={styles.sticky}><TriggerMenuButton /></div>
      <Header />
      <div className={styles.sticky}><Menu /></div>
      {children}
    </main>
  );
};

export default Main;
