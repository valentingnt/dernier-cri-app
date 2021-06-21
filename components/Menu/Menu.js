import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import styles from "./Menu.module.scss";

const Menu = () => {

  const router = useRouter()
  
  const searchBox = () => {
    let searched = document.getElementById("search").value;
    router.push(`/themes/${searched}`, undefined, { shallow: false });
  };

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

      <div>
        <input type="text" id="search" />
        <input type="button" value="Rechercher" onClick={searchBox} />
      </div>
    </menu>
  );
};

export default Menu;
