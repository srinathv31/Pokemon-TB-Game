import React, { useState } from 'react';
import logo from './assets/PokemonImages/logo.png';
import { HelpView } from './components/HelpPage';
import './App.css';
import DECK from './assets/pokemons.json';
import { Pokemon } from './interfaces/pokemon';
import { CardViewer } from './components/PokemonView';
import { Controls } from './components/Controls';
import { BattleLogger } from './components/BattleLog';
import { BattleControls } from './components/BattleControls';

function App(this: any): JSX.Element {
  const [activeCard, setActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [oppActiveCard, oppSetActiveCard] = useState<Pokemon>(DECK[0] as Pokemon);
  const [playerHealth, setPlayerHealth] = useState<number>(DECK[0].health as number); // Lift Health state up to update after every event in the game to show damage in real time.
  const [oppHealth, setOppHealth] = useState<number>(DECK[0].health as number);
  const [visible, setVisible] = useState<boolean>(false);
  const [helpVisible, setHelpVisible] = useState<boolean>(false);                     // Used to display and hide "How to Play"
  const [gameState, setGameState] = useState<number>(0);                              // Used for prompts
  const [criticalState, setCriticalState] = useState<number>(0);                      // Lifted state to display critical percent probablity in the battle logger.

  return (
    <div className="App">
      <header className="cell cell-header">
        <img src={logo} className="App-logo" alt="logo" /><br />
        { !helpVisible && <button onClick={() => setHelpVisible(!helpVisible) }>How to Play</button>}
        { helpVisible && <button onClick={() => setHelpVisible(!helpVisible) }>Close</button>}
        { helpVisible && <HelpView></HelpView>}
      </header>
      
      {/* Player Hand */}
      <aside className="cell cell-left">
        <CardViewer pokemon={activeCard}
        pokemonHealth = {playerHealth}></CardViewer>
      </aside>

      {/* Making only the Attack and Defend buttons visible when the game starts using the visible useState */}
      <main className="cell cell-main">
      { !visible && <Controls 
        setPokemon= {setActiveCard}
        oppSetPokemon = {oppSetActiveCard}
        healthSetter = {setPlayerHealth}
        oppHealthSetter = {setOppHealth}
        deck = {DECK} 
        pokemon = {activeCard}
        gameStateSetter = {setGameState}></Controls>}

        {/* Start Game Button */}
        { !visible && <button onClick={() => setVisible(!visible) }>Start Game</button>}
        
        { visible && <><div className="stroke">Battle Controls</div><br /></>}
        { visible && <BattleControls
        pokemon1={activeCard}
        pokemon2={oppActiveCard}
        pokemon1Health={setPlayerHealth}
        pokemon2Health={setOppHealth}
        gameSetter = {setGameState}
        criticalSetter={setCriticalState}></BattleControls> }
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
        gameState = {gameState}
        criticalChance = {criticalState}></BattleLogger>
      </footer>
    </div>
  );
}

export default App;

