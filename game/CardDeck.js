'use strict';

/**
 * CardDeck
 */
class CardDeck {

    /**
     * Constructor
     */
    constructor(gameParams) {
        this.gameParams = gameParams;
        this.cardSuits = ['Heart','Diamond','Club','Spade'];
        this.cardNames = [
            7, 8, 9, 10, 'J', 'Q', 'K', 'A'
        ];
        this.cardScore = {
            7: 0,
            8: 0,
            9: 0,
            10: 10,
            'J': 2,
            'Q': 3,
            'K': 4,
            'A': 11,
        };
    }

    checkCombination() {

    }

    checkFifty(hand) {
        this.filterCards(hand);

        let cards = {
            'Spade': [],
            'Heart': [],
            'Diamond': [],
            'Club': []
        };

        hand.map((card,index,array) => {
            let cardName = card[0];
            let cardTrump = card[1];

            for(const [key,value] of Object.entries(this.cardScore)) {
                console.log(key + ' - ' + value)
            }

            switch(cardTrump) {
                case 'Spade': {
                    cards.Spade.push(cardName);
                    break;
                }
                case 'Diamond': {
                    cards.Diamond.push(cardName);
                    break;
                }
                case 'Club': {
                    cards.Club.push(cardName);
                    break;
                }
                case 'Heart': {
                    cards.Heart.push(cardName);
                    break;
                }
            }
        });

        console.log(this.cardScore)

        console.log(cards.Spade.sort((a,b) => {

        }))
    }

    /**
     * Check for Bella
     * @param hand
     * @returns {boolean}
     */
    checkBella(hand) {
        this.filterCards(hand);

        let trumpCards = [];
        let bellaCards = 0;

        hand.map((card, index, array) => {
            let cardName = card[0];
            let cardTrump = card[1];

            if(this.getTrump() === cardTrump) {
                trumpCards.push([cardName,cardTrump]);
            }
        });

        if(trumpCards.length !== 0) {
            trumpCards.map((card,index,array) => {
                let cardName = card[0];

                if(cardName === 'Q' || cardName === 'K') {
                    bellaCards++;
                }
            });
        }

        return bellaCards === 2;
    }

    getCards() {
        return Object.keys(this.cardNames).
        flatMap(name => this.cardSuits.map(suit => suit + ' ' + name));
    }

    /**
     * Filter fpr card
     * @param card
     * @returns {*}
     */
    filterCard(card) {
        if (!Array.isArray(card)) {
            throw new Error('Не массив.');
        }
        if (card.length !== 2) {
            throw new Error('Массив не из 2 символов.');
        }
        if (!this.cardNames.includes(card[0])) {
            throw new Error(`Handed an unavailable card ${card[0]}`);
        }
        this.filterTrump(card[1]);
        return card;
    }

    /**
     * Filter for trump
     * @param trump
     */
    filterTrump(trump) {
        if (typeof trump !== 'string') {
            throw new Error('Передана не строка.');
        }
        if (!this.cardSuits.includes(trump)) {
            throw new Error('Неверный козырь.');
        }
    }

    /**
     * Check if trump has been defined
     */
    hasTrump() {
        if(this.trump === undefined) {
            throw new Error('Trump is not defined.');
        }
    }

    /**
     * Get score of the card
     * @param card
     * @param trump
     * @returns {number}
     */
    getCardScore(card, trump) {
        switch (card[0]) {
            case 'A': {
                return 11;
            }
            case 'K': {
                return 4;
            }
            case 'Q': {
                return 3;
            }
            case 'J': {
                if(trump === card[1]) {
                    return 20;
                } else {
                    return 2;
                }
            }
            case 10: {
                return 10;
            }
            case 9: {
                if(trump === card[1]) {
                    return 14;
                } else {
                    return 0;
                }
            }
            default: {
                return 0;
            }
        }
    }

    /**
     * Filter hand
     * @param hand
     */
    filterCards(hand) {
        if(!Array.isArray(hand)) {
            throw new Error('Not array handed');
        }

        hand.map((card, trump, array) => {
            this.filterCard(card, trump);
        });
    }

    /**
     * Get score of the current hand
     * @param hand
     * @returns {number}
     */
    getScoreOfHand(hand) {
        this.hasTrump();

        this.filterCards();

        let score = 0;

        for(let card of hand) {
            score += this.getCardScore([card[0],card[1]],this.trump);
        }

        return score;
    }

    dealCards(count) {
        switch(this.gameParams.players) {

        }
    }

    /**
     * Set trump
     * @param trump
     */
    setTrump(trump) {
        this.filterTrump(trump);

        if(
            trump === 'Ace' ||
            trump === 'Diamond' ||
            trump === 'Club' ||
            trump === 'Spade'
        ) {
            this.trump = trump;
        } else {
            throw `Cant write a ${trump} trump.`;
        }
    }

    /**
     * Return current trump
     * @returns {*}
     */
    getTrump() {
        this.hasTrump();

        return this.trump;
    }
}
module.exports = CardDeck;