import React, { useState } from "react";
import { Todo } from "../model";
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineDoneOutline } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="todos_single--text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos_single--text">{todo.todo}</s>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) setEdit(!edit);
          }}
        >
          <MdEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <FaDeleteLeft />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
