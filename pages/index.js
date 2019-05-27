import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { STATUS_CODES } from 'http';
import Twitter from '../api/twitter.js';

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

  return {
    shows: await Twitter.search("visable")
  }
}

export default Index