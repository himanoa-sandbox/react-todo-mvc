import React from "react";
import ReactDOM from "react-dom";
import { FocusStyleManager } from "@blueprintjs/core";
import { MainPage } from './page/main'

FocusStyleManager.onlyShowFocusOnTabs();

const elm = document.getElementById("root");

if (elm) {
  ReactDOM.render(<MainPage />, elm);
}
