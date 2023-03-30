import React, { useReducer, useRef, useState } from 'react';
import './../scss/snippets.scss';

function Snippets() {
  const [state, dispatch] = useReducer(reducer, {
    inputValue: '',
    todos: []
  });

  const [editIndex, setEditIndex] = useState(-1);
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

  function handleEdit(index, value) {
    setEditIndex(index);
    inputRef.current.value = value;
  }

  function handleSave(index, value) {
    dispatch({ type: 'EDIT_TODO', payload: { index, value } });
    setEditIndex(-1);
    inputRef.current.value = '';
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
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  defaultValue={todo}
                  ref={inputRef}
                />
                <button onClick={() => handleSave(index, inputRef.current.value)}>Save</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => handleEdit(index, todo)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
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
    case 'EDIT_TODO':
      const { index, value } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === index) {
            return value;
          }
          return todo;
        })
      };
    default:
      return state;
  }
}

export default Snippets;
