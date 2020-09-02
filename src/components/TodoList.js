import React from 'react';
import { observer, useLocalStore } from "mobx-react-lite";
import { access } from 'fs';

export default observer(({initialTodos}) => {
  const todoRef = React.useRef();

  const store = useLocalStore(() => ({ 
    todos: createTodos(initialTodos),
    get pendingTodos() {
      return Object.keys(store.todos).filter(
        todo => store.todos[todo] === false,
      )
    },
    get doneTodos() {
      return Object.keys(store.todos).filter(
        todo => store.todos[todo] === true,
      )
    },
    addTodo: (evt) => {
      evt.preventDefault();
      store.todos[todoRef.current.value] = false;
      todoRef.current.value = ''
    },
    toggleTodo: (todo) => {
      store.todos[todo] = !store.todos[todo]
    }
  }))

  const renderTodo = (done) => todo => (
    <Todo key={todo} done={done} text={todo} onToggle={store.toggleTodo} />
  )
  
  return (
    <form onSubmit={store.addTodo}>
      {store.pendingTodos.map(renderTodo(false))}
      {store.pendingTodos.map(renderTodo(true))}
      <br />
      <input ref={todoRef}></input>
      <button>Add todo</button>
    </form>
  )
})

function Todo({text, done, onToggle}) {
  const onClick = React.useCallback(() => onToggle(text), [text])
  return (
    <div
    onClick = {onClick}
    key={text}
    style={{textDecoration: done ? 'line-through' : 'inherit'}}>
      <span>
        {done ? '✔' : '👀'}
      </span>
      {text}
    </div>
  )
}

function createTodos(todos){
  return todos.reduce((add, todo) => ({...access, [todo]: false}), {});
}