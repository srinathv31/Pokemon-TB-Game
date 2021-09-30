import { Pokemon } from "../interfaces/pokemon";
import { getMissPercent } from "../utilities/data";
import { getMissValue } from "../utilities/data";


export function BattleControls({ pokemon1, pokemon2, pokemon1Health, pokemon2Health, gameSetter, criticalSetter }:
    { pokemon1: Pokemon, pokemon2: Pokemon,
      pokemon1Health: (h: number) => void, pokemon2Health: (h: number) => void,
      gameSetter: (g: number) => void, criticalSetter: (c: number) => void }): JSX.Element {

        function cpuAttack(willDefend: boolean) {
            if (willDefend){
                cpuDefenseHandler();
            }

            else if (!willDefend){
                playerAttack();
                if (pokemon1.health > pokemon2.attack){
                    pokemon1.health = pokemon1.health - pokemon2.attack;
                }
                else {
                    pokemon1.health = 0;
                }
                pokemon1Health(pokemon1.health);
                gameSetter(4);
                return pokemon1Health;
            }
        }

        function cpuAttackChoice() {
            const percent = getMissPercent(1);
            const willDefend = getMissValue(percent, 1);
            cpuAttack(willDefend);
        }

        function playerAttack() {
            if (pokemon2.health > pokemon1.attack){
                pokemon2.health = pokemon2.health - pokemon1.attack;
            }
            else {
                pokemon2.health = 0;
            }
            pokemon2Health(pokemon2.health);
            gameSetter(3);
            return pokemon2Health;
        }

        function criticalCPUAttack() {
            if (pokemon1.health > (pokemon2.attack + 10)){
                pokemon1.health = pokemon1.health - (pokemon2.attack + 10);
            }
            else {
                pokemon1.health = 0;
            }
            pokemon1Health(pokemon1.health);
            gameSetter(14);
            return pokemon1Health;
        }

        function criticalPlayerAttack() {
            if (pokemon2.health > (pokemon1.attack + 10)){
                pokemon2.health = pokemon2.health - (pokemon1.attack + 10);
            }
            else {
                pokemon2.health = 0;
            }
            pokemon2Health(pokemon2.health);
            gameSetter(11);
            return pokemon2Health;
        }

        function checkWinner() {
            if (pokemon1.health === 0) {
                gameSetter(5);
                return true;
            }
            if (pokemon2.health === 0) {
                gameSetter(6);
                return true;
            }
            return false;
        }

        function attackHandler() {
            if(checkWinner()){
                return 0;
            }
            cpuAttackChoice();
            if(checkWinner()){
                return 0;
            }
            checkWinner();
        }

        function playerDefendPrompt() {
            gameSetter(7);
        }

        function checkMiss() {
            const percent = getMissPercent(pokemon1.defense);
            criticalSetter(percent);
            return getMissValue(percent, pokemon1.defense);
        }

        function playerDefend() {
            const isMiss = checkMiss();
            if (isMiss) {
                gameSetter(10);
                setTimeout(criticalPlayerAttack, 3000);
            }
            else if (!isMiss){
                if ((pokemon1.health + pokemon1.defense) > pokemon2.attack){
                    pokemon1.health = (pokemon1.health + pokemon1.defense) - pokemon2.attack;
                }
                else {
                    pokemon1.health = 0;
                }
                pokemon1Health(pokemon1.health);
                gameSetter(8);
            }
            return pokemon1Health;
        }

        function cpuDefendPrompt() {
            gameSetter(12);
        }

        function cpuDefend() {
            const isMiss = checkMiss();
            if (isMiss) {
                gameSetter(13);
                setTimeout(criticalCPUAttack, 3000);
            }
            else if (!isMiss){
                if ((pokemon2.health + pokemon2.defense) > pokemon1.attack){
                    pokemon2.health = (pokemon2.health + pokemon2.defense) - pokemon1.attack;
                }
                else {
                    pokemon2.health = 0;
                }
                pokemon2Health(pokemon2.health);
                gameSetter(15);
            }
            return pokemon2Health;
        }

        function defenseHandler() {
            if(checkWinner()){
                return 0;
            }
            playerDefendPrompt();
            if(checkWinner()){
                return 0;
            }
            setTimeout(playerDefend, 2000);
            if(checkWinner()){
                return 0;
            }
            checkWinner();
        }

        function cpuDefenseHandler() {
            if(checkWinner()){
                return 0;
            }
            cpuDefendPrompt();
            if(checkWinner()){
                return 0;
            }
            setTimeout(cpuDefend, 2000);
            if(checkWinner()){
                return 0;
            }
            checkWinner();
        }

        // function resetGame() {
        //     gameSetter(1);
        //     pokemon1Health(100);
        //     pokemon2Health(100);
        //     checkWinner();
        // }

        // function playAgain() {
        //    <button onClick={resetGame}>Play Again?</button>
        // }

        // if (!checkWinner()) {
        //     <><button onClick={attackHandler}>Attack</button><br /><br />
        //     <button onClick={defenseHandler}>Defend</button><br /><br /></>    
        // }
        

    return <div>
        <button className="damage-button" onClick={attackHandler}>Attack</button><br /><br />
        <button className="defend-button" onClick={defenseHandler}>Defend</button><br /><br />
    </div>
}
    