import { Pokemon } from "../interfaces/pokemon";
import DECK from '../assets/pokemons.json';
import { useEffect, useState } from "react";
import { CardViewer } from "./PokemonView";

export function BattleControls({ pokemon1, pokemon2 }:
    { pokemon1: Pokemon, pokemon2: Pokemon}): JSX.Element {

        function playerAttack() {
            if (pokemon2.health > pokemon1.attack){
                pokemon2.health = pokemon2.health - pokemon1.attack;
            }
            else {
                pokemon2.health = 0;
            }
            console.log(pokemon2.health);
            console.log("attack");
            return pokemon2.health;
        }

        return <div>
        <button onClick={playerAttack}>Attack</button>
    </div>
}
    