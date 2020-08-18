import React from "react";
import { render } from "react-dom";

//import App from "./App";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    //this.increaseCount = this.increaseCount.bind(this)
    /* OR
      this.increaseCount = () => this.setState({count: this.state.count+1})
    */
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)   //0 (merging similar async functions)
  }

  //without using bind or arrow notation, the object this will be called on will be undefined and not be called on the class
  render() {
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase with ArrowNot</button>
          <button onClick={this.increaseCount.bind(this)}>Increase with Bind</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 0;
render(<App count={count++} />, document.getElementById("root"));
