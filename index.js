const gameConfig = require('./game/GameConfig');
const config = new gameConfig({
    players: 2,
    versus: '1x1'
},[

]);
const CardDeck = require('./game/CardDeck');
const Deck = new CardDeck(config);
Deck.setTrump('Spade');



    Deck.checkFifty([
        [10,'Spade'],
        ['K', 'Spade'],
        ['Q', 'Spade'],
        ['J', 'Spade'],
        [8, 'Spade']
    ])
