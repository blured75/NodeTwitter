import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { STATUS_CODES } from 'http';

const Index = (props) => (
  <Layout>
    <h1>Dejan Show on Tiléorasi</h1>
    <ul>
      {props.shows.map(show => (
        <li key={Math.random()}>
          <Link as={`/p/${show.user.screen_name}`} href={`/post?id=${show.user.screen_name}`}>
            <a>{show.text + "|" + show.user.screen_name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {

  const res = await fetch(`http://localhost:3000/external/api/tweets`)
  
  const tweets = await res.json()

  return {
    shows: tweets.statuses
  }
}

export default Index