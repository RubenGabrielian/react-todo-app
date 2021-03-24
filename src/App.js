import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import List from './Components/List';

function App() {

  const [data, setData] = useState([
    { id: 1, label: 'Learn React', complated: false },
    { id: 2, label: 'Learn Vue', complated: false }
  ]);


  const deleteTodo = (id) => {
    const updatedTodos = [...data].filter((todo) => todo.id !== id);
    setData(updatedTodos)
  }


  const updateTodoChecked = (id) => {

    const updatedTodos = [...data].map((todo) => {
      if (todo.id === id) {
        todo.complated = !todo.complated
      }
      return todo;
    })

    setData(updatedTodos)

  }

  return (
    <div className="App">
      <Form setData={setData} data={data} />
      <List data={data} deleteTodo={deleteTodo} updateTodoChecked={updateTodoChecked} />
      <Footer data={data} />
    </div>
  );
}

export default App;
