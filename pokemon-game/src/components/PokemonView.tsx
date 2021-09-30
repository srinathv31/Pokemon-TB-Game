import { Pokemon } from "../interfaces/pokemon";
import Charizard from "../assets/PokemonImages/Charizard.png"
import Squirtle from "../assets/PokemonImages/Squirtle.png"
import Bulbasaur from "../assets/PokemonImages/Bulbasaur.png"



export function CardViewer({ pokemon, pokemonHealth }:
    { pokemon: Pokemon, pokemonHealth: number }): JSX.Element {
    
        function getPokemonImg() {
            let id = pokemon.name;
            switch(id) {
                case 'Charizard':
                    id = Charizard;
                    return id;
                case 'Squirtle':
                    id = Squirtle;
                    return id;
                case 'Bulbasaur':
                    id = Bulbasaur;
                    return id;
            }
        }


    return <div>
        <div><span className="card-name">{pokemon.name}</span> <span className="card-type">Type:{pokemon.type}</span></div>
        <div><img src={getPokemonImg()} alt="pokemon" width="250"/></div>
        <div className="strokeAtt">Attack: {pokemon.attack}</div>
        <div className="strokeAtt">Defense: {pokemon.defense}</div>
        <div className="strokeAtt">Health: {pokemonHealth}</div>
    </div>
}
