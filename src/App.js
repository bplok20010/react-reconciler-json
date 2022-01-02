import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { root } from "./JSONRenderer";

function FunComp() {
  return <div>这是函数式组件</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        () => {
          document.getElementById("textarea").value = JSON.stringify(
            root.childNodes,
            null,
            2
          );
        }
      );
    }, 1000);

    setTimeout(() => {
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        () => {
          document.getElementById("textarea").value = JSON.stringify(
            root.childNodes,
            null,
            2
          );
        }
      );
    }, 2000);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        {counter === 1 ? <hr /> : null}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="button-container">
            <div className="counter-text">{this.state.counter}</div>
          </div>
        </p>
        <FunComp key={counter} />
      </div>
    );
  }
}

export default App;
