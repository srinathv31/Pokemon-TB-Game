import { Pokemon } from "../interfaces/pokemon";


export function BattleLogger({ pokemon1, pokemon2, pokemon2Health}:
    { pokemon1: Pokemon, pokemon2: Pokemon, pokemon2Health: number}): JSX.Element {
    return <div>
        <div>Player has Drawn: {pokemon1.name}</div><br/>
        <div>CPU had Drawn: {pokemon2.name}</div>
        <div>{pokemon2.name} Health: {pokemon2Health}</div>
    </div>
}
