import {Component} from 'react'
import './index.css'

class YourPlan extends Component {
  state = {isToggle: false}

  togglePlan = () => {
    this.setState(prevState => ({isToggle: !prevState.isToggle}))
  }

  increaseBtn = () => {
    const {onClickIncrease} = this.props

    onClickIncrease()
  }

  decreaseBtn = () => {
    const {onClickDecrease} = this.props

    onClickDecrease()
  }

  render() {
    const {isToggle} = this.state
    return (
      <form className="your-container" onSubmit="#">
        <h1>Select your plan</h1>
        <p className="your-para">
          You have the option of monthly or yearly billing.
        </p>
        <div className="inputs-main-cont">
          <div className="input-containers">
            <img
              src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1699449209/icon-arcade_w3c8zf.svg"
              alt="images"
            />
            <div>
              <h1 className="plan-price-head">Arcade</h1>
              <p className="your-para">{isToggle ? '$90/yr' : '$9/mo'}</p>
              <p className="your-para1">{isToggle ? '2 months free' : ''}</p>
            </div>
          </div>
          <div className="input-containers">
            <img
              src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1699449209/icon-advanced_f0upqv.svg"
              alt="images"
            />
            <div>
              <h1 className="plan-price-head">Advanced</h1>
              <p className="your-para">{isToggle ? '$120/yr' : '$12/mo'}</p>
              <p className="your-para1">{isToggle ? '2 months free' : ''}</p>
            </div>
          </div>
          <div className="input-containers">
            <img
              src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1699449210/icon-pro_ebnusz.svg"
              alt="images"
            />
            <div>
              <h1 className="plan-price-head">Pro</h1>
              <p className="your-para">{isToggle ? '$150/yr' : '$15/mo'}</p>
              <p className="your-para1">{isToggle ? '2 months free' : ''}</p>
            </div>
          </div>
        </div>
        <div className="toggle-btn">
          <p className={!isToggle ? 'your-plan2' : 'your-para'}>Monthly</p>
          <input
            className="inputs"
            type="checkbox"
            id="switch"
            onClick={this.togglePlan}
          />
          <label className="labels" htmlFor="switch">
            Toggle
          </label>
          <p className={isToggle ? 'your-plan2' : 'your-para'}>Yearly</p>
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

export default YourPlan
