import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages from "./components/home/messages";
import App from "./App";

ReactDOM.render(
  <IntlProvider locale="en" messages={messages["en"]}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);