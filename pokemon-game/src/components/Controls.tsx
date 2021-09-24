import { Pokemon } from "../interfaces/pokemon";
import DECK from '../assets/pokemons.json';
import { getRandomPokemon } from "../utilities/data";
import { useState } from "react";

export function Controls({ setPokemon, oppSetPokemon, deck }:
    {
        setPokemon: (c: Pokemon) => void, oppSetPokemon: (c: Pokemon) => void,
        deck: Pokemon[]
    }): JSX.Element {

    function setRandomPokemon() {
        setPokemon(getRandomPokemon(deck));
        oppSetPokemon(getRandomPokemon(deck));
    }

    return <div>
        <button onClick={setRandomPokemon}>Draw Card</button>
    </div>
}
    