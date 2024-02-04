import React from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Task</span>
      <InputFeild
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputFeild>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
