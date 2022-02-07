import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React, { useState, useEffect } from 'react';

var regularParaStyle = {
  color: '#282C35',
  backgroundColor: '#61DFFF',
  margin: '10px 30px',
  padding: '10px',
  width: '700px'
}

function App() {

  const users = [
    {id: 1, name: 'Sadiqul islam', views: 2567},
    {id: 2, name: 'Saifur Rahman', views: 5689},
    {id: 3, name: 'Syed Murtaza', views: 4152},
    {id: 4, name: 'Albab Majed', views: 1456},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Article title="Poverty"></Article>
        <ul style={regularParaStyle}>
          {
            users.map(user => <li>{user.name + ' (' + user.views + ')'}</li>)
          }
        </ul>
        <Counter></Counter>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(2)
  const doubleHandler = () => {
    const newCount = count * 2;
    setCount(newCount);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={doubleHandler}>Double me</button>
    </div>
  )
} 

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  
  return (
    <ul>
      {
        users.map(user => <li>{user.username}</li>)
      }
    </ul>
  )
}

function Article(props) {
  return (
    <div style={regularParaStyle}>
      <p>{props.title}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam esse iusto.</p>
    </div>
  )
}

export default App;
