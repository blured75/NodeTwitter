import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Twitter from '../api/twitter.js';
import React, { Component } from 'react'

export default class extends Component {
  static async getInitialProps() {
    console.log("getInitialProps de Index")
    let tweets = await Twitter.search("#visable")
    return tweets
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.tweets
    })
  }

  async submitComments(e){
    e.preventDefault();
    const searched = this.refs.searched.value

    let res = await Twitter.search(searched)
    console.log(`Twitter.search(searched) ${res}`)
    this.setState(res)

  }

  render() {
    return (
      <Layout>
        <h1>Visable tweets</h1>

        <form className="search-form" onSubmit={(e)=> this.submitComments(e)} >
          <input type="text" ref="searched" placeholder="Searched" />
          <input type="submit" />
        </form>

        <ul>
          {this.state.tweets.map(tweet => (
            <li key={Math.random()}>
              <img src={tweet.user_image}/> { // /post?id=${tweet.screen_name}
                                            }
              <Link as={`/p/${tweet.screen_name}`} href={`/post?id=${tweet.screen_name}`} >
                <a>with /p/.... {tweet.full_text + " (" + tweet.screen_name + ")"}</a>
              </Link>

              <Link href={{ pathname: '/post', query: { id: tweet.screen_name}  }}>
                 <a>with href and url object .... {tweet.full_text + " (" + tweet.screen_name + ")"}</a>
              </Link>
              <p/>
            </li>
          ))}
        </ul>

        
      </Layout>
    )

  }
}