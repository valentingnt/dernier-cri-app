import { useRouter } from "next/router"
import styles from "./Searchbar.module.scss"

const Searchbar = () => {
  const router = useRouter()

  const searchBox = () => {
    let searched = document.getElementById("search").value

    searched === ""
      ? ""
      : router.push(`/${searched}`, undefined, { shallow: false })
  }

  return (
    <div className={styles.searchArea}>
      <input
        placeholder="Search a news..."
        type="text"
        id="search"
        className={styles.searchBox}
      />
      <input
        type="button"
        value="Search"
        onClick={searchBox}
        className={styles.searchBtn}
      />
    </div>
  )
}

export default Searchbar 
