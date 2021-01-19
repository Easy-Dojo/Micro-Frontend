import Header from '../features/header/Header'
import TodoList from '../features/todos/TodoList'
import Footer from '../features/footer/Footer'
import React from 'react'

function TodoPage () {
  return (
    <section className="medium-container">
      <h2>Todos</h2>
      <div className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </section>
  )
}

export default TodoPage
