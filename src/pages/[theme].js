import Head from "next/head"
import Main from "../template/Main/Main"
import { useRouter } from "next/router"
import Feed from "../layout/Feed/Feed"

function Theme({ articles }) {
  console.log('articles', articles)
  const router = useRouter()
  let themeURL = router.query.theme
  const message = `Theme ${themeURL} - News App`

  return (
    <Main>
      <Head>
        <title>{message}</title>
      </Head>
      <Feed theme={themeURL} articles={articles} />
    </Main>
  )
}

export async function getServerSideProps(context) {
  console.log('OUIII', context)
  let params
  if (context.params && context.params.theme) {
    params = context.params.theme
  }

  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  const year = oneMonthAgo.getFullYear()
  const month = oneMonthAgo.getMonth() + 1
  const day = oneMonthAgo.getDate()
  const date = `${year}-${month}-${day}`




  const url = `https://newsapi.org/v2/everything?qInTitle=+${params}&language=en&from=${date}&sortBy=publishedAt&pageSize=30&apiKey=${apiKey}`

  try {
    const res = await fetch(url)
    const data = await res.json()

    return {
      props: data,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
    }
  }
}

export default Theme 
