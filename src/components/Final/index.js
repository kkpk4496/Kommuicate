import {Component} from 'react'
import './index.css'

class Final extends Component {
  decreaseBtn = () => {
    const {onClickDecrease} = this.props

    onClickDecrease()
  }

  render() {
    return (
      <form className="your-container" onSubmit="#">
        <h1>Finishing up</h1>
        <p className="your-para">
          Double-check everything looks OK before conforming.
        </p>
        <div className="inputs-main-cont3">
          <div className="input-containers2">
            <input type="checkbox" className="add-on-inp" />
            <div>
              <h1 className="plan-price-head">Arcade(Monthly)</h1>
              <p className="your-para">Access to multiplayer games</p>
            </div>
            <p>+$9/mo</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="prev-btn" type="submit" onClick={this.decreaseBtn}>
            Go Back
          </button>
          <button className="next-btn1" type="submit">
            Confirm
          </button>
        </div>
      </form>
    )
  }
}

export default Final
