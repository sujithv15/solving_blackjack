/*

1. Create a deck, and shuffle cards
    * create objects representing each card with properties for suit, rank, and value
    * randomize and push cards into array representing deck

2. Add desired amount of decks into the shoe

3. Choose number of players (1-5?)

4. Get the bankrolls straightened

5. Start game:
    a.  Deal cards, first dealer card face up, second face down
    b.  Check around the table for blackjacks, and square up accordingly
    c.  For remaining hands:
        1.  Display the current score
        2.  Give player option to hit or stay (or double or split if available)
        3.  Execute player option, displaying his score and options, then repeat until stay/break
    d.  For dealer's hand:
        1.  Reveal hidden card, and hit or stay based on desired blackjack rules (hit/stay soft 16)
    e.  Compare each player's hand with dealers, and settle payouts accordingly

 */

function createDeck() {
    const deck = [];
    deck.push(
        {suit: 'clubs', rank: '2', value: 2},
        {suit: 'clubs', rank: '3', value: 3},
        {suit: 'clubs', rank: '4', value: 4},
        {suit: 'clubs', rank: '5', value: 5},
        {suit: 'clubs', rank: '6', value: 6},
        {suit: 'clubs', rank: '7', value: 7},
        {suit: 'clubs', rank: '8', value: 8},
        {suit: 'clubs', rank: '9', value: 9},
        {suit: 'clubs', rank: '10', value: 10},
        {suit: 'clubs', rank: 'Jack', value: 10},
        {suit: 'clubs', rank: 'Queen', value: 10},
        {suit: 'clubs', rank: 'King', value: 10},
        {suit: 'clubs', rank: 'Ace', value: 1},
        {suit: 'diamonds', rank: '2', value: 2},
        {suit: 'diamonds', rank: '3', value: 3},
        {suit: 'diamonds', rank: '4', value: 4},
        {suit: 'diamonds', rank: '5', value: 5},
        {suit: 'diamonds', rank: '6', value: 6},
        {suit: 'diamonds', rank: '7', value: 7},
        {suit: 'diamonds', rank: '8', value: 8},
        {suit: 'diamonds', rank: '9', value: 9},
        {suit: 'diamonds', rank: '10', value: 10},
        {suit: 'diamonds', rank: 'Jack', value: 10},
        {suit: 'diamonds', rank: 'Queen', value: 10},
        {suit: 'diamonds', rank: 'King', value: 10},
        {suit: 'diamonds', rank: 'Ace', value: 1},
        {suit: 'hearts', rank: '2', value: 2},
        {suit: 'hearts', rank: '3', value: 3},
        {suit: 'hearts', rank: '4', value: 4},
        {suit: 'hearts', rank: '5', value: 5},
        {suit: 'hearts', rank: '6', value: 6},
        {suit: 'hearts', rank: '7', value: 7},
        {suit: 'hearts', rank: '8', value: 8},
        {suit: 'hearts', rank: '9', value: 9},
        {suit: 'hearts', rank: '10', value: 10},
        {suit: 'hearts', rank: 'Jack', value: 10},
        {suit: 'hearts', rank: 'Queen', value: 10},
        {suit: 'hearts', rank: 'King', value: 10},
        {suit: 'hearts', rank: 'Ace', value: 1},
        {suit: 'spades', rank: '2', value: 2},
        {suit: 'spades', rank: '3', value: 3},
        {suit: 'spades', rank: '4', value: 4},
        {suit: 'spades', rank: '5', value: 5},
        {suit: 'spades', rank: '6', value: 6},
        {suit: 'spades', rank: '7', value: 7},
        {suit: 'spades', rank: '8', value: 8},
        {suit: 'spades', rank: '9', value: 9},
        {suit: 'spades', rank: '10', value: 10},
        {suit: 'spades', rank: 'Jack', value: 10},
        {suit: 'spades', rank: 'Queen', value: 10},
        {suit: 'spades', rank: 'King', value: 10},
        {suit: 'spades', rank: 'Ace', value: 1},
    )
    return deck;
}

function shuffle(deck) {
    const numCards = deck.length;
    for (let i = 0; i < Math.floor(Math.random() * 1000); i++)
    {
        for (let i = 0; i < deck.length; i++) {
            let shuffledCard = deck.pop();
            deck.splice(Math.floor(Math.random() * numCards), 0, shuffledCard);
        }
    }
    return deck;
}

function createShoe(deck, numShoes) {
    const shoe = [];
    for (let i = 0; i < numShoes; i++) {
        for (let j = 0; j < deck.length; j++) {
            shoe.push(deck[j]);
        }
    }
    return shoe;
}

newShoe = shuffle(createShoe(createDeck(), 8));
console.log(newShoe);
console.log(newShoe.length)