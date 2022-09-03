import './App.css';
import Form from "./Compontents/Form.js";
import React, { useEffect, useState } from 'react';
import TodoList from './Compontents/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { SelectTitle } from './Compontents/Filtering';
import { completedTodos, uncompletedTodos, allTodos } from './Action-Reducer/Action'

function App() {

  const todos = useSelector(state => state.todos)
  const status = useSelector(state => state.status)
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    FilterHandler(status, todos);
    saveLocal();
  }, [todos, status]);

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function FilterHandler(status, todos) {
    if (status === "completed") {
      dispatch(completedTodos(todos));
    }
    else if (status === "uncompleted") {
      dispatch(uncompletedTodos(todos));
    }
    else {
      dispatch(allTodos(todos));
    }
  }

  return (
    <div className="App">
      <header>
        <h2>Smit Pethani TodoList {SelectTitle(status)}</h2>
      </header>
      <div>
        <Form inputText={inputText} setInputText={setInputText}/>
        <TodoList setInputText={setInputText}/>
      </div>
    </div>
  );
}

export default App;
