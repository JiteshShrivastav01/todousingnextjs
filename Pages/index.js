import React, { useState } from "react";
import TodoList from "../Components/TodoList";
import classes from "../Components/todo.module.css";
import { Fragment } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [complete, setComplete] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
    setComplete([...complete, todo]);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <h1 className={classes.heading}>Todo</h1>
        <br />
        <input
          className={classes.input}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button className={classes.btn} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <hr />
      <div className={classes.list}>
        <h1>Todo List</h1>
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onComplete={handleCompleteTodo}
        />
      </div>
      <hr />
      <div className={classes.list}>
        <h1>Complete Task</h1>
        {complete.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
