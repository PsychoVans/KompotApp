import React, { useReducer, useRef } from 'react';
import './../scss/snippets.scss';

function Snippets() {
  const [state, dispatch] = useReducer(reducer, {
    inputValue: '',
    todos: []
  });

  const inputRef = useRef(null);

  function handleAddTodo() {
    if (state.inputValue.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: state.inputValue });
      inputRef.current.value = '';
    }
  }

  function handleDelete(index) {
    dispatch({ type: 'DELETE_TODO', payload: index });
  }

  function handleInputChange(e) {
    dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
  }

  return (
    <div className="Snippets">
      <h1>Snippets</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

export default Snippets;
