import './App.css';
import React from 'react';

import TodoProvider from './context/TodoProvider';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
 
  return (
    <main className="App">
      <TodoProvider>
        <TodoInput /* addTodo={addTodo} */ />
        <TodoList /* todos={todos} */ />
      </TodoProvider>
      
    </main>
  );
}

export default App;
