import React, { useState } from 'react';
import TodoContext from './TodoContext';

// configurando o contexto global
function TodoProvider({ children }) { 
  const [todos, setTodos] = useState([]); 
  // estado que vamos usar p/ armazenar as informações(todos)

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  }

  return (
    <main>
      {/* outros componentes podem acessar essas variáveis */}
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
        {/* qualquer componente passado como filho do TodoProvider será o children */}
      </TodoContext.Provider>
    </main>
  )
}

export default TodoProvider;
