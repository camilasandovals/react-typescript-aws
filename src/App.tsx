import React, { useState } from 'react';
import { Hello } from "./components/Hello"
import { Form } from "./components/Form"
import './App.css';


function App() {

  const [serverData, setServerData] = React.useState([])
  React.useEffect(() => {
    fetch('http://54.88.30.14:4000')
    .then(res => res.json())
    .then(data => setServerData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Camila' lastName='Sandoval'/>
        <Form />
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name} - {eachDog.age}</p>)}
      </header>
    </div>
  );
}

export default App;
