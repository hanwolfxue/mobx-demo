import React from "react";
import ReactDOM from "react-dom";
import { SmartTodo } from './components/Test1'


const App = () => (
  <div>
    <SmartTodo></SmartTodo>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));