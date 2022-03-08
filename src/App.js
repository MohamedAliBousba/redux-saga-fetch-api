import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/reducers/todos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="App">
      <h2>Todos</h2>
      {todos && (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
