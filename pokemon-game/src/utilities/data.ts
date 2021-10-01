// Return random card from Deck
export function getRandomPokemon<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}

// Generate a number between min and 100
export function getMissPercent(min: number) {
    return Math.floor(Math.random() * (100 - min + 1)) + min;
}

// Pass through given number, generate a number between min and 100
// If the (random number) < (given number) return true, else return false
// Idea is to simulate a percent chance
// For example, if (percent = 45)... (new random number) has 45/100 chance to be true. aka ~45% chance to be true
export function getMissValue(percent: number, min: number) {
    const value = Math.floor(Math.random() * (100 - min + 1)) + min;
    if (percent > value) {
        return true;
    }
    else {
        return false;
    }
}
