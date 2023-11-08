import {Component} from 'react'
import './index.css'

class YourInfo extends Component {
  state = {name: '', email: '', phone: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  increaseBtn = () => {
    const {onClickIncrease} = this.props

    onClickIncrease()
  }

  render() {
    const {name, email, phone} = this.state
    return (
      <form className="your-container" onSubmit="#">
        <h1>Personal info</h1>
        <p className="your-para">
          Please provide your name, email address, and phone number.
        </p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter Name"
          onChange={this.onChangeName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter Email"
          onChange={this.onChangeEmail}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          value={phone}
          placeholder="e.g. +1 234 567 890"
          onChange={this.onChangePhone}
          required
        />

        <button className="next-btn" type="submit" onClick={this.increaseBtn}>
          Next Step
        </button>
      </form>
    )
  }
}

export default YourInfo
