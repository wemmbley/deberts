const CardDeck = require('./CardDeck');
const Deck = new CardDeck();

test('Deck.setTrump() - Выбросить ошибку на неверный козырь', () => {
    expect(() => {
        Deck.setTrump('gg');
    }).toThrow();
});

test('Deck.getCardScore() - Выбросить ошибку на неверно переданную карту', () => {
    expect(() => {
        Deck.getCardScore('gg');
    }).toThrow();
});

test('Deck.getScoreOfHand() -  Передать карты на сумму 34 очка.', () => {
    expect(() => {
        Deck.getScoreOfHand([['10','Ace'], [9, 'Spade'], [10,'Ace']],'Spade').toBe(34);
    });
});

test('Deck.getScoreOfHand() -  Передать карты на сумму 62 очка.', () => {
    expect(() => {
        Deck.getScoreOfHand([['10','Ace'], ['J', 'Spade'], [9,'Spade'], ['A','Ace'], ['K', 'Spade'], ['Q','Ace']],'Spade').toBe(62);
    });
});

test('Deck.getScoreOfHand() -  Передать карты на сумму 0 очков.', () => {
    expect(() => {
        Deck.getScoreOfHand([[7,'Ace'], [9, 'Spade'], [8,'Ace'], [9,'Ace'],[7,'Spade']],'Spade').toBe(34);
    });
});