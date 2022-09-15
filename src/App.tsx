import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Organisms/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Todo todosData={[
        {
          id: "1",
          title: "TASK",
          isCompleted: false,
        },
        {
          id: "2",
          title: "TASK 2",
          isCompleted: true,
        }
      ]} />
    </div>
  );
}

export default App;
