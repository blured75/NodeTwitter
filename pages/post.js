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
  let timeline = await Twitter.getTimeline(id)
  return { timeline }
}

export default Post