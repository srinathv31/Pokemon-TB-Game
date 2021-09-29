import { Pokemon } from "../interfaces/pokemon";

export function CardViewer({ pokemon, pokemonHealth }:
    { pokemon: Pokemon, pokemonHealth: number }): JSX.Element {
    
        // const IMG = require(pokemon.image)

        // function getHealth() {
        //     pokemonHealth = pokemon.health;
        //     return pokemonHealth;
        // }
    
    return <div>
        <div>{pokemon.name} {pokemon.type}</div>
        <div><img src={require("/Users/srinath/Desktop/Pokemon-TB-Game/pokemon-game/src/assets/PokemonImages/Charizard.png").default} alt="pokemon" width="250"/></div>
        <div>Attack: {pokemon.attack}</div>
        <div>Defense: {pokemon.defense}</div>
        <div>Health: {pokemonHealth}</div>
    </div>
}
