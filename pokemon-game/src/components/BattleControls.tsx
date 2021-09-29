import { Pokemon } from "../interfaces/pokemon";
import DECK from '../assets/pokemons.json';
import { useEffect, useState } from "react";
import { CardViewer } from "./PokemonView";

export function BattleControls({ pokemon1, pokemon2, pokemon2Health }:
    { pokemon1: Pokemon, pokemon2: Pokemon,
      pokemon2Health: (h: number) => void }): JSX.Element {

        function startGame(){
        }

        function playerAttack() {
            if (pokemon2.health > pokemon1.attack){
                pokemon2.health = pokemon2.health - pokemon1.attack;
            }
            else {
                pokemon2.health = 0;
            }
            pokemon2Health(pokemon2.health);
            return pokemon2Health;
        }

    return <div>
        <button onClick={startGame}>Start Game</button>
        <button onClick={playerAttack}>Attack</button>
    </div>
}
    