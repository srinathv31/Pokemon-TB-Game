// Return random card from Deck
export function getRandomPokemon<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}

export function getMissPercent(min: number) {
    return Math.floor(Math.random() * (100 - min + 1)) + min;
}

export function getMissValue(percent: number, min: number) {
    const value = Math.floor(Math.random() * (100 - min + 1)) + min;
    if (percent > value) {
        return true;
    }
    else {
        return false;
    }
}
