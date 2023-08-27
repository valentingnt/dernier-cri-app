import { useRouter } from "next/router"
import Article from "../../layout/Article/Article"
import Main from "../../template/Main/Main"

const Details = ({ articles }) => {
  const router = useRouter()
  let idURLstring = router.query.id
  let idURL = parseInt(idURLstring)

  let date
  let articleToDisplay

  articles.map((article, index) => {
    if (idURL === index) {
      articleToDisplay = article
    }
  })

  if (articleToDisplay != null) {
    let dateBefore = articleToDisplay.publishedAt
    date = dateBefore.slice(0, 10)
  }
  return (
    <Main>
      <Article article={articleToDisplay} date={date} />
    </Main>
  )
}

export const getServerSideProps = async (context) => {
  const params = context.params.theme

  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  const url =
    "https://newsapi.org/v2/everything?" +
    `qInTitle=+${params}&` +
    "language=en&" +
    "from=2021-06-18&" +
    "sortBy=publishedAt&" +
    `apiKey=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: data,
  }
}
export default Details 
