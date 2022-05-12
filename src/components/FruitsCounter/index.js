import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    count: 0,
  }

  onEatMangoButton = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onEatBananaButton = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate {count}Mangoes and {count}bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMangoButton}
              >
                {' '}
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBananaButton}
              >
                {' '}
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
