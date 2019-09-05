import React from 'react';
import './App.css';
import Students from './components/Students';
import Students_state from './components/compWithState';


function App() {
  return (
    <div className="App">
        <Students name="Ratziiee" age={20+5} profession = 'Software Developer' expo={5}>(This is child props{10+2})</Students>
        <Students name="Rajat" age={30-7} profession = 'UX Developer' expo={4}></Students>
        <Students name="Rahul" age={21} profession = 'UI Developer' expo={3}></Students>

        <Students_state name="Ratziiee with State" age={20+5} profession = 'Software Developer' expo={5}>(This is child props{10+2})</Students_state>
        <Students_state name="Rajat with State" age={30-7} profession = 'UX Developer' expo={4}></Students_state>
        
        
    </div>
  );
}

export default App;
