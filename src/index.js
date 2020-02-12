import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './components/Counter'
import { ThemeToggler } from './components/ThemeToggler'

const App = () => (
  <div>
    <Counter />
    <ThemeToggler />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
