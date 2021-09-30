import '../help.css';

// eslint-disable-next-line
export function HelpView({}:
    { }): JSX.Element {
    
    return <div>
        <body className="change-logs">
        <div className="list">
            <div>
                <div className="underline-change-logs"><h1 className="h1-change-logs">How To Play</h1></div>
                <ul>
                    <li>First, you have to select "Draw Card" to draw a random Pokemon from the deck. By default, both you and the CPU
                        are given Charizard.
                    </li>
                    <li>Next, click on "Start Game" to begin the battle.
                    </li>
                    <li>You are given two options: "Attack" and "Defend"
                    </li>
                    <li>"Attack" simply attacks the opponent's Pokemon based on how much damage your Pokemon has.
                        However, this is a turn based game so the CPU Pokemon will also attack you back.
                    </li>
                    <li>"Defend" makes your Pokemon try to dodge the attack. The probablity of a succesful dodge depends on
                        the Pokemon's "defense" attribute. The higher the defense, the higher the probablity for the Pokemon
                        to dodge the attack.
                    </li>
                    <li>If your Pokemon succesfully dodges the CPU's attack, your Pokemon will then counter-attack with 
                        a critical attack on the CPU Pokemon with damage equal to your Pokemon's attack attribute + 10.
                    </li>
                    <li>If your Pokemon misses the dodge, then your Pokemon takes damage equal to the CPU's Pokemon's attack
                        attribute minus your Pokemon's defense attribute. So the higher your defense attribute, the less damage
                        you will take on a missed dodge.
                    </li>
                    <li>Finally, a winner is declared when a Pokemon reaches 0 Health.</li>
                    <li>Note: some strategy could be to gamble with the "Defend" ability to give you a leg up in the fight.
                    </li>
                </ul><br />
            </div>
        </div>
    </body>
    </div>
}

