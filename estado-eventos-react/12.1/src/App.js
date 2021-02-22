import './App.css';
import React from 'react';

function handleEvent1() {
  return console.log('evento 1')
}
function handleEvent2() {
  return console.log('evento 2')
}

class App extends React.Component {
  constructor() {
    super()
    this.handleEvent3 = this.handleEvent3.bind(this); 
    this.state = { numeroDeCliques: 0 }

    console.log('componente sendo construido');
  }

  handleEvent3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques : estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={handleEvent1}>botão 1</button>
        <button onClick={handleEvent2}>botão 2</button>
        <button onClick={this.handleEvent3}>{this.state.numeroDeCliques}</button>
    </div>
    ); 
  }
} 

export default App;
