import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Bliss',
  // 추가 데이터
];

class Person{
  constructor(name, height, weight){
    this.name = name
    this.hegiht = height;
    this.weight = weight;
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchTerm2, setSearchTerm2] = useState('');

  const person1 = new Person("Park",183,73);

  const handleChange = event=>{
    setSearchTerm(event.target.value);
  };

  const handleChange2 = event=>{
    setSearchTerm2(event.target.value);
  };

  const filteredDate = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div>
      <header>
        <h1>BLISS TECH</h1>
        <h3>searching app</h3>
        <p>Posted by {person1.name}</p>
      </header>
      <input
        type = "text"
        placeholder = "Search..."
        value = {searchTerm}
        onChange = {handleChange}
      />
      <input
        type = "text"
        placeholder = "Search22..."
        value = {searchTerm2}
        onChange = {handleChange2}
      />
      <ul>
        {filteredDate.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type = "number"
        placeholder = "Enter your code!"
      />
    </div>
  );
}

export default App;

/*
//default code
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/