import React, { Component } from 'react';
import './App.css';
import Range from "./Range"
import Shades from "./Shades"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 76, 
      g: 128,
      b: 115
    };
  }

  change = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const {r, g, b} = this.state;
    const color = `rgb(${r}, ${g}, ${b})`
    return (
      <div className="App">
        <div style={{height: 200, width: 280, backgroundColor: color, margin: "0 auto",borderRadius: "50px"}}/>
          {
            Object.values(this.state).every(color => color !== 0) || Object.values(this.state).every(color => color !== 255) ? <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "20px",}}>
              <Shades {...this.state}/>
            </div> : null 
          }

          {
            ["r", "g", "b"].map(color => (
              <Range key ={color}  color ={color} value = {this.state[color]} onChange = {this.change}/> 
            ))
          }
      </div>
    );
  }
}

export default App;

