import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoInput() {
  const { addTodo } = useContext(TodoContext);
  
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value)
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="add-todo">
        Insira uma tarefa:
        <input
          value={newTodo}
          onChange={handleChange}
          type="text"
          name="newTodo" 
          id="add-todo" 
          placeholder="Tarefa..."
        />
      </label>
      <button 
        type="button"
        onClick={handleClick}
      >
        Adicionar
      </button>
    </section>
  );
}

export default TodoInput;
