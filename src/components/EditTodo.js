import React, {useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { useRouteMatch } from "react-router-dom";
import { getTodo, updateTodo } from "../api";
import { useHistory } from "react-router-dom";


export const EditTodo = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id)
      setTodo(todo.text)
    }
    fetchTodo()
   });

  const onSubmit = async (data) => {
    await updateTodo(data, match.params.id);
    history.push("/");
    setTodo(todo.text);
  };
  
  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
         <TodoForm  todo={todo} onSubmit={onSubmit}  /> 
      </div>
    </div>  
    ) : (
      <div>Loading...</div>
    );
};