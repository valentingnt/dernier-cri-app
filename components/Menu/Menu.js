import Link from "next/link";
import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <menu>
      <Link href="#">
        <a>
          <p>A propos</p>
        </a>
      </Link>
    </menu>
  );
};

export default Menu;
