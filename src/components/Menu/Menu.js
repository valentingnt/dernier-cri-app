import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Menu.module.scss"

const Menu = () => {
  const router = useRouter()

  const menuItems = [
    "Fashion",
    "Technology",
    "Environment",
    "Politics",
    "Finance",
    "Society",
    "Sport",
    "Culture",
  ]

  return (
    <>
      <menu className={styles.menuGrid}>
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
          )
        })}
      </menu>
    </>
  )
}

export default Menu 
