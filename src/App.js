import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import List from './Components/List';

function App() {

  const [data, setData] = useState([
    { label: 'Learn React', complated: false },
    { label: 'Learn Vue', complated: false }
  ]);



  return (
    <div className="App">
      <Form setData={setData}  data={data} />
      <List data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
