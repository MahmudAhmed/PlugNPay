import React from "react";
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/one.png';

export default class DiceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: [one, two, three, four, five, six],
      prev: []
    };
  }

  componentDidMount = () => {
    const idx = this.random();
    this.setState( prevState => {
      return {
        idx,
        selected: prevState.sides[idx]
      }
    })
  } 

  random = () => {
    return Math.floor(Math.random() * 6)
  }

  handleDiceClick = () => {
    const idx = this.random();
    const prev = this.state.prev;
    if (prev.length >= 10) {
      prev.shift();
    }
    this.setState(prevState => {
      return {
        idx,
        selected: prevState.sides[idx],
        prev: [...prev, prevState.sides[idx]]
      }
    })
  }

  render() {
    const { prev } = this.state;
    return (
      <div className="dice-container">
        <h1 className="title">#1 - World's Dice Championship</h1>
        <img 
          src={this.state.selected} 
          onClick={this.handleDiceClick} 
          className="dice" 
          alt="1" 
          title="Click me"
        />
        <div>
          <button onClick={this.handleDiceClick}
          title="Try hovering over the dice!">Click to Roll</button>
        </div>
        <div>
          <h2>Your History</h2>
          {
          prev.length === 0 ? (
          <div>
            <h3>Start Rolling To Keep Track...</h3>
          </div>
          ) : (
          <div>
            {this.state.prev.map((dice, idx) => {
              return <img src={dice} key={idx} className="prev-dice" alt={`${idx + 1}`} />
            })}
          </div>
          )
          }
        </div>

      </div>
    )
  }
}