import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" />
          提交
        </div>
        <ul>
          <li>学英语</li>
          <li>Learning React</li>
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;
