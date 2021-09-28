import { Pokemon } from "../interfaces/pokemon";
import { getRandomPokemon } from "../utilities/data";

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
    