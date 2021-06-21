import Link from "next/link";
import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <menu>
      <Link href="/themes/fashion">
        <a>
          <p>Fashion</p>
        </a>
      </Link>
      <Link href="/themes/technology">
        <a>
          <p>Technology</p>
        </a>
      </Link>
      <Link href="/themes/environment">
        <a>
          <p>Environment</p>
        </a>
      </Link>
    </menu>
  );
};

export default Menu;
