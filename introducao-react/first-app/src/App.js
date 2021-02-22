import logo from './logo.svg';
import './App.css';
import React from 'react';

const commitmentList = ['Tomar café', 'Estudar', 'Fazer exercícios', 'Almoçar', 'Estudar', 'Beber', 'Ligar para namorada']

/* class App extends React.Component {
  
}
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>{commitmentList.map(value => <b><li>{value}</li></b>)}</ul>
      </header>
    </div>
  );
}

export default App;
