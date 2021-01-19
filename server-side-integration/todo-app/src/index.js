import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";

import './api/server'

import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
