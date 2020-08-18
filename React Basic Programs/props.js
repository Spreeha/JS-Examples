import React from "react";
import { render } from "react-dom";

//import App from "./App";

/*const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);*/

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = (props) => ( //the () signify everything inside it needs to be treated as one statement
  <div style={styles}>
    <h2> {props.count} </h2>
  </div>
);

/*
//App 2 does the same thing as App
const App2 = function(props) {
  return (
    <div style = {style}>
      <h2>{props.count}</h2>
      </div>
  )
}
*/

let count = 0;
setInterval(
  () => render(<App count={count++} />, document.getElementById("root")), //the () => signifies an anonymous function (App) being invoked. count is the prop
  1000
);
