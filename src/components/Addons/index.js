import {Component} from 'react'
import './index.css'

class Addons extends Component {
  increaseBtn = () => {
    const {onClickIncrease} = this.props

    onClickIncrease()
  }

  decreaseBtn = () => {
    const {onClickDecrease} = this.props

    onClickDecrease()
  }

  render() {
    return (
      <form className="your-container" onSubmit="#">
        <h1>Pick add-ons</h1>
        <p className="your-para">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="inputs-main-cont3">
          <div className="input-containers2">
            <input type="checkbox" className="add-on-inp" />
            <div>
              <h1 className="plan-price-head">Online service</h1>
              <p className="your-para">Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </div>
          <div className="input-containers2">
            <input type="checkbox" className="add-on-inp" />
            <div>
              <h1 className="plan-price-head">Large storage</h1>
              <p className="your-para">Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
          </div>
          <div className="input-containers2">
            <input type="checkbox" className="add-on-inp" />
            <div>
              <h1 className="plan-price-head">Customizable profile</h1>
              <p className="your-para">Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="prev-btn" type="submit" onClick={this.decreaseBtn}>
            Go Back
          </button>
          <button
            className="next-btn1"
            type="submit"
            onClick={this.increaseBtn}
          >
            Next Step
          </button>
        </div>
      </form>
    )
  }
}

export default Addons
