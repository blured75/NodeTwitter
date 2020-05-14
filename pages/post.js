import Layout from '../components/MyLayout.js'
import Twitter from '../api/twitter'

const Post = props => (
  <Layout>
    <ul>
     {props.timeline.map((entry,index)   => (
      <li key={entry.id}>
        {image(entry, index)}
        {description(entry, index)}
        <p>{entry.created_at}</p>
        <p>{entry.text}</p>
      </li>
     ))}
     </ul>
  </Layout>
)

function description(entry, index) {
  if (index == 0) return <i>{entry.description}</i>
  else return ``
}

function image(entry, index) {
  if (index == 0) return <img src={entry.profile_image_url}></img>
  else return ``
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  let timeline = await Twitter.getTimeline(id)
  return timeline
}

export default Post