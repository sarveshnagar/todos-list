import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Todos } from './components/Todos';
import { TodoItem } from './components/TodoItem';
import { About } from './components/About';
import React, { useState } from 'react';
import { AddTodo } from './components/AddTodo';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  const onDelete = (todo) => {
    console.log("on delete - ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I'm adding this todo", title, desc);
    let sno;
    if (todos.length == 0)
      sno = 0;
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([]);
  return (
    <>
      <Router>
        <Header title="My Todos List"></Header>
        <Routes>
          {/* <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo}></AddTodo>
                <Todos todos={todos} onDelete={onDelete}></Todos>
              </>
            )
          }}> */}
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos todos={todos} onDelete={onDelete}></Todos>
            </>
            }>
          </Route>
          <Route exact path="/about" element={<About></About>}>
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
