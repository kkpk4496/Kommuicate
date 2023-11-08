import {Component} from 'react'
import InfoPage from './components/InfoPage'
import YourInfo from './components/YourInfo'
import YourPlan from './components/YourPlan'
import Addons from './components/Addons'
import Final from './components/Final'
import './App.css'

class App extends Component {
  state = {id: 1}

  increaseBtn = () => {
    this.setState(prevState => ({id: prevState.id + 1}))
  }

  decreaseBtn = () => {
    this.setState(prevState => ({id: prevState.id - 1}))
  }

  renderSwitching = id => {
    switch (id) {
      case 1:
        return <YourInfo onClickIncrease={this.increaseBtn} />
      case 2:
        return (
          <YourPlan
            onClickIncrease={this.increaseBtn}
            onClickDecrease={this.decreaseBtn}
          />
        )
      case 3:
        return (
          <Addons
            onClickIncrease={this.increaseBtn}
            onClickDecrease={this.decreaseBtn}
          />
        )
      case 4:
        return <Final onClickDecrease={this.decreaseBtn} />
      default:
        return null
    }
  }

  render() {
    const {id} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <InfoPage id={id} />
          {this.renderSwitching(id)}
        </div>
      </div>
    )
  }
}
export default App
