import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import {CreateTodo} from "./components/CreateTodo";
import {EditTodo} from "./components/EditTodo";
import {TodoList} from "./components/TodoList";

function App() {
  return (
    <div>
      <nav className ="navbar  navbar-expang-lg navbar-light bg-light ">
        <ul className="navbar-nav flex-row">
          <li className="nav-item ">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="nav-item px-2">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
    <Switch>
     <Route exact path="/" component = {TodoList} />
     <Route path="/edit/:id" component = {EditTodo} />
     <Route path="/create" component = {CreateTodo} />
   </Switch>
   </div>
   
  );
}

export default App;
