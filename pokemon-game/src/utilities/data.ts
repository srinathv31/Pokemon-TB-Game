// Return random card from Deck
export function getRandomPokemon<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}
