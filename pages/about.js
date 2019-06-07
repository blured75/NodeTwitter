import Layout from '../components/MyLayout.js'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class About extends React.Component {

  render() {
    return (
      <Layout>
        <p>This is the updated about page</p>
        <div>
          Counter : {this.props.store.count}<br/>
          <button onClick={this.props.store.decrement}>-</button>
          <button onClick={this.props.store.increment}>+</button>
        </div>
      </Layout>
    )
  }
}

export default About
