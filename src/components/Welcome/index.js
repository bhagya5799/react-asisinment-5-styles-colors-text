// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
    text: 'Subscribe',
    color: 'black',
  }

  renderButton = () => {
    const {isSubscribe} = this.state
    this.setState({isSubscribe: !isSubscribe})
    if (isSubscribe === true) {
      this.setState({text: 'subscribed'})
    } else {
      this.setState({text: 'subscribe'})
    }
  }

  render() {
    const {isSubscribe} = this.state
    const className = isSubscribe ? 'black' : 'green'
    const {text} = this.state
    return (
      <div className={`container ${className}`}>
        <h1 className="heading">Welcome!</h1>
        <p className="Thankyou-caption">ThankYou! Happy Learning</p>
        <button className={className} onClick={this.renderButton}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
