import { Pokemon } from "../interfaces/pokemon";
import '../Dots.css';

export function BattleLogger({ pokemon1, pokemon2, gameState, criticalChance}:
    { pokemon1: Pokemon, pokemon2: Pokemon, pokemon2Health: number, 
        gameState: number, criticalChance: number }): JSX.Element {


        // Switch statement to trigger certain text updates
        switch(gameState) {
            case (1):
                return (
                    <div>Game has Started!</div>
                );
            case (2):
                return(
                    <><div>Player has Drawn: {pokemon1.name}</div><br /><div>CPU had Drawn: {pokemon2.name}</div></>
                );
            case (3):
                return(
                    <div className="loading">{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div>
                );
            case (4):
                return(
                    <><div>{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div>
                    <div>{pokemon2.name} attacked {pokemon1.name} for {pokemon2.attack} HP!</div></>
                );
            case (5):
                return(
                    <><div>{pokemon2.name} attacked {pokemon1.name} for {pokemon2.attack} HP!</div>
                    <div>CPU Wins!</div>
                    <br /><div>Refresh the page to play again!</div></>
                );
            case (6):
                return(
                    <><div>{pokemon1.name} attacked {pokemon2.name} for {pokemon1.attack} HP!</div>
                    <div>Player Wins!</div>
                    <br /><div>Refresh the page to play again!</div></>
                );
            case (7):
                return(
                    <div className="loading">{pokemon1.name} is defending</div>
                );
            case (8):
                return(
                    <><div>{pokemon1.name} with a {criticalChance}% chance to dodge and counter attack.</div><br />
                    <div>{pokemon1.name} could not dogde attack!</div>
                    <div>{pokemon2.name} attacked {pokemon1.name} for {(pokemon2.attack - pokemon1.defense)} HP!</div></>
                );
            case (9):
                return(
                    <div>Player has decided to flee! CPU wins!</div>
                );
            case (10):
                return(
                    <><div className="loading">{pokemon1.name} with a {criticalChance}% chance to dodge and counter attack</div><br />
                    <div>{pokemon1.name} dodged {pokemon2.name}'s attack!</div></>
                );
            case (11):
                return(
                    <><div>{pokemon1.name} with a {criticalChance}% chance to counter attack.</div><br />
                    <div>{pokemon1.name} counter-attacked with critical hit of {(pokemon1.attack + 10)} damage!</div>
                    <div>{pokemon2.name} lost {(pokemon1.attack + 10)} HP!</div></>
                );
            case (12):
                return(
                    <div className="loading">CPU's {pokemon2.name} is defending</div>
                );
            case (13):
                return(
                    <><div className="loading">{pokemon2.name} with a {criticalChance}% chance to dodge and counter attack</div><br />
                    <div>{pokemon2.name} dodged {pokemon1.name}'s attack!</div></>
                );
            case (14):
                return(
                    <><div>CPU's {pokemon2.name} with a {criticalChance}% chance to counter attack.</div><br />
                    <div>{pokemon2.name} counter-attacked with critical hit of {(pokemon2.attack + 10)} damage!</div>
                    <div>{pokemon1.name} lost {(pokemon2.attack + 10)} HP!</div></>
                );
            case (15):
                return(
                    <><div>{pokemon2.name} with a {criticalChance}% chance to dodge and counter attack.</div><br />
                    <div>{pokemon2.name} could not dogde attack!</div>
                    <div>{pokemon1.name} attacked {pokemon2.name} for {(pokemon1.attack - pokemon2.defense)} HP!</div></>
                );
            }

    return <div>
        {/* <div>{pokemon2.name} Health: {pokemon2Health}</div> */}
    </div>
}
