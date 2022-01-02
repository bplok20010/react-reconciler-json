# react-reconciler-json

使用 `react-reconciler` 将 `JSX` 输出为 `json` 格式数据

## 效果

```jsx
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

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
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
```

最终输出效果

```json
[
  {
    "className": "App",
    "nodeName": "div",
    "childNodes": [
      {
        "className": "App-header",
        "nodeName": "header",
        "childNodes": [
          {
            "src": "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
            "className": "App-logo",
            "alt": "logo",
            "nodeName": "img",
            "childNodes": [],
            "$$uid": 2
          },
          {
            "className": "App-title",
            "nodeName": "h1",
            "childNodes": [
              {
                "nodeName": "#text",
                "textContent": "Welcome to React",
                "$$uid": 3
              }
            ],
            "$$uid": 4
          }
        ],
        "$$uid": 5
      },
      {
        "className": "App-intro",
        "nodeName": "p",
        "childNodes": [
          {
            "className": "button-container",
            "nodeName": "div",
            "childNodes": [
              {
                "className": "counter-text",
                "nodeName": "div",
                "childNodes": [
                  {
                    "nodeName": "#text",
                    "textContent": "2",
                    "$$uid": 6
                  }
                ],
                "$$uid": 7
              }
            ],
            "$$uid": 8
          }
        ],
        "$$uid": 9
      },
      {
        "nodeName": "div",
        "childNodes": [
          {
            "nodeName": "#text",
            "textContent": "这是函数式组件",
            "$$uid": 16
          }
        ],
        "$$uid": 17
      }
    ],
    "$$uid": 12
  }
]
```

## dev

`npm start`
