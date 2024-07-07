import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import './components/TodoTemplate';
import TodoTemplate from './components/TodoTemplate';
import profile_picture_pjh from './img/박준하사진.jpg'
import business_card from './img/명함.pdf'

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

  const [searchTerm3, setSearchTerm3] = useState('');

  const person1 = new Person("Park",183,73);

  const handleChange = event=>{
    setSearchTerm(event.target.value);
  };

  const buttonChange = event=>{
    setSearchTerm3(event.target.value);
  }

  const handleChange2 = event=>{
    setSearchTerm2(event.target.value);
  };

  const holdValue = event=>{
    setSearchTerm3(event.target.value);
  }


  const filteredDate = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDataButton = data.filter(item=>
    item.toLowerCase().includes(searchTerm3.toLowerCase())
  )

  return(
    <div className = "App">
      Searching App Template
      <TodoTemplate/>
      <header>
        <h1>BLISS TECH</h1>
        <h3>searching app</h3>
        <p>Posted by {person1.name}</p>
        <img src ={profile_picture_pjh} width = '400px'/>
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
        type = "text"
        placeholder = "Enter your code!"
        
        
      />
      <button
        onClick = {buttonChange}
      >Button ONE
      </button>
      <ul>
        {filteredDataButton.map((item,index)=>(
          <li key ={index}>{item}</li>
        ))}
      </ul>
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