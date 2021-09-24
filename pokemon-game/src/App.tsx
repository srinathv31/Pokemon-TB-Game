import React, { useState } from 'react';
import logo from './assets/PokemonImages/logo.png';
import './App.css';
import DECK from './assets/pokemons.json';
import { Pokemon } from './interfaces/pokemon';

function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);

  return (
    <div className="App">
      <header className="cell cell-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
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
      {/* Player Hand */}
      <aside className="cell cell-left">
        <div>{DECK[0].name} {DECK[0].type}</div>
        <div><img src={DECK[0].image} alt="pokemon" width="250"/></div>
        <div>{DECK[0].attack}</div>
        <div>{DECK[0].defense}</div>
        <div>{DECK[0].health}</div>
      </aside>
      <main className="cell cell-main">Battle Stage</main>
      <aside className="cell cell-right">Opponent Hand</aside>
      <footer className="class cell-footer">Battle Log</footer>
    </div>
  );
}

export default App;

