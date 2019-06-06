import Layout from '../components/MyLayout.js'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const appState = observable({
  count : 0
})
appState.increment = function() {
  this.count++
}
appState.decrement = function() {
  this.count--
}

@observer
class About extends React.Component {

  render() {
    return (
      <Layout>
        <p>This is the updated about page</p>
        <div>
          Counter : {this.count}<br/>
          <button onClick={this.handleDec}>-</button>
          <button onClick={this.handleInc}>+</button>
        </div>
      </Layout>
    )
  }

  handleDec = () => {
    
  }

  handleInc = () => {
    this.count++
  }


}

export default About
