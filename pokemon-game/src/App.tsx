import React, { useState } from 'react';
import logo from './assets/PokemonImages/logo.png';
import './App.css';
import DECK from './assets/pokemons.json';
import { Pokemon } from './interfaces/pokemon';
import { CardViewer } from './components/PokemonView';
import { Controls } from './components/Controls';
import { BattleLogger } from './components/BattleLog';
import { BattleControls } from './components/BattleControls';

function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [oppActiveCard, oppSetActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [playerHealth, setPlayerHealth] = useState<number>(DECK[0].health as number);

  return (
    <div className="App">
      <header className="cell cell-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Player Hand */}
      <aside className="cell cell-left">
        <Controls 
        setPokemon= {setActiveCard}
        oppSetPokemon = {oppSetActiveCard}
        deck = {DECK}></Controls>
        <CardViewer pokemon={activeCard}></CardViewer>
      </aside>
      <main className="cell cell-main">
        <BattleControls
        pokemon1={activeCard}
        pokemon2={oppActiveCard}></BattleControls>
      </main>
      <aside className="cell cell-right">
        <CardViewer pokemon={oppActiveCard}></CardViewer>
      </aside>
      <footer className="class cell-footer">
        <BattleLogger 
        pokemon1={activeCard}
        pokemon2={oppActiveCard}></BattleLogger>
      </footer>
    </div>
  );
}

export default App;

