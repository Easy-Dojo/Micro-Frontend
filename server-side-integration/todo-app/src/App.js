import React from 'react'
import TodoPage from './pages/TodoPage'
import { Switch, Route, Link } from 'react-router-dom'
import HelloPage from './pages/HelloPage'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
          </ul>
        </section>
      </nav>
      <main>
        <Switch>
          <Route path="/hello">
            <HelloPage />
          </Route>
          <Route path="/" exact >
            <TodoPage />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
