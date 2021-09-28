import { Pokemon } from "../interfaces/pokemon";


export function BattleLogger({ pokemon1, pokemon2}:
    { pokemon1: Pokemon, pokemon2: Pokemon}): JSX.Element {
    return <div>
        <div>Player has Drawn: {pokemon1.name}</div><br/>
        <div>CPU had Drawn: {pokemon2.name}</div>
        <div>{pokemon2.name} Health: {pokemon2.health}</div>
    </div>
}
