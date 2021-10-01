import { Pokemon } from "../interfaces/pokemon";
import { getMissPercent } from "../utilities/data";
import { getMissValue } from "../utilities/data";


export function BattleControls({ pokemon1, pokemon2, pokemon1Health, pokemon2Health, gameSetter, criticalSetter }:
    { pokemon1: Pokemon, pokemon2: Pokemon,
      pokemon1Health: (h: number) => void, pokemon2Health: (h: number) => void,
      gameSetter: (g: number) => void, criticalSetter: (c: number) => void }): JSX.Element {

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

        // getMissPercent() generates random number from [Pokemon.defense to 100]. This will simulate a percentage
        // set criticalSetter to update its useState in the Battle Logger
        // getMissValue() takes in the previous percent number and generates another random number from [Pokemon.defense to 100].
        // If the (newly generated random value) < (percent) -> return true, else false.
        // For example, if (percent) equals 45... new value has a 45/100 chance to be under 45. ~ 45% chance to be true. 
        function checkMiss() {
            const percent = getMissPercent(pokemon1.defense);
            criticalSetter(percent);
            return getMissValue(percent, pokemon1.defense);
        }

        // Uses cpuAttackChoice() return to determine if CPU will attack or defend
        // If false, Player will attack first, then CPU will execute attack logic
        // Else, call cpuDefenseHandler()
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

        // Calculates percent probablility if CPU will attack (false) or defend (true)
        function cpuAttackChoice() {
            const percent = getMissPercent(1);
            const willDefend = getMissValue(percent, 1);
            cpuAttack(willDefend);
        }

        // Critical attack is equal to CPU.attack + 10
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

        // Damage = Player.attack
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

        // Critical attack is equal to Player.attack + 10
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

        function playerDefendPrompt() {
            gameSetter(7);
        }

        // Call checkMiss() to calculate probability of whether Player will succesfully dodge or miss dodge
        // if checkMiss() = true, call criticalPlayerAttack()
        // if checkMiss() = false, PLayer will take damage equal to CPU.attack - Player.defense
        // Simulates risk for missing dodge
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

        // Call checkMiss() to calculate probability of whether CPU will succesfully dodge or miss dodge
        // if checkMiss() = true, call criticalCPUAttack()
        // if checkMiss() = false, CPU will take damage equal to Player.attack - CPU.defense
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

        // Main attack function, calls cpuAttackChoice() to determine whether CPU attacks or defends Player's attack
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

        // Main defense function, calls prompt to show defend state, then calls playerDefend()
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

        // Check for winner, display prompt, call cpuDefend() with setTimeout to simulate time to take turn
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


        // ********** Unused functions, need to implement play again button in future **********
        
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
    