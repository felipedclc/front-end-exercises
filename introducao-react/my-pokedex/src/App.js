import './App.css';
import React from 'react';
import pokemons from './Data';
import Pokedex from './Pokedex';



function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      < Pokedex xablau={pokemons} />
    </div>
  );
}

export default App;
