import { Pokemon } from "../interfaces/pokemon";
import { getRandomPokemon } from "../utilities/data";

export function Controls({ setPokemon, oppSetPokemon, healthSetter, oppHealthSetter, gameStateSetter, deck, pokemon }:
    {
        setPokemon: (c: Pokemon) => void, oppSetPokemon: (c: Pokemon) => void,
        healthSetter: (h: number) => void, oppHealthSetter: (h: number) => void, 
        gameStateSetter: (g: number) => void, deck: Pokemon[], pokemon: Pokemon,
    }): JSX.Element {

    // Setting pokemon by calling Random function
    // Setting Health for pokemon as a useState to update Health throughout game
    function setRandomPokemon() {
        setPokemon(getRandomPokemon(deck));
        oppSetPokemon(getRandomPokemon(deck));
        healthSetter(pokemon.health);
        oppHealthSetter(pokemon.health);
        gameStateSetter(2);
    }

    return <div>
        <button onClick={setRandomPokemon}>Draw Card</button>
    </div>
}
    