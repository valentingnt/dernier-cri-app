import { useRouter } from "next/router"
import Article from "../../layout/Article/Article"
import Main from "../../template/Main/Main"

function Details({ articles }) {
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

export async function getServerSideProps(context) {
  const params = context.params.theme

  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  const year = oneMonthAgo.getFullYear()
  const month = oneMonthAgo.getMonth() + 1
  const day = oneMonthAgo.getDate()
  const date = `${year}-${month}-${day}`

  const url = `https://newsapi.org/v2/everything?qInTitle=+${params}&language=en&from=${date}&sortBy=publishedAt&pageSize=30&apiKey=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: data,
  }
}

export default Details 
