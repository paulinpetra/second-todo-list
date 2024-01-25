import { useState } from "react";
import ToDoForm from "./todoForm";
import ToDo from "./todo";
import { v4 as uuidv4 } from "uuid";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  //The spread operator (...) in this function is used to create a new object with the same properties as the original todo object,
  //but with the completed property toggled. Because its mutationg the object spread is needed

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //The filter function does not mutate the original todo objects,
  // it merely excludes certain items from the new array.
  //Therefore, there's no need to use the spread operator to create new todo objects

  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <ToDo
          todoItem={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default ToDoWrapper;
