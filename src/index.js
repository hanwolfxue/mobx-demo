import React from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoList'


const App = () => (
  <div>
    <TodoList
      initialTodos={["Introduce MobX in React", "Make a great app with MobX"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));