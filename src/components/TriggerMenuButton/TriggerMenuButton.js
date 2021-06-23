import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./TriggerMenuButton.module.scss";

const TriggerMenuButton = () => {
  const router = useRouter();

  const menuItems = [
    "Fashion",
    "Technology",
    "Environment",
    "Politics",
    "Finance",
    "Society",
    "Sport",
    "Culture",
  ];
  return (
    <nav role="navigation">
      <div className={styles.menuToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu}>
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
        </ul>
      </div>
    </nav>
  );
};

export default TriggerMenuButton;
