import React from 'react';
import ReactDOM from 'react-dom';


const CHAR_LIMIT = 40;

class App extends React.Component {
  render(){
    return (
      <div>
  {/* Word count Component */}
      <Wordcount />
      </div>
    )
  }
}

class Wordcount extends React.Component {
  constructor() {
    super();
    this.state = {
      chars_left: CHAR_LIMIT,
      chars_typed: 0
    }
    // this.value = this.state.value;
    this.update = this._update.bind(this);
  }

  _update(e) {
    let input = e.target.value
   //change the state
   if (this.state.chars_left !== 0) {
    this.setState({
      chars_left: CHAR_LIMIT - input.length,
      chars_typed: input.length
    })
  }
  else {
    alert("REACH MAX COUNT");
  }
  }

  render(){
    return(
      <div>
      <textarea onChange={this.update} maxLength={CHAR_LIMIT}></textarea>
      <p>Characters Left: {this.state.chars_left}</p>
      <p>Characters Typed: {this.state.chars_typed}</p>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('tweety'))
