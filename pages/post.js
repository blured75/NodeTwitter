import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Twitter from '../api/twitter'


const Post = props => (
  <Layout>
    <ul>
     {props.timeline.map(entry => (
      <li key={entry.id}>
        <img src={entry.user.profile_image_url}></img>
        <i>{entry.user.description}</i>
        <p>{entry.created_at}</p>
        <p>{entry.text}</p>
      </li>
     ))}
     </ul>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query

  // Put that in a API file
  console.log(`Twitter.getHostname() ${Twitter.getHostname()}`)
  let hostname = Twitter.getHostname()
  let res = await fetch(`http://${hostname}:3000/external/api/timeline/${id}`)
  let timeline = await res.json()
  
  return { timeline }
}

export default Post