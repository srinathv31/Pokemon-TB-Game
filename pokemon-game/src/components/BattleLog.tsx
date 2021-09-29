import { Pokemon } from "../interfaces/pokemon";


export function BattleLogger({ pokemon1, pokemon2, pokemon2Health, gameState}:
    { pokemon1: Pokemon, pokemon2: Pokemon, pokemon2Health: number, 
        gameState: number}): JSX.Element {
        
        if (gameState === 1) {
            return(
                <><div>Player has Drawn: {pokemon1.name}</div><br /><div>CPU had Drawn: {pokemon2.name}</div></>
            )
        }
        if (gameState === 2) {
            return(
                <div>{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div>
            )
        }
    
    return <div>
        {/* <div>{pokemon2.name} Health: {pokemon2Health}</div> */}
    </div>
}
