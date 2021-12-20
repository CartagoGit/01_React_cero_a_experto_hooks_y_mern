import React from "react";
import ReactDOM from "react-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { CalendarApp } from "./CalendarApp";
import './styles/global.css'

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }
ReactDOM.render(<CalendarApp />, document.getElementById("root"));
