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
      <div>
        <Link href="/themes/fashion">
          <a>
            <p>Fashion</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/technology">
          <a>
            <p>Technology</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/environment">
          <a>
            <p>Environment</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/politics">
          <a>
            <p>Politics</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/finance">
          <a>
            <p>Finance</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/society">
          <a>
            <p>Society</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/sport">
          <a>
            <p>Sport</p>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/themes/art%20culture">
          <a>
            <p>Art & Culture</p>
          </a>
        </Link>
      </div>

      <div>
        <input type="text" id="search" />
        <input type="button" value="Rechercher" onClick={searchBox} />
      </div>
    </menu>
  );
};

export default Menu;
