import React from "react";
import ReactDOM from "react-dom";
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const elm = document.getElementById("root");

if (elm) {
  ReactDOM.render(<p>hello</p>, elm);
}
