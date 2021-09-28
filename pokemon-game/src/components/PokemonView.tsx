import { Pokemon } from "../interfaces/pokemon";

export function CardViewer({ pokemon }:
    { pokemon: Pokemon }): JSX.Element {
    return <div>
        <div>{pokemon.name} {pokemon.type}</div>
        <div><img src={pokemon.image} alt="pokemon" width="250"/></div>
        <div>{pokemon.attack}</div>
        <div>{pokemon.defense}</div>
        <div>{pokemon.health}</div>
    </div>
}
