import React from 'react'
import { render } from 'react-dom'
// import App from './components/app'

class CountAndGreet extends React.Component {
  constructor(props) {
    super(props)
    this.state ={counter: 0}
    this.state ={Catcounter: 0}

  }
  clicked() {
    console.log('got clicked')
    this.setState({counter: this.state.counter + 1})
    this.setState({Catcounter: this.state.Catcounter + 1})
  }

  render() {
    return (
      <main>
        <div onClick={this.clicked.bind(this)}>
          <h1>Kia ora {this.props.HumanName}</h1>
          <h2>count is on {this.state.counter}</h2>
        </div>
        <div onClick={this.clicked.bind(this)}>
          <h1>Kia ora {this.props.CatName}</h1>
          <h2>count is on {this.state.Catcounter}</h2>
        </div>
    </main>
    )
  }
}

render(<CountAndGreet HumanName="Lizzie" counter="0" CatName="Nancy" Catcounter="0"/>,
document.querySelector('main'))
console.log('welcome to play-with-react')

//spend some more time on this trying to get the counters working separately.
