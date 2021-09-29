import React, { useState } from 'react';
import logo from './assets/PokemonImages/logo.png';
import './App.css';
import DECK from './assets/pokemons.json';
import { Pokemon } from './interfaces/pokemon';
import { CardViewer } from './components/PokemonView';
import { Controls } from './components/Controls';
import { BattleLogger } from './components/BattleLog';
import { BattleControls } from './components/BattleControls';
import { render } from '@testing-library/react';

function App(this: any): JSX.Element {
  const [activeCard, setActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [oppActiveCard, oppSetActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [playerHealth, setPlayerHealth] = useState<number>(DECK[0].health as number);
  const [oppHealth, setOppHealth] = useState<number>(DECK[0].health as number);
  const [visible, setVisible] = useState<boolean>(false);
  const [gameState, setGameState] = useState<number>(0);
  const [startGame, setStartGame] = useState({ visible: false, intro: false });
  const onClickStartGame = () => {
    setStartGame({
      visible: true,
      intro: true,
    });
  }

  return (
    <div className="App">
      <header className="cell cell-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Player Hand */}
      <aside className="cell cell-left">
        { !visible && <Controls 
        setPokemon= {setActiveCard}
        oppSetPokemon = {oppSetActiveCard}
        healthSetter = {setPlayerHealth}
        oppHealthSetter = {setOppHealth}
        deck = {DECK} 
        pokemon = {activeCard}
        gameStateSetter = {setGameState}></Controls>}

        <CardViewer pokemon={activeCard}
        pokemonHealth = {playerHealth}></CardViewer>
      </aside>

      <main className="cell cell-main">
      { !visible && <button onClick={onClickStartGame}>Start Game</button>}
        { visible && <BattleControls
        pokemon1={activeCard}
        pokemon2={oppActiveCard}
        pokemon2Health={setOppHealth}
        gameSetter = {setGameState}></BattleControls> }
        {/* { !visible && <button onClick={() => setVisible(!visible) }>Start Game</button>}
        { visible && <BattleControls
        pokemon1={activeCard}
        pokemon2={oppActiveCard}
        pokemon2Health={setOppHealth}
        gameSetter = {setGameState}></BattleControls> } */}
      </main>

      {/* CPU Hand */}
      <aside className="cell cell-right">
        <CardViewer 
        pokemon={oppActiveCard}
        pokemonHealth = {oppHealth}></CardViewer>
      </aside>
      <footer className="class cell-footer">
        <BattleLogger 
        pokemon1={activeCard}
        pokemon2={oppActiveCard}
        pokemon2Health={oppHealth}
        gameState = {gameState}></BattleLogger>
      </footer>
    </div>
  );
}

export default App;

