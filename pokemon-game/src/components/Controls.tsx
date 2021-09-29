import { Pokemon } from "../interfaces/pokemon";
import { getRandomPokemon } from "../utilities/data";

export function Controls({ setPokemon, oppSetPokemon, healthSetter, oppHealthSetter, deck, pokemon }:
    {
        setPokemon: (c: Pokemon) => void, oppSetPokemon: (c: Pokemon) => void,
        healthSetter: (h: number) => void, oppHealthSetter: (h: number) => void, 
        deck: Pokemon[], pokemon: Pokemon
    }): JSX.Element {

    function setRandomPokemon() {
        setPokemon(getRandomPokemon(deck));
        oppSetPokemon(getRandomPokemon(deck));
        healthSetter(pokemon.health);
        oppHealthSetter(pokemon.health);
    }

    return <div>
        <button onClick={setRandomPokemon}>Draw Card</button>
    </div>
}
    