import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { STATUS_CODES } from 'http';

const Index = (props) => (
  <Layout>
    <h1>Dejan Show on Tiléorasi</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=dejan')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  const res2 = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=tamere`,
   {
    headers: {
     'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFRL%2BgAAAAAAwIv%2BZM1%2Bmw%2Fq7iPdP5%2F6SwFncuU%3Dv9K8QFoNBsklHRlmZvhuLvdql4vzt4rworhoPcFUFiLWKD6xsL'
    }
  })
  const tamere = await res2.json()
  console.log(`tamere ${JSON.stringify(tamere, null, 4)}`)

  console.log(`${JSON.stringify(tamere.statuses, null, 4)}`)



  return {
    shows: tamere.statuses
    //statuses: tamere.statuses.map(entry => )
  }
}

export default Index