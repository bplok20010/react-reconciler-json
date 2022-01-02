import React from "react";
import ReactDOM from "react-dom";
import JSONRenderer, { root } from "./JSONRenderer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <textarea
    id="textarea"
    readOnly
    style={{
      padding: 8,
      width: "100%",
      height: 500,
    }}
  />,
  document.getElementById("root"),
  () => {
    JSONRenderer.render(
      <App />,
      root,
      () =>
        (document.getElementById("textarea").value = JSON.stringify(
          root.childNodes,
          null,
          2
        ))
    );
  }
);

reportWebVitals();
