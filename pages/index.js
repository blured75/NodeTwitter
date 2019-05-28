import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Twitter from '../api/twitter.js';
import React, { Component } from 'react'

export default class extends Component {
  static async getInitialProps() {
    let tweets = await Twitter.search("#visable")
    return tweets
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.tweets
    })
  }

  render() {
    return (
      <Layout>
        <h1>Visable tweets</h1>

        <input type="text" placeholder="Author" />

        <ul>
          {this.state.tweets.map(tweet => (
            <li key={Math.random()}>
              <img src={tweet.user_image}/>
              <Link as={`/p/${tweet.screen_name}`} href={`/post?id=${tweet.screen_name}`}>
                <a>{tweet.full_text + " (" + tweet.screen_name + ")"}</a>
              </Link>
              <p/>
            </li>
          ))}
        </ul>
      </Layout>
    )

  }
  /*
  const Index = (props) => (
    <Layout>
      <h1>Les tweets de Visable</h1>

      <input type="text" placeholder="Author" />

      <ul>
        {props.tweets.map(tweet => (
          <li key={Math.random()}>
            <Link as={`/p/${tweet.screen_name}`} href={`/post?id=${tweet.screen_name}`}>
              <a>{tweet.text + " (" + tweet.screen_name + ")"}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )

  Index.getInitialProps = async function() {
    let tweets = await Twitter.search("Didier Bonnet")
    return tweets
  }

  export default Index
  */
}