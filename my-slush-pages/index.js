import React from 'react'
import { render } from 'react-dom'
// import App from './components/app'

class CountAndGreet extends React.Component {
  constructor(props) {
    super(props)
    this.state ={counter: 0}

  }
  clicked() {
    console.log('got clicked')
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
        <div onClick={this.clicked.bind(this)}>
          <h1>Kia ora {this.props.name}</h1>
          <h2>count is on {this.state.counter}</h2>
        </div>
    )
  }
}

render((
  <div>
    <CountAndGreet name="Lizzie" />
    <CountAndGreet name="Piet" />
  </div>
    ),
    document.querySelector('main'))




console.log('welcome to play-with-react')
