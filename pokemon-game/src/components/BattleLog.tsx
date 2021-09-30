import { Pokemon } from "../interfaces/pokemon";
import '../Dots.css';

export function BattleLogger({ pokemon1, pokemon2, gameState, criticalChance}:
    { pokemon1: Pokemon, pokemon2: Pokemon, pokemon2Health: number, 
        gameState: number, criticalChance: number }): JSX.Element {
        
        if (gameState === 1) {
            return (
                <div>Game has Started!</div>
            )
        }
        if (gameState === 2) {
            return(
                <><div>Player has Drawn: {pokemon1.name}</div><br /><div>CPU had Drawn: {pokemon2.name}</div></>
            )
        }
        if (gameState === 3) {
            return(
                <div className="loading">{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div>
            )
        }
        if (gameState === 4) {
            return(
                <div>{pokemon2.name} attacked {pokemon1.name} for {pokemon2.attack} HP!</div>
            )
        }
        if (gameState === 5) {
            return(
                <><div>{pokemon2.name} attacked {pokemon1.name} for {pokemon2.attack} HP!</div><div>CPU Wins!</div></>
            )
        }
        if (gameState === 6) {
            return(
                <><div>{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div><div>Player Wins!</div></>
            )
        }
        if (gameState === 7) {
            return(
                <div className="loading">{pokemon1.name} is defending</div>
            )
        }
        if (gameState === 8) {
            return(
                <><div>{pokemon1.name} with a {criticalChance}% to dodge and counter attack.</div><br />
                <div>{pokemon1.name} could not dogde attack!</div>
                <div>{pokemon2.name} attacked {pokemon1.name} for {(pokemon2.attack - pokemon1.defense)} HP!</div></>
            )
        }
        if (gameState === 9) {
            return(
                <div>Player has decided to flee! CPU wins!</div>
            )
        }
        if (gameState === 10) {
            return(
                <><div className="loading">{pokemon1.name} with a {criticalChance}% to dodge and counter attack</div><br />
                <div>{pokemon1.name} dodged {pokemon2.name}'s attack!</div></>
            )
        }
        if (gameState === 11) {
            return(
                <><div>{pokemon1.name} with a {criticalChance}% to counter attack.</div><br />
                <div>{pokemon1.name} counter-attacked with critical hit of {(pokemon1.attack + 10)} damage!</div>
                <div>{pokemon2.name} lost {(pokemon1.attack + 10)} HP!</div></>
            )
        }
    
    return <div>
        {/* <div>{pokemon2.name} Health: {pokemon2Health}</div> */}
    </div>
}
