import React from "react";

export default class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value})
  }

  handleSubmit = () => {
    const word = this.state.text.split("");
    if ( word.length === 0 ) {
      this.setState({
        message: "Input cannot be empty!",
        word: ""
      })
      return;
    }
    for ( let i = 0; i < word.length; i++) {
      if (word[i] === 'b') {
        word[i] = "B"
      }
    }
    this.setState( prevState => {
      return {
        text: "",
        word: word.join(""),
        message: prevState.text === word.join("") ? "You are right, it is" : "I think you meant"
      }
    });
  }

  render() {
    const { word, message } = this.state; 
    return (
      <div className="input-container">
        <h1 className="title">#2 - Type Something</h1>
        <input type='text' placeholder="Start typing..." value={this.state.text} onChange={this.handleChange} />
        <br />
        <button className="btn" onClick={this.handleSubmit}>Submit</button>
        {word ? <h2>{`${message} "${word}"`}</h2> : message ? <h2>{message}</h2> : ""}
      </div>
    )
  }
}